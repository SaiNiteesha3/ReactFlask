from flask import Flask, abort, json, request
import requests



app = Flask(__name__)



url = "https://6420494482bea25f6dfddfcb.mockapi.io/FlaskReactApi"




@app.route('/create', methods=['GET', 'POST'])
def create():


    request_data = json.loads(request.data)
    topic = request_data['topic']
    description = request_data['description']
    payload = {'topic': topic, 'description': description}
    response = requests.post(url, data=payload)

    if response.status_code == 201:
        return {'201': 'customer created successfully'}
    else:
        abort(500)




@app.route('/todo')
def display():


    response = requests.get(url)
    return response.json()




@app.route("/delete/<int:id>", methods=['POST'])
def delete(id):


    delete_url = f'{url}/{id}'
    response = requests.delete(delete_url)
    return {'204': 'Customer deleted successfully'}




@app.route("/update/<int:id>", methods=['POST'])
def update(id):


    update_url = f'{url}/{id}'
    request_data = json.loads(request.data)
    topic = request_data['topic']
    description = request_data['description']
    payload = {'topic': topic, 'description': description}
    response = requests.put(update_url, data=payload)
    return {'201': 'customer updated successfully'}



if __name__ == "__main__":
    app.run(debug=True)
