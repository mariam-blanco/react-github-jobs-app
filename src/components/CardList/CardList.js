/* eslint-disable no-unused-expressions */
import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = ({ jobs, updatePage }) => {

  const MAX_CARDS_PAGE = 50;

  const handleClick = (e) => {
    e.preventDefault();
    updatePage();
  }

  return (
    <>
      <div className="cards-list">
        {jobs.map(job => <Card key={job.id} job={job} />)}

      </div>
      {jobs.length === MAX_CARDS_PAGE
        && <button onClick={handleClick} className="btn-primary">Load more</button>}
    </>
  );
};

export default CardList;