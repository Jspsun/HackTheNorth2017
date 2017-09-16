import urllib
from pytube import YouTube
import os

def downloadYt(url, folder, fname):
    path = os.path.join(folder,fname)
    if os.path.exists(path):
        os.delete(path)

    yt = YouTube(url)
    video = yt.filter('mp4')[-1] # highest res
    yt.set_filename(fname)
    video.download(fname)


if __name__ == '__main__':
    downloadYt('https://www.youtube.com/watch?v=lZt1Nt2vWXM', 'test.mp4')




