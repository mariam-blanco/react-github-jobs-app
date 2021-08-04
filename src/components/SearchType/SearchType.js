import React from "react";

const SearchType = ({ isFullTime, changeType, isSmallScreen }) => {
  const handleType = (e) => changeType(e.target.checked);

  return (
    <div className="search-field type">
      <label className="checkbox-wrapper">
        <input
          name="isFullTime"
          checked={isFullTime}
          onChange={handleType}
          type="checkbox"
        />
        <span className="checkmark"></span>
        <span className="label">
          {isSmallScreen ? "Full Time" : "Full Time Only"}
        </span>
      </label>
    </div>
  );
};

export default SearchType;
