import cv2
from PIL import Image
import pytesseract

def process_video(file):
  vid = cv2.VideoCapture(file)
  print("hit")
  speed = 3
  count = 0
  ret = []
  while True:
    success, image = vid.read()

    if not success:
      break

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    cv2.imwrite('./images/frame{}.jpg'.format(count), gray)
    ret.append({
      timestamp(vid.get(cv2.CAP_PROP_POS_FRAMES) / vid.get(cv2.CAP_PROP_FPS)): process_picture('./images/frame{}.jpg'.format(count))
    })
    count += 1

    vid.set(cv2.CAP_PROP_POS_FRAMES, vid.get(cv2.CAP_PROP_POS_FRAMES) + vid.get(cv2.CAP_PROP_FPS) * speed)

  return ret

def timestamp(seconds):
  print(seconds)
  return int(seconds)

def process_picture(file):
  return pytesseract.image_to_string(Image.open(file))

if __name__ == '__main__':
  print(process_picture('./test.png'))
  transcript = process_video('./videos/test.mp4')
  for t in transcript:
    print(t)

# pytesseract.pytesseract.tesseract_cmd = '<full_path_to_your_tesseract_executable>'
# Include the above line, if you don't have tesseract executable in your PATH
# Example tesseract_cmd: 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract'
