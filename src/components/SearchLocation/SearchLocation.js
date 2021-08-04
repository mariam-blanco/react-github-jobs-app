import React from "react";
import IconLocation from "../Icons/IconLocation";

const SearchLocation = ({ location, changeLocation }) => {
  const handleLocation = (e) => changeLocation(e.target.value);

  return (
    <div className="search-field location">
      <IconLocation />
      <input
        name="location"
        value={location}
        onChange={handleLocation}
        type="text"
        placeholder="Filter by location..."
      />
    </div>
  );
};

export default SearchLocation;
