import cv2
from PIL import Image
import pytesseract

def process_video(file):
  vid = cv2.VideoCapture(file)

  count = 0
  ret = []
  while count < 1:
    success, image = vid.read()
    print('Reading a new frame ..', success)
    cv2.imwrite('frame{}.jpg'.format(count), image)
    ret += process_picture('frame{}.jpg'.format(count))
    count += 1

def process_picture(file):
  return pytesseract.image_to_string(Image.open(file))

if __name__ == '__main__':
  print(process_picture('./test.png'))
  print(process_video('./videos/test.mp4'))

# pytesseract.pytesseract.tesseract_cmd = '<full_path_to_your_tesseract_executable>'
# Include the above line, if you don't have tesseract executable in your PATH
# Example tesseract_cmd: 'C:\\Program Files (x86)\\Tesseract-OCR\\tesseract'
