import React from "react";
import "./ErrorMessage.scss";

const Error = ({ message }) => {
  return (
    <main className="main-error">
      <p>{message}</p>
    </main>
  );
};

export default Error;
