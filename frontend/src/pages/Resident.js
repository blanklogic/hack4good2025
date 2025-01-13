import React from "react";
import { Outlet } from "react-router";
import "../App.css";

const Resident = () => {
  return (
    <div>
      <Outlet />  
    </div>
  );
};

export default Resident;
