import React from "react";
import { Outlet } from "react-router";
import "../App.css";

const Admin = () => {
  return (
    <div>
      <Outlet />  
    </div>
  );
};

export default Admin;
