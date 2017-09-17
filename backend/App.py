from flask import Flask, json, request, jsonify
import os
import VideoParse as vp
import OCR as ocr
import Summarizer as summarizer
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Post a json to flask server

class Transcript:
    def __init__(self, url, transcript):
        self.url = url
        self.transcipt = transcript

@app.route('/', methods=['Post', 'Get'])
@cross_origin()
def api_root():
    if request.method == "GET":
        vidid = request.args.get('id')
        seconds = request.args.get('time')

        resp = jsonify(ocr.process_time(url, path, seconds))
    else:
        if request.headers['Content-Type'] != 'application/json':
             return "Please post a JSON"
        data = json.loads(json.dumps(request.json))

        vidid = data['id'].strip('https://www.youtube.com/embed/')
        url = data['id'].replace('embed/', 'watch?v=')

        # TODO check if in DB
    
        fname = vidid + ".mp4"
        folder = "./videos" 

        path = os.path.join(folder, fname)

        if not os.path.isfile(path):
            vp.downloadYt(url, path)

        resp = jsonify({})
    
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

@app.route('/summarize', methods=['Post'])
def summarize():
    if request.headers['Content-Type'] != 'application/json':
         return "Please post a JSON"
    data = json.loads(json.dumps(request.json))
    text=data["text"].strip()
    resp=jsonify({"text":summarizer.summarize_text(text)})
    
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1338))
    app.run(debug=True, host='localhost', port=port)
