import pathlib
import textwrap

import google.generativeai as genai


GOOGLE_API_KEY = "";

def to_markdown(text):
  text = text.replace('•', '  *')
  return text

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("What is the meaning of life?")
print(to_markdown(response.text))