import React from "react";
import ClockWidget from "./ClockWidget";
import Pages from "./Pages";

function Navbar({ pages }) {
  return (
    <div className="navbar">
      <ClockWidget />
      <Pages pages={pages} />
    </div>
  );
}

export default Navbar;
