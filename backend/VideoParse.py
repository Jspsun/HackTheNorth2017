import urllib
from pytube import YouTube
import os

def downloadYt(url, folder, fname):
    path = os.path.join(folder,fname)
    print("hit " + path)
    if os.path.exists(path ):
        print("deleting " + path)
        os.remove(path) 

    fname = fname[0:fname.rfind(".mp4")]
    print("trimmed path " + fname)

    yt = YouTube(url)
    video = yt.filter('mp4')[-1] # highest res
    yt.set_filename(fname)
    video.download(folder)


if __name__ == '__main__':
    downloadYt('https://www.youtube.com/watch?v=lZt1Nt2vWXM', 'test.mp4')




