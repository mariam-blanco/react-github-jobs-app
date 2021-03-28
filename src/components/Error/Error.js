import React from 'react';
import './Error.scss';

const Error = ({ error }) => {
  console.log("Componente Error: ", error);

  return (
    <main className="main-error">
      <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel='noreferrer'>
        Request temporary access to the demo of CORS Anywhere
      </a>
    </main>

  );
};

export default Error;