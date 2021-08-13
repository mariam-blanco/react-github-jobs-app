import React from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../../images/undraw-publish-article.svg";

const NotFound = () => {
  return (
    <main className="main-error">
      <div className="error">
        <h1>Page not found :(</h1>

        <div>
          <p>The page you're looking for is not here.</p>
          <Link to="/">Back to the home page</Link>
        </div>

        <img src={imageNotFound} width="300px" alt="Page not found" />
      </div>
    </main>
  );
};

export default NotFound;
