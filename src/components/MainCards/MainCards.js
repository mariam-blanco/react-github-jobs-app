import React from 'react';
//import "./AddTask.css";
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';

const MainCards = (props) => {

  const { jobs, searchChange, search, handleSearch, openModal } = props;

  return (
    <main className="main-index">
      <SearchBox
        searchChange={searchChange}
        search={search}
        handleSearch={handleSearch}
        openModal={openModal}
      />
      <CardList jobs={jobs} />
    </main>
  );
};

export default MainCards;