import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const ManageUserModal = ({ isOpen, onClose, user, onSave }) => {
  const [userId, setUserId] = useState(user.user_id);
  const [fullName, setFullName] = useState(user.full_name);
  const [nric, setNric] = useState(user.nric);
  const [password, setPassword] = useState(user.password);

  useEffect(() => {
    if (isOpen) {
      setUserId(user.user_id);
      setFullName(user.full_name);
      setNric(user.nric);
      setPassword(user.password);
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSuspend = () => {
    console.log("Suspend Account:", userId);
    toast.success("Account suspended!");
  };

  const handleSave = () => {
    if (typeof onSave === "function") {
      onSave({
        user_id: user.user_id,
        full_name: user.full_name,
        nric: user.nric,
        password: user.password,
      });
      onClose();
    } else {
      console.error("onSave is not a function!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <ToastContainer />
        <div className="flex justify-between">
          <h2 className="font-bold text-5xl">User Information</h2>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          value={nric}
          onChange={(e) => setNric(e.target.value)}
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
