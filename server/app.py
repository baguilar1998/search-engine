from flask import Flask, jsonify
import requests

API_KEY = 'AIzaSyC1CwX4-gsBFTLG6PR-fqrT2g9CwJSmzxQ'
URL = 'https://www.googleapis.com/customsearch/v1?key='+API_KEY+'&cx=008691438334517141649:jwfbvclbstt&q=';

app = Flask(__name__)

@app.route('/')
def hello_world():
 return 'Hello to the World of Flask!'
 
@app.route('/api/search', methods=['GET'])
def get_search_results():
    query ='My Hero Academia'
    results = requests.get(url = URL+query)
    return jsonify(results.json())

if __name__ == '__main__':
 app.run()