from flask import Flask, json, request
import os
import VideoParse as vp
import OCR as ocr

app = Flask(__name__)

# Post a json to flask server

@app.route('/', methods=['Post', 'Get'])
def api_root():
    # validate that user sends in a json
    print(request.method)
    print(request.url)
    if request.method == "GET":
        url = 'https://www.youtube.com/watch?v=ANuuSFY2BbY' # data["url"] 
    else:
        if request.headers['Content-Type'] != 'application/json':
             return "Please post a JSON"
        data = json.loads(json.dumps(request.json))
        url = data.url

    fname = "tmp.mp4" 
    folder = "./videos" 
    print("downloading to " + fname)
    vp.downloadYt(url, folder, fname)
    print("processing " + fname)
    transcript = ocr.process_video(os.path.join(folder, fname))
    for x in transcript:
        print(x)
    return ""

    # return json.dumps(ocr.process_video(os.path.join(folder, fname)))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 1337))
    app.run(debug=True, host='0.0.0.0', port=port)
