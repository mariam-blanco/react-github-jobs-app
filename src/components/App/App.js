import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import getSearch from '../../services/api';
import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import MainDetails from '../MainDetails/MainDetails';
import './App.scss';

const App = () => {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);


  // if there is a search it updates query state
  const updateSearch = (newQuery) => {
    setPage(1);
    setQuery(newQuery);
  }

  const updatePage = () => {
    setPage(page + 1);
  }

  // API
  // it runs 1) on page load, 2) when query changes, 3) when page changes. 
  useEffect(() => {

    const APIquery = !!query ? `?page=${page}${query}` : `?page=${page}`;

    getSearch(APIquery)
      .then(data => {
        console.log(data);
        !!data && setJobs(data);
        //!!data && setJobs(data) && setIsLoading(false);       
      });

  }, [query, page]);


  // TOOGLE light-dark theme
  const toggleTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  }


  // JOB DETAILS PAGE
  const renderDetail = (props) => {
    const jobId = props.match.params.id;
    const foundJob = jobs.find(job => job.id === jobId);
    return !!foundJob && <MainDetails job={foundJob} />
  };


  return (
    <div className="bg-container">
      <div className="page-container">
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/'>
            <MainCards
              jobs={jobs}
              updateSearch={updateSearch}
              updatePage={updatePage}
            />
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
