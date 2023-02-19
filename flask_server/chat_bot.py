import os
import openai
# from dotenv import load_dotenv
import paragraph_picker
# load_dotenv()

#openai.api_key = os.getenv('OPENAI_API_KEY')
openai.api_key = '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'

def run_model(prompt):
    info = paragraph_picker.get_information(prompt)
    prompt = """You are a chat bot. Make sure to only use the following information to answer the users question. Answer truthfully. Make the response sound polite and detailed and one sentence only. If the user asks a personal question, respond and ask them how you can help them:
    """ + ' ' + info + ' ' + """
    This is the question: """ + prompt

    print("-----------------")
    print(prompt)
    print("-----------------")
    completions = openai.Completion.create(prompt=prompt, engine='text-davinci-002', max_tokens=50)
    completions = completions['choices'][0]['text'].strip()
    completions = completions.split('\n')
    completions = completions[len(completions)-1]
    return completions


# while True:
#     prompt = input("Ask me anything: ")
#     info = paragraph_picker.get_information(prompt)
#     prompt = """You are a chat bot. Make sure to only use the following information to answer the users question. Answer truthfully. Make the response sound polite and detailed and one sentence only. If the user asks a personal question, respond and ask them how you can help them:
#     """ + ' ' + info + ' ' + """
#     This is the question: """ + prompt

#     # print("-----------------")
#     # print(prompt)
#     # print("-----------------")
#     completions = openai.Completion.create(prompt=prompt, engine='text-davinci-002', max_tokens=50)
#     completions = completions['choices'][0]['text'].strip()
#     completions = completions.split('\n')
#     completions = completions[len(completions)-1]
#     print(completions)