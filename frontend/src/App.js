import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

const PAGEPATHLIST = {
  Login: "/",
  "Transaction History": "/resident/transactions",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
};

function App() {
  return (
    <div>
      <Navbar pages={PAGEPATHLIST} />
      <LoginPage />
    </div>
  );
}

export default App;
