import React from 'react';
import IconSearch from '../Icons/IconSearch';

const SearchTerms = ({ terms, changeTerms, children, isSmallScreen }) => {

  const handleTerms = (e) => changeTerms(e.target.value);

  return (
    <div className="search-field terms">
      <IconSearch fill="#5964E0" />
      <input
        name="terms"
        value={terms}
        onChange={handleTerms}
        type="text"
        placeholder={
          isSmallScreen
            ? 'Filter by title...'
            : 'Filter by title, companies, expertise...'}
      />
      {children}
    </div>
  );
};

export default SearchTerms;
