import React from "react";
import PageButton from "./PageButton.js";

const PageButtons = ({ pages }) => {
  return (
    <div className="mt-12 flex flex-col items-center gap-12">
      {Object.keys(pages).map((title) => (
        <PageButton key={title} title={title} path={pages[title]} />
      ))}
    </div>
  );
};

export default PageButtons;
