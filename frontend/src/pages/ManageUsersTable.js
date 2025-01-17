import React from "react";
import "../index.css";

const ManageUsersTable = (props) => {
  // let data = props.tableData;

  let data = [
    {
      user_id: "U1001",
      full_name: "Alice Johnson",
      last_login: "2025-01-15T14:30:00Z",
    },
    {
      user_id: "U1002",
      full_name: "Bob Smith",
      last_login: "2025-01-14T08:25:00Z",
    },
    {
      user_id: "U1003",
      full_name: "Carla Gomez",
      last_login: "2025-01-13T16:45:00Z",
    },
    {
      user_id: "U1004",
      full_name: "David Lee",
      last_login: "2025-01-12T12:15:00Z",
    },
    {
      user_id: "U1005",
      full_name: "Eva Patel",
      last_login: "2025-01-11T19:05:00Z",
    },
    {
      user_id: "U1006",
      full_name: "Frank Wu",
      last_login: "2025-01-10T23:00:00Z",
    },
  ];
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
        {/* <tbody>
          <td className="table-data">{num}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
          <td className="table-data">{1}</td>
        </tbody> */}
        <tbody>
          {data.map((element, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{element.user_id}</td>
                <td className="table-data">{element.full_name}</td>
                <td className="table-data">{element.last_login}</td>
                <td className="table-data">
                  <button className="manage-button">Manage User</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersTable;
