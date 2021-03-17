import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import getSearch from '../../services/api';
import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';
import MainDetails from '../MainDetails/MainDetails';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


const App = () => {

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');


  // if there is a search it updates query state
  const updateSearch = (newQuery) => {
    setPage(1);
    setQuery(newQuery);
  }

  const updatePage = () => {
    setPage(prev => prev + 1);
  }

  // API
  // it runs 1) on page load, 2) when query changes, 3) when page changes. 
  useEffect(() => {

    const APIquery = !!query ? `?page=${page}${query}` : `?page=${page}`;
    setIsLoaded(false);
    getSearch(APIquery)
      .then(
        (data) => {
          setIsLoaded(true);
          if (page > 1) {
            setJobs(prev => [...prev, ...data]);

          } else {
            setJobs(data);
          }

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [query, page]);

  console.log(jobs);

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
            <MainCards>
              <SearchBox updateSearch={updateSearch} />
              {error ? <Error />
                : !isLoaded ? <Loader />
                  : <CardList jobs={jobs} updatePage={updatePage}
                  />}
            </MainCards>
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
