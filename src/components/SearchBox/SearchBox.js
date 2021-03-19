import React, { useState, useEffect } from 'react';
import './SearchBox.scss';
import IconFilter from '../Icons/IconFilter';
import IconSearch from '../Icons/IconSearch';
import SearchTerms from '../SearchTerms/SearchTerms';
import SearchLocation from '../SearchLocation/SearchLocation';
import SearchType from '../SearchType/SearchType';
import Modal from '../Modal/Modal';

const SearchBox = ({ updateSearch }) => {

  const [terms, setTerms] = useState('');
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);

  const changeTerms = (terms) => setTerms(terms);
  const changeLocation = (location) => setLocation(location);
  const changeType = (type) => setIsFullTime(type);

  // a través de updateQuery se envían los nuevos parámetros de la queryString y 
  // se actualiza en estado de la query, añadiéndole en número de página "page"
  const handleClick = (e) => {
    (e.target.name === "btnModal") && closeModal();
    updateSearch(`&description=${terms}&location=${location}${!!isFullTime ? '&full_time=on' : ''}`)
  }

  // MODAL
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  // PLACEHOLDER
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 850px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const updateIsSmallScreen = (e) => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateIsSmallScreen);

    return () => {
      mediaQuery.removeEventListener('change', updateIsSmallScreen);
    };
  }, []);


  return (
    <>
      <div className="search-box">
        <SearchTerms
          terms={terms}
          changeTerms={changeTerms}
          isSmallScreen={isSmallScreen}
        >
          <IconFilter openModal={openModal} />
          <button className="btn-search-sm">
            <IconSearch fill="#fff" />
          </button>
        </SearchTerms>
        <SearchLocation
          location={location}
          changeLocation={changeLocation}
        />
        <SearchType
          isFullTime={isFullTime}
          changeType={changeType}
          isSmallScreen={isSmallScreen}
        />
        <div className="search-btn">
          <button onClick={handleClick} className="btn-search">Search</button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <SearchLocation
          location={location}
          changeLocation={changeLocation}
        />
        <SearchType
          isFullTime={isFullTime}
          changeType={changeType}
        />
        <div className="search-btn">
          <button name="btnModal" onClick={handleClick} className="btn-search">Search</button>
        </div>
      </Modal>
    </>
  );
};

export default SearchBox;
