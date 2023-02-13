from flask import Flask
import json

app = Flask(__name__)

food = [
	{'name': 'soup'},
	{'name': 'clam chowder'},
]

@app.route('/food')
def get_food():
	return json.dumps(food)

app.run(port='8000', debug=True)
