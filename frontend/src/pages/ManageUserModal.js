import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const ManageUserModal = ({ isOpen, onClose, user, onSave }) => {
  const [userId, setUserId] = useState(user?.user_id || "");
  const [fullName, setFullName] = useState(user?.full_name || "");
  const [nric, setNric] = useState(user?.nric || "");
  const [password, setPassword] = useState(user?.password || "");

  useEffect(() => {
    if (isOpen && user) {
      setUserId(user.user_id || "");
      setFullName(user.full_name || "");
      setNric(user.nric || "");
      setPassword(user.password || "");
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!userId || !fullName || !nric || !password) {
      toast.error("All fields are required!");
      return;
    }

    const newUser = {
      user_id: userId,
      full_name: fullName,
      nric: nric,
      password: password,
      last_login: new Date().toISOString(), // Default value for new users
    };

    if (typeof onSave === "function") {
      onSave(newUser);
      toast.success("User added successfully!");
    } else {
      console.error("onSave is not a function!");
    }
  };

  const handleSuspend = () => {
    toast.success("Account suspended!");
  };

  return (
    <div className="modal">
      <ToastContainer />
      <div className="modal-content">
        <div className="flex justify-between">
          <h2 className="font-bold text-5xl">
            {user ? "Edit User" : "Add User"}
          </h2>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          placeholder="NRIC"
          value={nric}
          onChange={(e) => setNric(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-title"
        />
        <div className="flex justify-end gap-5">
          <button className="cancel-button" onClick={handleSuspend}>
            Suspend Account
          </button>
          <button className="continue-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUserModal;
