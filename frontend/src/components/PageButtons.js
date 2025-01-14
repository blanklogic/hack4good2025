import React from "react";
import PageButton from "./PageButton.js";

const PageButtons = ({ pages }) => {
  return (
    <div className="pages">
      {pages.map((page, index) => (
        <PageButton key={index} title={page} />
      ))}
    </div>
  );
};

export default PageButtons;
