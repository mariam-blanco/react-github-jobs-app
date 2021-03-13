import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

//import getDataFromApi from '../services/getDataFromApi';
//import GitHub from '../services/api';
import { getAllJobs, getSearch } from '../../services/apiJson';

import Header from '../Header/Header';
import MainCards from '../MainCards/MainCards';
import MainDetails from '../MainDetails/MainDetails';
import Modal from '../Modal/Modal';

import './App.scss';


const App = () => {

  //const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState({
    terms: '',
    location: '',
    isFullTime: false
  });


  // get data onload
  useEffect(() => {
    getAllJobs()
      .then(data => {
        setJobs(data);
      });
  }, []);

  const searchChange = (valuesObj) => setSearch(valuesObj);

  const handleSearch = () => {
    if (search.terms || search.location) {
      getSearch(search);
    }
  }

  // toggle light-dark theme
  const toggleTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

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
              handleSearch={handleSearch}
              openModal={openModal}
            />
          </Route>
          <Route path='/positions/:id' component={renderDetail} />
        </Switch>

      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );

};

export default App;
