# forecast_task

*Overview*

A full-stack Time Series Forecasting Application that predicts future prices using:

XGBoost (Machine Learning)
LSTM (Deep Learning)

Includes data analysis, model building, and deployment using Flask with a web interface.


 # Key Highlights : #
End-to-end ML pipeline
Feature engineering (lag + rolling stats)
Dual-model approach (XGBoost + LSTM)
REST API with Flask
Clean frontend UI
12-month future forecasting

# Project Structure #

project/
│
├── app.py                # Flask backend
├── xgb_model.pkl        # Saved ML model
├── scaler.pkl           # Scaler for preprocessing
├── price_data.csv       # Dataset
│
├── templates/
│   └── index.html       # Frontend UI
│
├── static/
│   ├── style.css
│   └── script.js
│
└── README.md



1.Clone Repository
git clone 
cd project


2.Install Dependencies
pip install 


3.Run App
python app.py


4. Metrics Used :
RMSE
MAE
MAPE
R² Score


