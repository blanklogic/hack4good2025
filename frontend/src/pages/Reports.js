import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
const PAGEPATHLIST = {
  Logout: "/",
  "Transaction History": "/resident/transactions",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
};

const Reports = () => {
  return (
    <div>
      <Navbar pages={PAGEPATHLIST} />
    </div>
  );
};

export default Reports;
