/* eslint-disable no-unused-expressions */
import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = ({ jobs }) => {

  return (
    <div className="cards-list">
      {jobs.map(job => <Card key={job.id} job={job} />)}
    </div>

  );
};

export default CardList;