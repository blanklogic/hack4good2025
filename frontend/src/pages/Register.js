import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
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
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      notify("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      notify(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-[24vh]">
      <img src="/MWHlogo.png" alt="MWH Logo" className="login-logo" />
      <ToastContainer />
      <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-3xl font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@mail.com"
              className="w-[400px] px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-3xl font-medium text-gray-700">
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
            <label htmlFor="confirmPassword" className="block text-3xl font-medium text-gray-700">
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
            className="w-full px-4 py-2 text-white bg-[#d5432d] rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <p className="text-3xl text-center text-gray-600 mt-4">
          Already have an account? <a href="/" className="text-[#d5432d] hover:underline">Login</a>
        </p>
    </div>
  );
};

export default RegisterPage;
