import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [locations, setLocations] = useState([]);
    const [form, setForm] = useState({
        location: "",
        total_sqft: "",
        bath: "",
        BHK: ""
    });
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 🔹 Get locations
    useEffect(() => {
        axios.get("http://127.0.0.1:3000/get_locations")
            .then(res => setLocations(res.data))
            .catch(err => {
                console.error(err);
                setError("Failed to load locations");
            });
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 Predict price
    const predictPrice = async () => {
        try {
            setLoading(true);
            setError("");
            setPrice(null);

            const res = await axios.post(
                "http://127.0.0.1:3000/predict",
                form
            );

            setPrice(res.data.price);
        } catch (err) {
            console.error(err);
            setError("Prediction failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">

          <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">

              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  🏠 House Price Predictor
              </h1>

              {/* Location */}
              <select
                  name="location"
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mb-4"
              >
                  <option value="">Select Location</option>
                  {locations.map((loc, i) => (
                      <option key={i} value={loc}>{loc}</option>
                  ))}
              </select>

              {/* Inputs */}
              <input
                  type="number"
                  name="total_sqft"
                  placeholder="Total Sqft"
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mb-4"
              />

              <input
                  type="number"
                  name="bath"
                  placeholder="Bathrooms"
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mb-4"
              />

              <input
                  type="number"
                  name="BHK"
                  placeholder="BHK"
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mb-4"
              />

              {/* Button */}
              <button
                  onClick={predictPrice}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                  {loading ? "Predicting..." : "Predict Price"}
              </button>

              {/* Error */}
              {error && (
                  <div className="mt-4 text-red-600 text-center">
                      {error}
                  </div>
              )}

              {/* Result */}
              {price && (
                  <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
                      Estimated Price: ₹ {price} Lakhs
                  </div>
              )}

          </div>
      </div>
  )
}

export default Home