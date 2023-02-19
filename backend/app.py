from flask import Flask, request, jsonify
from backend.caption_recommendation import recommend_land
from checkbook import *
import re
import pandas as pd
import numpy as np
from transformers import VisionEncoderDecoderModel, ViTFeatureExtractor, AutoTokenizer
import torch
from PIL import Image
import requests
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import sklearn
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity


app = Flask(__name__)

@app.route('/recommendation', methods=['POST'])
def recommendation():
    user_input = request.json.get('input')
    user_min_price = float(request.json.get('min_price'))
    user_max_price = float(request.json.get('max_price'))
    user_min_acres = float(request.json.get('min_acres'))
    user_max_acres = float(request.json.get('max_acres'))

    result = recommend_land(user_input, user_min_price, user_max_price, user_min_acres, user_max_acres)
    return result

@app.route('/create_invoice', methods=['POST'])
def invoice():
    account = request.json.get('account')
    amount = request.json.get('amount')
    attachment = request.json.get('attachment')
    name = request.json.get('name')
    number = request.json.get('number')
    recipient = request.json.get('recipient')
    return create_invoice(account, amount, attachment, name, number, recipient)

@app.route('/digital_payment', methods=['POST'])
def payment():
    recipient = request.json.get('recipient')
    name = request.json.get('name')
    amount = request.json.get('amount')
    description = request.json.get('description')
    return digital_payment(recipient, name, amount, description)

if __name__ == '__main__':
    app.run(debug=True)
# # we can alter the / to change what api path we want in react 
# @api.route('/profile')
# def my_profile():
#     # edit these to call our code and host it as an api
#     response_body = {
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }

#     return response_body