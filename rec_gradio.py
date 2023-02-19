import gradio as gr

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

# loading/cleaning
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

    df = pd.read_csv('https://raw.githubusercontent.com/dyu222/TreeHacks-23/main/backend/listings2.csv')
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
    model = VisionEncoderDecoderModel.from_pretrained(model_checkpoint).to(device)

    # get captions
    df['captions'] = df.apply(image_caption, axis=1)
    print(str(df['captions'][0]))

    image_captions = df['captions']

    # clean captions
    # df['captions'] = df['captions'].apply(lambda x: clean(x) if x is not None else x)
    image_captions_filtered = [caption for caption in image_captions if caption is not None]

    # recommendation with captions vs descriptions
    df_2 = pd.DataFrame({'user_input': [user_input]})
    # df_2['user_input'] = df_2['user_input'].apply(clean)
    
    vectorizer = CountVectorizer()
    image_captions_filtered = [caption for caption in image_captions if caption is not None]
    to_vectorizer = np.append(image_captions_filtered, str(user_input))
    text_vectors = vectorizer.fit_transform(to_vectorizer)
    text_vectors = text_vectors.toarray()
    
    # captions
    for i, caption in enumerate(image_captions):
        cos_similarities = cosine_similarity(text_vectors[0:1], text_vectors[1:])
        df['cos_similarity'] = cos_similarities[0]
        
    
    # implementation of recommend_land function goes here
    # df = pd.read_csv("https://raw.githubusercontent.com/dyu222/TreeHacks-23/main/backend/listings2.csv")
    filtered_df = df[(df['price'] >= user_min_price) & (df['price'] <= user_max_price) & (df['acres'] >= user_min_acres) & (df['acres'] <= user_max_acres)]
    # filtered_df = filtered_df.to_string(index=False)
    # return filtered_df.to_dict(orient='records')
    filtered_df.drop(['APN', 'url', 'availibility', 'description', 'coords', 'taxes', 'cos_similarity'],  axis=1)
    
    return filtered_df.iloc[0]

inputs = [
    gr.inputs.Textbox(label="User Input"),
    gr.inputs.Number(label="Minimum Price", default=900),   
    gr.inputs.Number(label="Maximum Price", default=40000),
    gr.inputs.Number(label="Minimum Acres", default=0.1),
    gr.inputs.Number(label="Maximum Acres", default=41),
]

output = gr.outputs.Dataframe(type="pandas")

gr.Interface(fn=recommend_land, inputs=inputs, outputs="text", title="Land Recommender").launch(share=True)
