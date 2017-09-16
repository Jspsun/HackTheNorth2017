from flask import Flask, json, request
import os
import VideoParse as vp
import OCR as ocr

app = Flask(__name__)

# Post a json to flask server

class Transcript:
    def __init__(self, url, transcript):
        self.url = url
        self.transcipt = transcript

@app.route('/', methods=['Post', 'Get'])
def api_root():
    if request.method == "GET":
        vidid = request.args.get('id')
        seconds = request.args.get('time')
    else:
        if request.headers['Content-Type'] != 'application/json':
             return "Please post a JSON"
        data = json.loads(json.dumps(request.json))
        vidid = data.id
        seconds = data.time

    url = 'https://www.youtube.com/watch?v=' + vidid

    # TODO check if in DB
    
    fname = vidid + ".mp4"
    folder = "./videos" 

    path = os.path.join(folder,fname)

    transcript = ocr.process_time(url, path, seconds)
    # transcript = ocr.process_url(url, path)

    # TODO Add to DB 
    print(transcript)

    return json.dumps(transcript)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1338))
    app.run(debug=True, host='0.0.0.0', port=port)
