from inference import Model
from flask import Flask, request
import os
import json
import numpy
import warnings

warnings.filterwarnings('ignore')

app = Flask(__name__)
if not os.path.exists('model_weights/model.h5'):
    os.system('cd model_weights && cat x* > model.h5')

model = Model()


@app.route('/prediction', methods=['POST'])
def Prediction():
    if request.get_json() is not None:
        content = request.json
    else:
        return "Failure"
    texts = [x['title'] + ' ' + x['text'] for x in content]
    probability = model.predict(texts)
    for i in range(len(content)):
        content[i]['prob'] = str(probability[i][0])
    import pprint
    pprint.pprint(content, indent=4)
    response = app.response_class(
        response=json.dumps(content),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route('/predict', methods=['POST'])
def Predict():
    if request.get_json() is not None:
        content = request.json
    else:
        return "Failure"
    text = [content['text']]
    print(text)
    probability = model.predict(text)
    print(probability)
    content['prob'] = str(probability[0][0])
    import pprint
    pprint.pprint(content, indent=4)
    response = app.response_class(
        response=json.dumps(content),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run(debug=True, port=8080)
