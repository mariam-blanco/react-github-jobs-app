import React, { useState, useEffect } from 'react';
import IconSearch from '../Icons/IconSearch';
import IconLocation from '../Icons/IconLocation';
import IconFilter from '../Icons/IconFilter';
import './SearchBox.scss';

const SearchBox = (props) => {

  const { searchChange, search, searchJobs, openModal } = props;

  // SEARCH
  // get search values and change search state
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    searchChange({
      ...search,
      [e.target.name]: value,
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    searchJobs();
  }

  // PLACEHOLDER
  // change placeholder text
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 850px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const updateIsSmallScreen = (e) => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateIsSmallScreen);

    // clean up addEventListener
    return () => {
      mediaQuery.removeEventListener('change', updateIsSmallScreen);
    }
  }, [isSmallScreen]);

  return (
    <div className="search-box">
      <form>
        <div className="search-field terms">
          <IconSearch fill="#5964E0" />
          <input
            name="terms"
            value={search.terms}
            onChange={handleChange}
            type="text"
            placeholder={
              isSmallScreen
                ? 'Filter by title...'
                : 'Filter by title, companies, expertise...'}
          />
          <IconFilter openModal={openModal} />
          <button onClick={handleClick} className="btn-search-sm">
            <IconSearch fill="#fff" />
          </button>
        </div>
        <div className="search-field location">
          <IconLocation />
          <input
            name="location"
            value={search.location}
            onChange={handleChange}
            type="text"
            placeholder="Filter by location..."
          />
        </div>
        <div className="button-box">
          <label className="checkbox-wrapper">
            <input
              name="isFullTime"
              checked={search.isFullTime}
              onChange={handleChange}
              type="checkbox"
            />
            <span className="checkmark"></span>
            <span className="label">
              {
                isSmallScreen
                  ? 'Full Time'
                  : 'Full Time Only'
              }
            </span>
          </label>

          <div className="submit-btn">
            <button onClick={handleClick} className="btn-search">Search</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SearchBox;
