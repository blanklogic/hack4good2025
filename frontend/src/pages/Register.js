import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const notify = (message) => toast.error(message);

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      notify("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match!");
      return;
    }

    const result = await register(username, password);
    if (result && result.success) {
      toast.success("Registration successful!");
      navigate("/login");
    } else {
      notify("Registration failed. Please try again.");
    }
  };

  async function register(username, password) {
    const data = { username, password };
    const url = process.env.REACT_APP_API_URL + `/registerUser`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return null;
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <img src="/MWHlogo.png" alt="MWH Logo" className="w-32 mx-auto" />
          <ToastContainer />
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter Username"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account? <a href="/" className="text-indigo-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
