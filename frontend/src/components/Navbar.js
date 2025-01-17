import React from "react";
import ClockWidget from "./ClockWidget";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  return (
    <div className="navbar">
      <div>
        <img src="/MWHlogo.png" alt="MWH Logo" className="login-logo" />
        <ClockWidget />
        <PageButtons pages={pages} />
      </div>
    </div>
  );
}

export default Navbar;
