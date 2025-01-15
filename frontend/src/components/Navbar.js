import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import ClockWidget from "./ClockWidget";
import LogoButton from "./LogoButton";
import PageButtons from "./PageButtons";

function Navbar({ pages }) {
  const adminLogo = <GrUserAdmin />;
  const residentLogo = <FaRegUser />;
  return (
    <div>
      <div className="navbar-vertical pt-72">
        <ClockWidget />
        <PageButtons pages={pages} />
      </div>
      {/* <div className="navbar-horizontal">
        <div className="user-info">
          <LogoButton logo={adminLogo} text="Admin" />
          <LogoButton logo={residentLogo} text="Resident" />
        </div>
        <button className="logout-button">Logout</button>
      </div> */}
    </div>
  );
}

export default Navbar;
