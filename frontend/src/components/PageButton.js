import React from "react";
import { Link } from "react-router-dom";

function PageButton({ title, path }) {
  return (
    <Link to={path}>
      <button className="page-button">{title}</button>
    </Link>
  );
}

export default PageButton;
