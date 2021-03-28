import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import spinner from '../../images/desktop/Spinner-1s-48px.svg';
import './App.scss';
import getDataAPI from '../../services/api';
import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';
import MainDetails from '../MainDetails/MainDetails';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


const App = () => {

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');


  // if there is a search it updates query state
  const updateSearch = (newQuery) => {
    setJobs([]);
    setPage(1);
    setQuery(newQuery);
  }

  // API
  // runs 1) on page load, 2) when query changes, 3) when page changes.  
  useEffect(() => {
    setIsLoaded(false);
    const APIquery = !!query ? `?page=${page}${query}` : `?page=${page}`;
    const url = `https://secure-crag-00895.herokuapp.com/https://jobs.github.com/positions.json${APIquery}`;
    //const url = 'https://raw.githubusercontent.com/mariam-blanco/my-server/master/data.json';
    console.log(url);
    getDataAPI(url)
      .then(
        (data) => {
          setIsLoaded(true);
          if (data) {
            console.log(data);
            (page > 1) && setJobs(prev => [...prev, ...data]);
            setJobs(data);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

  }, [page, query]);


  // TOOGLE light-dark theme
  const toggleTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  // JOB DETAILS PAGE
  const renderDetail = (props) => {
    const jobId = props.match.params.id;
    const foundJob = (jobs.find(job => job.id === jobId));
    return !!foundJob && <MainDetails job={foundJob} />
  };


  // LOAD MORE BUTTON
  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  }

  const loadMoreBtn = (
    <button onClick={handleLoadMore} className="btn-primary">
      {isLoaded ? "Load More" : <img src={spinner} alt="Loading..." />}
    </button>
  );

  const renderLoadMore = () => {
    const MAX_CARDS_PAGE = 50;
    return (jobs.length >= MAX_CARDS_PAGE && jobs.length % MAX_CARDS_PAGE === 0) && loadMoreBtn;
  }

  return (
    <div className="bg-container">
      <div className="page-container">
        <Header toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/'>
            <MainCards>
              <SearchBox updateSearch={updateSearch} />
              {!!error ? <Error /> : !isLoaded && <Loader />}
              <CardList
                jobs={jobs}
                isLoaded={isLoaded}
              />
              {renderLoadMore()}
            </MainCards>
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
