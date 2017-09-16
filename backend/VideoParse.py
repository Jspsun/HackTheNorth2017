import urllib
from pytube import YouTube
import os

def downloadYt(url, path):
    if os.path.exists(path):
        os.remove(path) 

    folder = path[0: path.rfind("/")]
    fname = path[path.rfind("/") + 1: path.rfind(".")]

    yt = YouTube(url)
    video = yt.filter('mp4')[-1] # highest res
    yt.set_filename(fname)
    video.download(folder)


if __name__ == '__main__':
    downloadYt('https://www.youtube.com/watch?v=lZt1Nt2vWXM', 'videos/test.mp4')




