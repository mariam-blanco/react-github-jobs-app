import React from "react";
import { Link } from "react-router-dom";
import "./ErrorMessage.scss";

const Error = ({ message }) => {
  return (
    <main className="main-error">
      <h1>Uh-Oh!</h1>
      <h3>
      {message}
      <Link to="/">click here</Link> to try again.
    </h3>
    </main>
  );
};

export default Error;
