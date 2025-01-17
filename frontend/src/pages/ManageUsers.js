import React, { useState } from "react";
import "../index.css";
import ManageUserModal from "./ManageUserModal";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setAddModalOpen(false);
  };

  return (
    <div className="manage-users mt-32 ml-96 pl-24">
      <div className="ml-12">
        <h1 className="text-5xl font-bold">Manage Users</h1>
        <div className="flex justify-between">
          <div className="flex items-center justify-between mt-8 border-b-2 border-gray-300">
            <input
              type="text"
              placeholder="Search for residents..."
              className="search-input my-auto"
            />
            <button className="search-user-button transition-transform hover:scale-105">
              Search
            </button>
          </div>
          <button
            className="add-user-button transition-transform hover:scale-105"
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
