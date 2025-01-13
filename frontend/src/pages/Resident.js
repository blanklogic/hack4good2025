import { React, useState } from "react";
import Toggle from "../components/Toggle";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Resident = () => {
  // for routing
  const [role, setRole] = useState("Resident");

  return (
    <div>
      Resident
    </div>
  );
};

export default Resident;
