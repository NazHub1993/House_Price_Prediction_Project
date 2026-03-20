# House Price Predictor

A **Machine Learning based web application** to predict house prices in Bengaluru, India.  
Users can select location, input square feet, BHK, and number of bathrooms to get an estimated price.

---

## 🏠 Features

- Predict house price using a trained Ridge Regression model.
- Cleaned and preprocessed dataset with outlier removal.
- Handles categorical location data with OneHotEncoding.
- Beautiful frontend using **React.js + Tailwind CSS**.
- Axios integration for frontend-backend communication.
- Input validation and error handling.

---

## 📂 Project Structure


House_Price_Prediction_Project/
├─ backend/
│ ├─ app.py # Flask backend API
│ ├─ RidgeModel_Housing_Project.pkl # Trained ML model
│ ├─ cleaned_data.csv # Preprocessed dataset
├─ frontend/
│ ├─ pages/
│ │ └─ Home.jsx # Main React.js page
│ ├─ package.json
│ └─ tailwind.config.js
├─ README.md
└─ .gitignore
<img width="611" height="354" alt="image" src="https://github.com/user-attachments/assets/3eab7b1e-6e96-41d8-ae7e-eb1764bdba0e" />


---

## ⚡ Technologies Used

- **Backend**: Python, Flask, Pandas, Numpy, scikit-learn, flask-cors
- **Frontend**: React, Next.js, Tailwind CSS, Axios
- **ML Model**: Ridge Regression with OneHotEncoding & StandardScaler

---

## 🚀 How to Run Locally

### 1. Clone the repository

git clone https://github.com/yourusername/House_Price_Prediction_Project.git
cd House_Price_Prediction_Project
2. Backend
cd backend
pip install -r requirements.txt
python app.py

Server runs on http://127.0.0.1:3000

3. Frontend
cd frontend
npm install
npm run dev

App runs on http://localhost:5173

📌 Important Notes

Ensure scikit-learn version matches the one used to train the model (1.6.1 recommended).
Frontend uses Axios to communicate with the backend API.
Locations dropdown is dynamically fetched from the backend.
