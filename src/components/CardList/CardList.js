/* eslint-disable no-unused-expressions */
import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = ({ jobs, updatePage }) => {

  const handleClick = (e) => {
    e.preventDefault();
    updatePage();
  }

  return (
    <>
      <div className="cards-list">
        {jobs.map(job => <Card key={job.id} job={job} />)}
      </div>
      {jobs.length === 50 && <button onClick={handleClick} className="btn-primary">Load more</button>}
    </>
  );
};

export default CardList;