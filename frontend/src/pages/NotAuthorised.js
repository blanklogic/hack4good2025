import React from "react";

const NotAuthorized = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>403 - Not Authorized</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  );
};

export default NotAuthorized;
