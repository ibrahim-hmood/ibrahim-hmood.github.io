from flask import Flask, render_template, request

app = Flask(__name__)

#Checks if device is mobile
@app.route("/is_mobile")
def is_mobile():
    #Check if iphone, android, or blackberry are in connection user agent
    devices = ["iphone", "android", "blackberry"]
    agent = request.headers.get('User-Agent').lower()
    for device in devices:
        if(device in agent):
            return True
    return False


#The mobile version of our interface
@app.route("/mobile")
def mobile():
    #Load the mobile version
    return render_template("mobile.html")

#The main page, desktop mode
@app.route("/")
def index():
    #Check if device is mobile
    if(is_mobile()):
        return mobile()
    #Just render main index
    return render_template("index.html")

if(__name__ == "__main__"):
    app.run(debug = True, host="0.0.0.0")