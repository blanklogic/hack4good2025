import axios from "axios";
import { React, useState } from "react";
import "../index.css";
import TransactionHistoryTable from "./TransactionHistoryTable";
//const axios = require("axios");

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
    <div className="mt-14 ml-96 pl-24">
      <div className="ml-12">
        <h1 className="text-5xl font-bold">Transaction History</h1>
      </div>
      <div className="flex justify-center gap-4 mt-14">
        <TransactionHistoryTable tableData={transactionHistory} />
      </div>
    </div>
  );
};

export default TransactionHistory;
