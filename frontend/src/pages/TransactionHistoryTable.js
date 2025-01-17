import React from "react";
import "../index.css";

const TransactionHistoryTable = (props) => {
  // dummy data
  const data = [
    {
      transaction_no: "TX1001",
      date: "2025-01-15",
      amount: "150.00",
      type: "Credit",
      status: "Completed",
      invoice_no: "INV1001",
    },
    {
      transaction_no: "TX1002",
      date: "2025-01-14",
      amount: "75.00",
      type: "Debit",
      status: "Pending",
      invoice_no: "INV1002",
    },
    {
      transaction_no: "TX1003",
      date: "2025-01-13",
      amount: "200.00",
      type: "Credit",
      status: "Failed",
      invoice_no: "INV1003",
    },
    {
      transaction_no: "TX1004",
      date: "2025-01-12",
      amount: "50.00",
      type: "Debit",
      status: "Completed",
      invoice_no: "INV1004",
    },
    {
      transaction_no: "TX1005",
      date: "2025-01-11",
      amount: "120.00",
      type: "Credit",
      status: "Completed",
      invoice_no: "INV1005",
    },
    {
      transaction_no: "TX1006",
      date: "2025-01-10",
      amount: "90.00",
      type: "Debit",
      status: "Completed",
      invoice_no: "INV1006",
    },
  ];
  // let data = props.tableData;
  let num = 0;
  return (
    <div className="h-full w-auto overflow-y-auto">
      <table>
        <thead>
          <tr>
            <th className="table-header">No.</th>
            <th className="table-header">Date</th>
            <th className="table-header">Amount</th>
            <th className="table-header">Type</th>
            <th className="table-header">Status</th>
            <th className="table-header">Invoice No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{element.transaction_no}</td>
                <td className="table-data">{element.date}</td>
                <td className="table-data">{element.amount}</td>
                <td className="table-data">{element.type}</td>
                <td className="table-data">{element.status}</td>
                <td className="table-data">{element.invoice_no}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;
