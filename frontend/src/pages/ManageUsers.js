import React, { useState } from "react";
import "../index.css";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  const [Users, setUsers] = useState([]);

  return (
    <div className="mt-14 ml-96 pl-24">
      <div className="ml-12">
        <h1 className="text-5xl font-bold">Manage Users</h1>
        <div className="flex justify-between">
          <div className="flex items-center mt-8 border-b-2 border-gray-300">
            <input
              type="text"
              placeholder="Search for residents..."
              className="search-input"
            />
            <button className="search-user-button">Search</button>
          </div>
          <button className="add-user-button">Add User</button>
        </div>
        {/* <ManageUsersTable tableData={Users} /> */}
        <ManageUsersTable />
      </div>
    </div>
  );
};

export default ManageUsers;
