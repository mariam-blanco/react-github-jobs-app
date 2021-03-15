import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllJobs, getSearch } from '../../services/apiJson';

import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import MainDetails from '../MainDetails/MainDetails';
import Modal from '../Modal/Modal';

import './App.scss';


const App = () => {

  const [page, setPage] = useState(1);
  //const [query, setQuery] = useState('');
  //const [isLoading, setIsLoading] = useState(true);
  //const [hasError, setHasError] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState({
    terms: '',
    location: '',
    isFullTime: false
  });

  // API
  useEffect(() => {
    getAllJobs()
      .then(data => {
        if (data) {
          setJobs(data);
          //setIsLoading(false);
        }
      });
  }, []);

  const searchJobs = () => {
    let newQuery;
    if (search.terms || search.location) {
      newQuery = `?page=${page}&description=${search.terms}&location=${search.location}`;
      search.isFullTime && (newQuery += '&full_time=on');
    } else {
      newQuery = `?page=${page}`;
    }

    console.log('Query: ', newQuery);
    getSearch(newQuery)
      .then(data => {
        if (data) {
          setJobs(data);
          //setIsLoading(false);
        }
      });
  }

  const searchChange = (values) => {
    setSearch(values);
  }

  const handlePageChange = () => {
    setPage(prev => prev + 1);
  }

  // toggle light-dark theme
  const toggleTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  // MODAL
  // opens and closes modal window
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // JOB DETAILS PAGE
  // render Job Detail information
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
              searchChange={searchChange}
              search={search}
              page={page}
              onPageChange={handlePageChange}
              searchJobs={searchJobs}
              openModal={openModal}
            />
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>

      </div>
      <Modal
        searchChange={searchChange}
        search={search}
        searchJobs={searchJobs}
        isOpen={isOpen}
        closeModal={closeModal} />
    </div>
  );
};

export default App;
