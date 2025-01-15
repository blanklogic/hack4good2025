import React from "react";
import { Outlet } from "react-router";
import "../index.css";

const Admin = () => {
  return (
    <div>
      <Outlet />  
    </div>
  );
};

export default Admin;
