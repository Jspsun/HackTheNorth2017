from flask import Flask, json, request
import os
import VideoParse as vp

app = Flask(__name__)

# Post a json to flask server

@app.route('/', methods=['Post', 'Get'])
def api_root():
    # validate that user sends in a json
    print(request.method)
    print(request.url)
    if request.method == "GET":
        url = 'https://www.youtube.com/watch?v=WPvGqX-TXP0' # data["url"] 
    else:
        if request.headers['Content-Type'] != 'application/json':
             return "Please post a JSON"
        data = json.loads(json.dumps(request.json))
        url = data.url

    fname = "tmp.mp4" 
    print("downloading to " + fname)
    vp.downloadYt(url, fname)
    return json.dumps(process_video(fname))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1337))
    app.run(debug=True, host='0.0.0.0', port=port)
