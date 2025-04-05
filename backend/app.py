from flask import Flask, request, jsonify
from openai import AzureOpenAI
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()

endpoint = os.getenv("ENDPOINT_URL")
deployment = os.getenv("DEPLOYMENT_NAME")  
subscription_key = os.getenv("AZURE_OPENAI_API_KEY")  
version = os.getenv("VERSION")  

client = AzureOpenAI(  
    azure_endpoint=endpoint,  
    api_key=subscription_key,  
    api_version=version,
)


app = Flask(__name__)
CORS(app) 
def chatbot(user_message):
    print(f'Answering...')    

    prompt = user_message
        
    chat_prompt = [
        {
            "role": "system",
            "content": [
                {
                    "type": "text",
                    "text": f"You are a helpful assistant for users to know details about colleges. your origin is india - tamil nadu"
                }
            ]
        },
        {
            "role": "user",
            "content": f'{prompt} -give reply in markdown format. -no contents other than answer.'
        }
    ] 

    completion = client.chat.completions.create(  
        model=deployment,
        messages=chat_prompt,
        max_tokens=1000,  
        temperature=0.7,  
        top_p=0.95,  
        frequency_penalty=0,  
        presence_penalty=0,
        stop=None,  
        stream=False
    )

    reply = completion.choices[0].message.content
    print(f'Answered') 
    return reply

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        response = chatbot(user_message)
        return jsonify({"reply": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
