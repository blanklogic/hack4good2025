import { React, useState } from "react";
import TransactionHistoryTable from "./TransactionHistoryTable";
import "../App.css";
const axios = require("axios");

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
      <TransactionHistoryTable tableData={transactionHistory} />
    </div>
  );
};

export default TransactionHistory;
