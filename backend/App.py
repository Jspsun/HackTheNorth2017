from flask import Flask, json, request, jsonify
import os
import VideoParse as vp
import OCR as ocr
import Summarizer as summarizer
from flask_cors import CORS
import random

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

@app.route('/summarize', methods=['Post'])
def summarize():
    if request.headers['Content-Type'] != 'application/json':
         return "Please post a JSON"
    data = json.loads(json.dumps(request.json))
    text=data["text"].strip()
    resp=jsonify({"text":summarizer.summarize_text(text)})
    
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

@app.route('/getKeyWords', methods=['Post'])
def getKeyWords():
    if request.headers['Content-Type'] != 'application/json':
        return "Please post a JSON"
    # keywords = None
    with open('/Users/Jspsun/AtomWorkspace/HackTheNorth2017/backend/KeyWords.json') as data_file:    
        keywords = json.load(data_file)
        randoKeys = keywords.keys()
        random.shuffle(randoKeys)
        res = {
            randoKeys[0]: keywords[randoKeys[0]],
            randoKeys[1]: keywords[randoKeys[1]],
            randoKeys[2]: keywords[randoKeys[2]],
            randoKeys[3]: keywords[randoKeys[3]],
            randoKeys[4]: keywords[randoKeys[4]]
        }
        # print res
        # console.log('aaaa')
        return jsonify(res)
    # data = json.loads(json.dumps(request.json))

    # key

    # data is a map of all the json input
    # do whatever computation you want here
    # making something to return

    # returnThing = {'message': 'look itaaas a message'}
    # return json.dumps(returnThing)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1338))
    app.run(debug=True, host='localhost', port=port)
