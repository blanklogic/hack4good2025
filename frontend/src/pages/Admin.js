import { React, useState } from "react";
import Toggle from "../components/Toggle";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Admin = () => {
  // for routing
  const [role, setRole] = useState("Admin");

  return <div>Admin</div>;
};

export default Admin;
