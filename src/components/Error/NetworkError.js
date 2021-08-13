import React from "react";
import { Link } from "react-router-dom";
import imageNetworkError from "../../images/undraw_online_connection.svg";

const NetworkError = () => {
  return (
    <div className="error">
      <h1>Oooops!</h1>
      <p>
        Network issues. Please{" "}
        <Link to="/" onClick={() => window.location.reload()}>
          click here
        </Link>{" "}
        to try again.
      </p>
      <img src={imageNetworkError} width="300px" alt="Network error" />
    </div>
  );
};

export default NetworkError;
