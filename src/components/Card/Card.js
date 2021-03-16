import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ job }) => {

  return (
    <div className="card">
      <div className="card-icon" style={{ backgroundImage: `url(${job.company_logo})` }}></div>
      <div className="card-content">
        <p className="text-secondary">1w ago · {job.type}</p>
        <h3>
          <Link to={`/positions/${job.id}`}>{job.title}</Link>
        </h3>
        <p className="text-secondary">{job.company}</p>
      </div>
      <h4 className="card-footer primary-color">{job.location}</h4>
    </div>
  );
};

export default Card;