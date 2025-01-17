import React, { useState } from "react";
import "../index.css";
import ManageUsersTable from "./ManageUsersTable";
import ManageUserModal from "./ManageUserModal";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setAddModalOpen(false);
  };

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
          <button
            className="add-user-button"
            onClick={() => setAddModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <ManageUsersTable tableData={users} />
        {isAddModalOpen && (
          <ManageUserModal
            isOpen={isAddModalOpen}
            onClose={() => setAddModalOpen(false)}
            onSave={handleAddUser}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
