import cv2
from PIL import Image
import pytesseract
import os 
import shutil 
import VideoParse as vp
from selenium import webdriver

# Url to video
def process_url(url, videoPath):
    # download 
    vp.downloadYt(url, videoPath)
    transcript = process_video(videoPath)
    # delete video 
    os.remove(videoPath)

    return transcript

# Process specific frame of video
def process_time(url, path, seconds):
  vid = cv2.VideoCapture(path)
  vid.set(cv2.CAP_PROP_POS_FRAMES, vid.get(cv2.CAP_PROP_FPS) * int(seconds))
  
  success, image = vid.read()

  if not success:
    return ''

  frameFolder = './images/' + os.path.basename(path).split('.')[0]
  if not os.path.exists(frameFolder):
      os.mkdir(frameFolder)

  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  cv2.imwrite(frameFolder + '/frame{}.jpg'.format(seconds), gray)
  transcript = process_picture(frameFolder + '/frame{}.jpg'.format(seconds))

  os.remove(frameFolder + '/frame{}.jpg'.format(seconds))

  return transcript

# Process entire video
def process_video(file):
  vid = cv2.VideoCapture(file)
  speed = 10
  count = 0
  ret = {}

  frameFolder = './images/' + os.path.basename(file).split('.')[0]
  if not os.path.exists(frameFolder):
      os.mkdir(frameFolder)
  
  while True:
    success, image = vid.read()

    if not success:
      break

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    cv2.imwrite(frameFolder + '/frame{}.jpg'.format(count), gray)
    ret[timestamp(vid.get(cv2.CAP_PROP_POS_FRAMES) / vid.get(cv2.CAP_PROP_FPS))] = process_picture(frameFolder + '/frame{}.jpg'.format(count))
    
    count += 1

    vid.set(cv2.CAP_PROP_POS_FRAMES, vid.get(cv2.CAP_PROP_POS_FRAMES) + vid.get(cv2.CAP_PROP_FPS) * speed)

  # shutil.rmtree(frameFolder)

  return ret

def timestamp(seconds):
  print(seconds)
  return int(seconds)

def process_picture(file):
  return pytesseract.image_to_string(Image.open(file))

if __name__ == '__main__':
  print(process_picture('./test.png'))
  transcript = process_video('./videos/test.mp4')
  print(transcript)
  for t, v in transcript.items():
    print(t, v)

# pytesseract.pytesseract.tesseract_cmd = '<full_path_to_your_tesseract_executable>'
# Include the above line, if you don't have tesseract executable in your PATH
# Example tesseract_cmd: 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract'
