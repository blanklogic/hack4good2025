import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

const PAGELIST = [
  "Vouchers",
  "Transaction History",
  "Inventory",
  "Manage Users",
  "Reports",
];
function App() {
  return (
    <div>
      <Navbar pages={PAGELIST} />
      <LoginPage />
    </div>
  );
}

export default App;
