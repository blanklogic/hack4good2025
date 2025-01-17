import { React, useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../index.css";
import TransactionHistoryTable from "./TransactionHistoryTable";

const TransactionHistory = () => {
  // const callbacksRef = useRef(() => callbacks());
  // useEffect(() => {
  //   callbacksRef.current();
  // }, []);

  // async function callbacks() {
  //   await getTransactionHistoryData();
  // }
  const { idToken } = useContext(AuthContext);
  const [transactionHistory, setTransactionHistory] = useState([]);

  async function getTransactionHistoryData() {
    try {
      const url = process.env.API_URL + "/residents/transaction-history";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setTransactionHistory(data);
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error calling backend:", error.message);
    }
  }

  return (
    <div className="transaction-history-resident mt-14 ml-96 pl-36 pr-12">
      <div className="ml-12">
        <h1 className="text-5xl font-bold ">Transaction History</h1>
      </div>
      <div className="flex justify-center gap-4 mt-14">
        {/* <TransactionHistoryTable tableData={transactionHistory} /> */}
        <TransactionHistoryTable />
      </div>
    </div>
  );
};

export default TransactionHistory;
