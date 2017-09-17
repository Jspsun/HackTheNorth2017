from flask import Flask, json, request, jsonify
import os
import VideoParse as vp
import OCR as ocr
from flask_cors import CORS

app = Flask(__name__)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

# Post a json to flask server
class Transcript:
    def __init__(self, url, transcript):
        self.url = url
        self.transcipt = transcript

@app.route('/', methods=['POST', 'GET'])
def api_root():
    if request.method == "GET":
        vidid = request.args.get('id').strip('https://www.youtube.com/embed/')
        seconds = request.args.get('time')

        url = request.args.get('id').replace('embed/', 'watch?v=')

        fname = vidid + ".mp4"
        folder = "./videos" 

        path = os.path.join(folder, fname)

        print(url, path, seconds)

        resp = jsonify(ocr.process_time(url, path, seconds))
        print(resp)
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

    return resp

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1338))
    app.run(debug=True, host='localhost', port=port)
