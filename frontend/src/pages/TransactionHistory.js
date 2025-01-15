import { React, useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import TransactionHistoryTable from "./TransactionHistoryTable";
const axios = require("axios");

const PAGEPATHLIST = {
  Logout: "/",
  "Transaction History": "/resident/transactions",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
};

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  async function getTransactionHistoryData() {
    const url = process.env.REACT_APP_API_URL + `/getTransactionHistory`; // change based on api request url
    const configs = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(url, configs);
    const data = await response.data.key;
    setTransactionHistory(data);
  }

  return (
    <div className="transaction-history">
      <Navbar pages={PAGEPATHLIST} />
      <TransactionHistoryTable tableData={transactionHistory} />
    </div>
  );
};

export default TransactionHistory;
