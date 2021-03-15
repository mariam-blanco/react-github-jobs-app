/* eslint-disable no-unused-expressions */
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

import CardList from '../CardList/CardList';
//import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const MainCards = (props) => {

  const { jobs, searchChange, search, searchJobs, openModal, onPageChange } = props;

  const handleClick = (e) => {
    e.preventDefault();
    searchJobs();
  }

  const showLoadMoreBtn = () => {
    const loadMoreBtn = <button onClick={handleClick} className="btn-primary">Load more</button>;
    if (jobs.length === 50) {
      onPageChange();
      return loadMoreBtn;
    }
  }

  return (
    <main className="main-index">
      <SearchBox
        searchChange={searchChange}
        search={search}
        searchJobs={searchJobs}
        openModal={openModal}
      />
      {jobs === 'undefined' ? <Error /> : <CardList jobs={jobs} />}
      {showLoadMoreBtn}
    </main>
  );
};

export default MainCards;