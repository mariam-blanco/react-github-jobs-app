/* eslint-disable no-unused-expressions */
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';
import Error from '../Error/Error';

const MainCards = ({ jobs, updateQuery }) => {

  return (
    <main className="main-index">
      <SearchBox
        updateQuery={updateQuery}
      />
      {
        jobs === 'undefined'
          ? <Error />
          : <CardList jobs={jobs} />
      }
    </main>
  );
};

export default MainCards;