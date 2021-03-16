import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllJobs, getSearch } from '../../services/apiJson';

import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import MainDetails from '../MainDetails/MainDetails';
import './App.scss';

const App = () => {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  const updateQuery = (params) => {
    const newQuery = !!params ? `?page=${page}${params}` : `?page=${page}`;
    setQuery(newQuery);
  }

  // API
  useEffect(() => {

    getSearch(query)
      .then(data => {
        !!data && setJobs(data);
        console.log('Query en useEffect 2!: ', query);
        //!!data && setJobs(data) && setIsLoading(false);
        //jobs.length === 50 && setPage(prev => prev + 1);
      });

  }, [query]);


  // toggle light-dark theme
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
              updateQuery={updateQuery}
            />
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
