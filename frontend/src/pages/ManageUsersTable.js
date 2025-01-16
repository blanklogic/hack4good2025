import React from "react";
import "../index.css";

const ManageUsersTable = (props) => {
  let data = props.tableData;
  let num = 0;
  return (
    <div className="h-full w-auto mr-11 mt-8">
      <table>
        <thead>
          <tr>
            <th className="table-header">User ID</th>
            <th className="table-header">Full Name</th>
            <th className="table-header">Last login</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <td className="table-data">{num}</td>
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

export default ManageUsersTable;
