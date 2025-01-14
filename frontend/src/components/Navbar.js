import React from "react";
import ClockWidget from "./ClockWidget";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  return (
    <div className="navbar">
      <div className="navbar-vertical">
        <ClockWidget />
        <PageButtons pages={pages} />
      </div>
      <div className="navbar-horizontal"></div>
    </div>
  );
}

export default Navbar;
