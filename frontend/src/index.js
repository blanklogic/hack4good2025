import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";
import LoginPage from "./pages/LoginPage";
import ManageUsers from "./pages/ManageUsers";
import Products from "./pages/Products";
import RegisterPage from "./pages/Register";
import Reports from "./pages/Reports";
import Resident from "./pages/Resident";
import TransactionHistory from "./pages/TransactionHistory";
import VouchersAdmin from "./pages/VouchersAdmin";
import VouchersResident from "./pages/VouchersResident";
import reportWebVitals from "./reportWebVitals";

const PAGEPATHLIST = {
  VouchersR: "/resident/vouchers",
  VouchersA: "/admin/vouchers",
  "Transaction History": "/resident/transactions",
  Products: "/resident/products",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
  Logout: "/",
};

const AppWrapper = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/register"];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar pages={PAGEPATHLIST} />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin" element={<Admin />}>
          <Route path="vouchers" element={<VouchersAdmin />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="manage" element={<ManageUsers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="resident" element={<Resident />}>
          <Route path="vouchers" element={<VouchersResident />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
