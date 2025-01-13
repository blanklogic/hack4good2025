import React from "react";
import Page from "./Page.js";

const Pages = ({ pages }) => {
  return (
    <div className="pages">
      {pages.map((page, index) => (
        <Page key={index} title={page} />
      ))}
    </div>
  );
};

export default Pages;
