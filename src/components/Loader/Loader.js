import React from 'react';
import spinner from '../../images/desktop/Spinner-1s-88px.svg';
const Loader = () => {

  return (
    <div>
      <span><img src={spinner} alt="Loading..." /></span>
      <p>Loading...</p>
    </div>

  );
};

export default Loader;