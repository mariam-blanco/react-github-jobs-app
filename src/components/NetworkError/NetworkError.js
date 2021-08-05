import React from "react";
import { Link } from "react-router-dom";
import "./NetworkError.scss";

const NetworkError = () => {
  return (
    <div className="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a
      breath and
      <Link to="/">click here</Link> to try again.
    </h3>
  </div>
      
  );
};

export default NetworkError;
