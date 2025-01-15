import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Admin from './pages/Admin';
import ManageUsers from './pages/ManageUsers';
import Resident from './pages/Resident';
import TransactionHistory from './pages/TransactionHistory';
import reportWebVitals from './reportWebVitals';
import Reports from './pages/Reports';
import VouchersResident from './pages/VouchersResident';
import Inventory from './pages/Inventory';
import VouchersAdmin from './pages/VouchersAdmin';
import RegisterPage from './pages/Register';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

const PAGEPATHLIST = {
  Login: "/",
  "Transaction History": "/resident/transactions",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar pages={PAGEPATHLIST} />
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
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
