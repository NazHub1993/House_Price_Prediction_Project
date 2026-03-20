import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# ------------------------------
# Initialize Flask app
# ------------------------------
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (frontend can access)

# Load model
model = pickle.load(open('RidgeModel_Housing_Project.pkl', 'rb'))

# Load cleaned data to extract locations
data = pd.read_csv('cleaned_data.csv')

locations = sorted(data['location'].unique())

@app.route('/get_locations', methods=['GET'])
def get_locations():
    return jsonify(locations)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    location = data['location']
    sqft = float(data['total_sqft'])
    bath = float(data['bath'])
    bhk = int(data['BHK'])

    input_df = pd.DataFrame([[location, sqft, bath, bhk]],
                            columns=['location', 'total_sqft', 'bath', 'BHK'])

    prediction = model.predict(input_df)[0]

    return jsonify({'price': round(prediction, 2)})


# ------------------------------
# Run the server
# ------------------------------
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
