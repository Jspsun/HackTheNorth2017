import urllib
from pytube import YouTube

def downloadYt(url, fname):
    yt = YouTube(url)
    yt = yt.filter('mp4')[-1] # highest res
    video = yt.get('mp4')
    video.download('./videos/' + fname)





