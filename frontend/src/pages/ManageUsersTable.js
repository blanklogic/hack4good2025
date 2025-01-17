import React, { useState } from "react";
import "../index.css";
import ManageUserModal from "./ManageUserModal";

const ManageUsersTable = (props) => {
  // let data = props.tableData;

  let data = [
    {
      user_id: "U1001",
      full_name: "Alice Johnson",
      last_login: "2025-01-15T14:30:00Z",
      password: "password123",
      nric: "T0123456A",
    },
    {
      user_id: "U1002",
      full_name: "Bob Smith",
      last_login: "2025-01-14T08:25:00Z",
      password: "1234573y",
      nric: "T0123456B",
    },
    {
      user_id: "U1003",
      full_name: "Carla Gomez",
      last_login: "2025-01-13T16:45:00Z",
      password: "password123",
      nric: "T0123456C",
    },
    {
      user_id: "U1004",
      full_name: "David Lee",
      last_login: "2025-01-12T12:15:00Z",
      password: "password123",
      nric: "T0123456D",
    },
    {
      user_id: "U1005",
      full_name: "Eva Patel",
      last_login: "2025-01-11T19:05:00Z",
      password: "password123",
      nric: "T0123456E",
    },
    {
      user_id: "U1006",
      full_name: "Frank Wu",
      last_login: "2025-01-10T23:00:00Z",
      password: "password123",
      nric: "T0123456F",
    },
  ];
  let num = 0;

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleManageUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
    console.log("Manage User button clicked");
  };

  const handleSave = (updatedUser) => {
    console.log("Saving data...", updatedUser);
    setSelectedUser(updatedUser);
  };

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
          {data.map((user, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{user.user_id}</td>
                <td className="table-data">{user.full_name}</td>
                <td className="table-data">{user.last_login}</td>
                <td className="table-data">
                  <button
                    className="manage-button"
                    onClick={() => handleManageUserClick(user)}
                  >
                    Manage User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedUser && (
        <ManageUserModal
          isOpen={isModalOpen}
          onClose={closeModal}
          user={selectedUser}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ManageUsersTable;
