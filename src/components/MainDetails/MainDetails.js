import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import './MainDetails.scss';

const MainDetails = (props) => {

  const { job } = props;
  /*
  const companyUrl = <p className="text-secondary">{job.company_url}</p>;
  const companyUrlBtn = (
    <button className="btn-secondary">
      <a href={job.company_url}>Company Site</a>
    </button>
  );
    */

  const descriptionHtml = ReactHtmlParser(job.description);
  const howToApplyHtml = ReactHtmlParser(job.how_to_apply);

  const bgIcon = {
    backgroundImage: `url(${job.company_logo})`,
    backgroundSize: 'cover',
    backgroundColor: '#fff',
  }

  return (

    <main className="main-details">
      <div className="heading">
        <div
          className="heading-icon"
          style={bgIcon}>
        </div>
        <div className="heading-body">
          <h2>{job.company}</h2>
          {/* job.companyUrl && companyUrl */}

          {/* <p className="text-secondary">{companyUrl}</p> */}

        </div>
        {/* job.company_url && companyUrlBtn */}

      </div>

      <div className="content">
        <div className="content-header">
          <div>
            <p className="text-secondary">1w ago · {job.type}</p>
            <h1>{job.title}</h1>
            <h4 className="primary-color">{job.location}</h4>
          </div>
          <button className="btn-primary">Apply Now</button>
        </div>

        <div className="content-body">
          {descriptionHtml}
        </div>
      </div>

      <div className="apply-box">
        <h3>How to Apply</h3>
        <p className="body-text">{howToApplyHtml}</p>
      </div>

      <div className="footer">
        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <button className="btn-primary">Apply Now</button>
      </div>

    </main>
  );
};

export default MainDetails;