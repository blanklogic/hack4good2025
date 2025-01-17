import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebaseConfig";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../AuthContext";

const LoginPage = () => {
  const { setIdToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const notify = (message) => toast.error(message);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      notify("All fields are required!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      setIdToken(idToken);
      const decodedToken = jwtDecode(idToken);
      toast.success("Login successful!");
      if (decodedToken.isAdmin) {
        navigate("/admin/vouchers");
      } else {
        navigate("/resident/vouchers");
      }
    } catch (error) {
      notify(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-[24vh]">
      <img src="/MWHlogo.png" alt="MWH Logo" className="login-logo" />
      <ToastContainer />
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-3xl font-medium text-gray-700"
          >
            Email
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
          <label
            htmlFor="password"
            className="block text-3xl font-medium text-gray-700"
          >
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
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-[#d5432d] rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <p className="text-3xl text-center text-gray-600 mt-4">
        Don't have an account yet?{" "}
        <a href="/register" className="text-[#d5432d] hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
