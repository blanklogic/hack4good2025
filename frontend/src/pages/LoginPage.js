import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  //   const navigate = useNavigate();
  //   const navigateRef = useRef(navigate);

  //   //   useEffect(() => {
  //   //     const savedSessionData = Cookies.get("sessionData");
  //   //     if (savedSessionData) {
  //   //       // const data = JSON.parse(savedSessionData);
  //   //       // if (data["isViewAllowed"] === 1) {
  //   //       navigateRef.current("/");
  //   //     } else {
  //   //       localStorage.removeItem("token");
  //   //       navigateRef.current("/");
  //   //     }
  //   //   }, []);

  //   //   const handleSaveSessionData = (data) => {
  //   //     const dataToSave = JSON.stringify(data);
  //   //     Cookies.set("sessionData", dataToSave);
  //   //   };

  //   let noti = "";
  //   const notify = () => toast.error(noti);

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     const username = document.getElementById("username").value;
  //     const password = document.getElementById("password").value;

  //     if (!username || !password) {
  //       noti = "Username or Password cannot be empty!";
  //       notify();
  //     } else {
  //       const result = await login(username, password);
  //       if (result !== null && result.success) {
  //         const data = result["key"];
  //         handleSaveSessionData(data);
  //         navigate("/management/dashboard2025");
  //         // if (data.isViewAllowed === 1) {
  //         //   handleSaveSessionData(data);
  //         //   navigate("/");
  //         // } else {
  //         //   noti = "You cannot access this page!";
  //         //   notify();
  //         // }
  //       } else {
  //         noti = "Wrong Username or Password!";
  //         notify();
  //       }
  //     }
  //   };

  //   async function login(username, password) {
  //     const data = { username, password };
  //     const url = process.env.REACT_APP_API_URL + `/loginUser`;
  //     try {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       const responseData = await response.json();
  //       console.log(responseData);
  //       localStorage.setItem("token", responseData.key.token);
  //       return responseData;
  //     } catch (error) {
  //       return null;
  //     }
  //   }

  return (
    <div className="login-card">
      <img src="/MWHlogo.png" alt="MWH Logo" className="login-logo" />
      <ToastContainer />
      {/* <form onSubmit={handleLogin}> */}
      <p>Username</p>
      <div className="form-group">
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          className="form-input"
          required
        />
      </div>
      <p>Password</p>
      <div className="form-group">
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
      <p className="login-note">
        Note: Please use your username and password to login.
      </p>
      {/* </form> */}
    </div>
  );
};

export default LoginPage;
