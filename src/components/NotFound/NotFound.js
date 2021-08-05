import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
import imageNotFound from "../../images/undraw-publish-article.svg";


const NotFound = () => {
  return (
    <main className="notFound">
      <h1>Not found :(</h1>
      <p>The page you're looking for is not here.</p>
      <img src={imageNotFound} width="300px"  alt="Page not found" />
      <Link to="/">Back to the home page</Link>
    </main>
  );
};

export default NotFound;
