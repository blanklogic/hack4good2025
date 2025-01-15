import React from "react";
import "../index.css";

const VouchersAdminTable = (props) => {
  let data = props.tableData;
  let num = 0;
  return (
    <div className="h-full w-auto overflow-y-auto">
      <table>
        <thead>
          <tr>
            <th className="table-header">No.</th>
            <th className="table-header">Voucher Requests</th>
            <th className="table-header">Options</th>
          </tr>
        </thead>
        <tbody>
          <td className="table-data">{num}</td>
          <td className="table-data">{"Food and Beverages"}</td>
          <td className="buttons-dist">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </td>
        </tbody>
        {/* <tbody>
          {data.map((element, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{num}</td>
          <td className="table-data">{element.request}</td>
          <td className="buttons-dist">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};

export default VouchersAdminTable;
