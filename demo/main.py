from flask import Flask, render_template, request
import os
import base64
import sys
sys.path.insert(1, '/Users/sunny/Documents/GitHub/project-demo/demo/stroke')
from glpredict import stroke
app = Flask(__name__,template_folder='templates')

@app.route("/")
def hello():
    return render_template("main.html")

@app.route('/upload', methods=['GET','POST'])
def upload():
    if request.method =='POST':
        file = request.files['file']
        file_path = os.path.join('/Users/sunny/Documents/GitHub/project-demo/tmp',file.filename)
        file.save(file_path)
        print(file_path)
        out_path = stroke(file_path)
        img_stream = ''
        with open(out_path, 'rb') as img_f:
            img_stream = img_f.read()
            img_stream = base64.b64encode(img_stream)
        return img_stream
    else:
        return "false"



if __name__ == "__main__":
    app.debug = True
    app.run()