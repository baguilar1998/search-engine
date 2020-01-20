from flask import Flask, jsonify, request 
from flask_cors import CORS
import requests

API_KEY = 'AIzaSyC1CwX4-gsBFTLG6PR-fqrT2g9CwJSmzxQ'
URL = 'https://www.googleapis.com/customsearch/v1?key='+API_KEY+'&cx=008691438334517141649:jwfbvclbstt&q=';

app = Flask(__name__)
CORS(app)

@app.route('/')
def main_req():
 return 'Welcome to the custom serach rest api!'
 
@app.route('/api/search', methods=['GET'])
def get_search_results():
    query = request.args.get('query', default = "My Hero Academia", type=str)
    results = requests.get(url = URL+query)
    return jsonify(results.json())

if __name__ == '__main__':
 app.run()