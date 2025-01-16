import { React, useState } from "react";
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
  const [transactionHistory, setTransactionHistory] = useState([]);
  async function getTransactionHistoryData() {
    try {
      const idToken = await getIdToken();
      const url = process.env.API_URL + "/residents/transaction-history";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
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
