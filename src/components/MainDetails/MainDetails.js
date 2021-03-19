import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import calculateTime from '../../services/calculateTime';
import './MainDetails.scss';

const MainDetails = ({ job }) => {

  const descriptionHtml = ReactHtmlParser(job.description);
  const howToApplyHtml = ReactHtmlParser(job.how_to_apply);

  const bgIcon = {
    backgroundImage: `url(${job.company_logo})`,
    backgroundSize: 'cover',
    backgroundColor: '#fff',
  }

  return (
    <>
      <main className="main-details">
        <div className="heading">
          <div
            className="heading-icon"
            style={bgIcon}>
          </div>
          <div className="heading-body">
            <h2>{job.company}</h2>
            {!!job.company_url && <p className="text-secondary">{job.company_url}</p>}
          </div>
          {
            !!job.company_url
            && <a href={job.company_url} target="_blank" rel="noreferrer">
              <button className="btn-secondary">Company Site</button>
            </a>
          }
        </div>
        <div className="content">
          <div className="content-header">
            <div>
              <p className="text-secondary">{calculateTime(job.created_at)} ago · {job.type}</p>
              <h1>{job.title}</h1>
              <h4 className="primary-color">{job.location}</h4>
            </div>
            <a href={job.url} target="_blank" rel="noreferrer">
              <button className="btn-primary">Apply Now</button>
            </a>
          </div>

          <div className="content-body">
            {descriptionHtml}
          </div>
        </div>

        <div className="apply-box">
          <h3>How to Apply</h3>
          <p className="body-text">{howToApplyHtml}</p>
        </div>
      </main>
      <div className="footer">
        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <a href={job.url} target="_blank" rel="noreferrer">
          <button className="btn-primary">Apply Now</button>
        </a>
      </div>
      <div className="footer-bg"></div>
    </>
  );
};

export default MainDetails;