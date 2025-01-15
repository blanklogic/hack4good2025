import React from "react";
import ClockWidget from "./ClockWidget";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  return (
    <div>
      <div className="navbar pt-72">
        <ClockWidget />
        <PageButtons pages={pages} />
      </div>
    </div>
  );
}

export default Navbar;
