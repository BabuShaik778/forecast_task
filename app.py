from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load XGBoost model
xgb_model = joblib.load("xgb_model.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Get month and year from form
    month = int(request.form["month"])
    year = int(request.form["year"])

    # Prepare input for XGBoost
    input_df = pd.DataFrame({"month": [month], "year": [year]})
    prediction = xgb_model.predict(input_df)[0]

    return jsonify({"prediction": float(prediction)})

if __name__ == "__main__":
    app.run(debug=True)
