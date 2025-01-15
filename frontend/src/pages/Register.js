import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const notify = (message, type = "error") => {
    type === "success" ? toast.success(message) : toast.error(message);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;

    if (!username || !password || !confirmPassword) {
      notify("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      notify("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/registerUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();

      if (result.success) {
        notify("Registration successful!", "success");
        navigate("/login");
      } else {
        notify(result.message || "Registration failed!");
      }
    } catch (error) {
      notify("An error occurred while registering. Please try again.");
    }
  };

  return (
    <div className="register-card">
      <img src="/MWHlogo.png" alt="MWH Logo" className="register-logo" />
      <ToastContainer />
      <form onSubmit={handleRegister}>
        <p>Username</p>
        <div className="form-group">
          <input
            type="text"
            id="reg-username"
            placeholder="Enter Username"
            className="form-input"
            required
          />
        </div>
        <p>Password</p>
        <div className="form-group">
          <input
            type="password"
            id="reg-password"
            placeholder="Enter Password"
            className="form-input"
            required
          />
        </div>
        <p>Confirm Password</p>
        <div className="form-group">
          <input
            type="password"
            id="reg-confirm-password"
            placeholder="Confirm Password"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <button
        onClick={() => navigate("/login")}
        className="back-to-login-button"
      >
        Back to Login
      </button>
    </div>
  );
};

export default RegisterPage;
