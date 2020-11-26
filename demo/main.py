from flask import Flask, render_template, request
app = Flask(__name__,template_folder='templates')

@app.route("/")
def hello():
    return render_template("main.html")

@app.route('/send', methods=['GET','POST'])
def send():
    print(request)
if __name__ == "__main__":
    app.run()