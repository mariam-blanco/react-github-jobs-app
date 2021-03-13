import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = (props) => {

  const { jobs } = props;

  return (
    <div className="cards-list">
      {jobs.map(job => <Card key={job.id} job={job} />)}
    </div>
  );
};

export default CardList;