import React from "react";
import "../index.css";

const TransactionHistoryTable = (props) => {
  let data = props.tableData;
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
          <td className="table-data">{num}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
        </tbody>
        {/* <tbody>
          {data.map((element, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{num}</td>
                <td className="table-data">{element.date}</td>
                <td className="table-data">{element.amount}</td>
                <td className="table-data">{element.type}</td>
                <td className="table-data">{element.status}</td>
                <td className="table-data">{element.invoice}</td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};

export default TransactionHistoryTable;
