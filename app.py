from flask import Flask
import os

app = Flask(__name__)

color = os.environ.get('APP_COLOR')

@app.route('/')
def hello_world():
    return f'<div style="background-color:{color};">Hello, World!</div>'

if __name__ == "__main__":
    app.run()
