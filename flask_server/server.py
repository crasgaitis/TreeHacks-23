from flask import Flask, redirect, url_for, request
import requests, json

import chat_bot

app = Flask(__name__)

@app.route("/",methods = ['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        payload = request.form['payload']
        response_string = chat_bot.run_model(payload)
        print(response_string)
        return response_string
    else:
        return "bruh"

@app.route("/hello")
def hello():
    api_url = 'http://10.21.44.55:105'
    response_string = chat_bot.run_model("Where can I buy land?")
    #print(response_string)
    # response = requests.post(url=api_url,
    #     data=response_string,
    #     headers={'Content-Type': 'application/json'}
    # )
    return {"generated_text": response_string}
    #return response_string

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)