from openai import OpenAI
client = OpenAI()

prompt_text = ""
seed = 42
temperature = 1

def callOpenAI():
    with open('prompt.txt', 'r') as file:
        prompt_text = file.read()

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # choose the engine you want to use
        messages=[{"role": "user", "content": prompt_text}],
        max_tokens=1000,
        n=1,
        stop=None,
        temperature=temperature,
        seed=seed
    )
    return response
    
print(response)