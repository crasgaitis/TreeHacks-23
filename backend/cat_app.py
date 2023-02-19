from flask import Flask, render_template, request, redirect
from wtforms import Form, StringField, DecimalField
from wtforms.validators import InputRequired, NumberRange
import pandas as pd
import numpy as np
import re
from transformers import VisionEncoderDecoderModel, ViTFeatureExtractor, AutoTokenizer
import torch
from PIL import Image
import requests
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Define Flask app
app = Flask(__name__)

# Flask-WTF form
class ListingSearchForm(Form):
    search_query = StringField('Search Query', validators=[InputRequired()])
    min_price = DecimalField('Minimum Price', validators=[InputRequired(), NumberRange(min=0)])
    max_price = DecimalField('Maximum Price', validators=[InputRequired(), NumberRange(min=0)])
    min_acres = DecimalField('Minimum Acres', validators=[InputRequired(), NumberRange(min=0)])
    max_acres = DecimalField('Maximum Acres', validators=[InputRequired(), NumberRange(min=0)])

# Loading/cleaning
def recommend_land(user_input, user_min_price, user_max_price, user_min_acres, user_max_acres):
    
    # utils
    def chop_text(s):
        return re.sub(pattern, '', s)
    
    def predict(image,max_length=128, num_beams=4):
        img = Image.open(image)
        if img.mode != 'RGB':
            img = img.convert(mode="RGB")
        pixel_values = feature_extractor(images=[img], return_tensors="pt").pixel_values
        pixel_values = pixel_values.to(device)
        clean_text = lambda x: x.replace('','').split('\n')[0]
        output_ids = model.generate(pixel_values, num_beams=num_beams, max_length=max_length)
        preds = tokenizer.decode(output_ids[0], skip_special_tokens=True)
        return preds
        
    def image_caption(row):
        response = requests.get(row['images'])
        with open('temp.jpg', 'wb') as f:
            f.write(response.content)  
        image_desc = predict('temp.jpg', 128, 4)
        return image_desc

    df = pd.read_csv('backend\listings2.csv')
    df.drop(['APN', 'url', 'availibility', 'description', 'coords', 'taxes'],  axis=1)
    df = df.head(4) # CHANGE THIS LATER

    # one image per land plot
    pattern = r',.*'
    df['images'] = df['images'].apply(chop_text)

    # caption generator
    model_name = "bipin/image-caption-generator"
    model = VisionEncoderDecoderModel.from_pretrained(model_name)
    feature_extractor = ViTFeatureExtractor.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained("gpt2")
    device = 'cpu'
    model.to(device)

    encoder_checkpoint = "nlpconnect/vit-gpt2-image-captioning"
    decoder_checkpoint = "nlpconnect/vit-gpt2-image-captioning"
    model_checkpoint = "nlpconnect/vit-gpt2-image-captioning"

    tokenizer = AutoTokenizer.from_pretrained(decoder_checkpoint)
    model = VisionEncoderDecoderModel.from_pretrained(model_checkpoint)
