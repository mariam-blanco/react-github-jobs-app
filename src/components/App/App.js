import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
//import spinner from '../../images/desktop/Spinner-1s-48px.svg';
import "./App.scss";
import getAllJobs from "../../services/api";
import Header from "../Header/Header";
import MainCards from "../MainCards/MainCards";
import SearchBox from "../SearchBox/SearchBox";
import CardList from "../CardList/CardList";
import MainDetails from "../MainDetails/MainDetails";
import Loader from "../Loader/Loader";
import NetworkError from "../Error/NetworkError";
import NoResults from "../Error/NoResults";
import NotFound from "../Error/NotFound";

const App = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  //const [page, setPage] = useState(1);

  const filterJobs = (query) => {
    const { terms, location, isFullTime } = query;

    let filtered = allJobs;

    if (terms) {
      filtered = filtered.filter((job) =>
        job.position.toLowerCase().includes(terms.toLowerCase())
      );
    }
    if (location) {
      filtered = filtered.filter(
        (job) => job.location.toLowerCase() === location.toLowerCase()
      );
    }
    if (isFullTime) {
      filtered = filtered.filter((job) => job.contract === "Full Time");
    }
    setFilteredJobs(filtered);
  };

  // API
  // it runs on page load.
  useEffect(() => {
    setIsLoaded(false);
    getAllJobs()
      .then((data) => {
        setIsError(false);
        setIsLoaded(true);
        setAllJobs(data);
        setFilteredJobs(data);
      })
      .catch(() => {
        setIsLoaded(true);
        setIsError(true); // network error
      });
  }, []);

  // TOOGLE light-dark theme
  const toggleTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // JOB DETAILS PAGE
  const renderDetail = (props) => {
    const jobId = props.match.params.id;
    const foundJob = filteredJobs.find((job) => job.id === parseInt(jobId));
    return foundJob ? <MainDetails job={foundJob} /> : <NotFound />;
  };

  // LOAD MORE BUTTON
  //const handleLoadMore = () => {
  //  setPage(prev => prev + 1);
  //}

  //const loadMoreBtn = (
  //  <button onClick={handleLoadMore} className="btn-primary">
  //    {isLoaded ? "Load More" : <img src={spinner} alt="Loading..." />}
  //  </button>
  //);

  //const renderLoadMore = () => {
  //  const MAX_CARDS_PAGE = 50;
  //  return (jobs.length >= MAX_CARDS_PAGE && jobs.length % MAX_CARDS_PAGE === 0) && loadMoreBtn;
  //}

  return (
    <div className="bg-container">
      <div className="page-container">
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/positions/:id" component={renderDetail} />
          <Route exact path="/">
            <MainCards>
              <SearchBox updateSearch={filterJobs} />
              {!!isError ? (
                <NetworkError />
              ) : isLoaded && !filteredJobs.length ? (
                <NoResults />
              ) : (
                !isLoaded && <Loader />
              )}
              <CardList jobs={filteredJobs} isLoaded={isLoaded} />
              {/*renderLoadMore()*/}
            </MainCards>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
