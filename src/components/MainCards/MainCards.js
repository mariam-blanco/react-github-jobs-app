/* eslint-disable no-unused-expressions */
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';
import Error from '../Error/Error';

const MainCards = ({ jobs, updateSearch, updatePage }) => {

  return (
    <main className="main-index">
      <SearchBox
        updateSearch={updateSearch}
      />
      {
        jobs === 'undefined'
          ? <Error />
          : <CardList jobs={jobs} updatePage={updatePage} />
      }
    </main>
  );
};

export default MainCards;