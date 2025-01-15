import React from "react";
import ClockWidget from "./ClockWidget";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  return (
    <div className="navbar">
      <div>
        <ClockWidget />
        <PageButtons pages={pages} />
      </div>
    </div>
  );
}

export default Navbar;
