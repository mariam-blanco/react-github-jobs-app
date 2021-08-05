import React, { useEffect } from "react";
import "./MainDetails.scss";

const MainDetails = ({ job }) => {
  const bgIcon = {
    backgroundImage: `url(../../images/logos/${job.logo})`,
    //backgroundSize: "cover",
    backgroundColor: job.logoBackground,
  };

  const requirementsList = job.requirements.items;
  const roleList = job.role.items;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main-details">
        <div className="heading">
          <div className="heading-icon" style={bgIcon}></div>
          <div className="heading-body">
            <h2>{job.company}</h2>
            {!!job.website && <p className="text-secondary">{job.website}</p>}
          </div>
          {!!job.website && (
            <a href={job.website} target="_blank" rel="noreferrer">
              <button className="btn-secondary">Company Site</button>
            </a>
          )}
        </div>
        <div className="content">
          <div className="content-header">
            <div>
              <p className="text-secondary">
                {job.postedAt} · {job.contract}
              </p>
              <h1>{job.position}</h1>
              <h4 className="primary-color">{job.location}</h4>
            </div>
            <a href={job.apply} target="_blank" rel="noreferrer">
              <button className="btn-primary">Apply Now</button>
            </a>
          </div>
          <div className="content-body">
            <section>
              <p>{job.description}</p>
            </section>
            <section>
              <h3>Requirements</h3>
              <p>{job.requirements.content}</p>
              <ul>
                {requirementsList.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>What You Will Do</h3>
              <p>{job.role.content}</p>
              <ol>
                {roleList.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
      <div className="footer">
        <div>
          <h3>{job.position}</h3>
          <p>{job.company}</p>
        </div>
        <a href={job.apply} target="_blank" rel="noreferrer">
          <button className="btn-primary">Apply Now</button>
        </a>
      </div>
      <div className="footer-bg"></div>
    </>
  );
};

export default MainDetails;
