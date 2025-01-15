import { React, useState, useRef, useEffect } from "react";
import TransactionHistoryTable from "./TransactionHistoryTable";
import "../index.css";
import axios from "axios";
import Navbar from "../components/Navbar";
//const axios = require("axios");

const PAGEPATHLIST = {
  Logout: "/",
  "Transaction History": "/resident/transactions",
  Inventory: "/admin/inventory",
  "Manage Users": "/admin/manage",
  Reports: "/admin/reports",
};

const TransactionHistory = () => {
  //   const callbacksRef = useRef(() => callbacks());
  //   useEffect(() => {
  //     callbacksRef.current();
  //   }, []);

  //     async function callbacks() {
  //       await getTransactionHistoryData();
  //     }
  const [transactionHistory, setTransactionHistory] = useState([]);
  async function getTransactionHistoryData() {
    const url = process.env.REACT_APP_API_URL + `/transaction-history`; // change based on api request url
    const configs = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(url, configs);
    const data = await response.data.key;
    setTransactionHistory(data);
  }

  return (
    <div className="flex justify-center gap-4 mt-14">
      <TransactionHistoryTable tableData={transactionHistory} />
    </div>
  );
};

export default TransactionHistory;
