import urllib
from pytube import YouTube

def downloadYt(url, fname):
    yt = YouTube(url)
    video = yt.filter('mp4')[-1] # highest res
    video.download(fname)

if __name__ == '__main__':
    downloadYt('https://www.youtube.com/watch?v=m-QToZcV84Q', 'test.mp4')




