import React from "react";
import { Link } from "react-router-dom";
import "./NoResults.scss";

const NoResults = () => {
  return (
    <main className="noResults">
      <h1>Sorry, no results found :(</h1>
      <h3>The xxx you're looking for is not here.</h3>  
      <h3>The xxx you're looking for is not here.</h3>
      <Link to="/">Back to the home page</Link>
  </main>
      
  );
};

export default NoResults;
