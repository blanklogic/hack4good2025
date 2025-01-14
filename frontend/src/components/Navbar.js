import React from "react";
import ClockWidget from "./ClockWidget";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  return (
    <div className="navbar">
      <ClockWidget />
      <PageButtons pages={pages} />
    </div>
  );
}

export default Navbar;
