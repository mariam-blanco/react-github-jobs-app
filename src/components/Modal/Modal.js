import React from 'react';
import './Modal.scss';
import iconLocation from '../../images/desktop/icon-location.svg';

const Modal = (props) => {

  const { searchChange, search, createQuery, isOpen, closeModal } = props;

  // SEARCH VALUES
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

  // SEARCH
  const handleClick = (e) => {
    e.preventDefault();
    createQuery();
    closeModal();
  }

  // CLOSE MODAL
  const handleCloseModal = (e) => {
    e.currentTarget === e.target && closeModal();
  }

  return (
    <div onClick={handleCloseModal} className={isOpen ? "modal" : "modal hidden"}>
      <div className="modal-container">
        <div className="search-field location">
          <img src={iconLocation} alt="Search icon" />
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
            <span className="label">Full Time Only</span>
          </label>
          <div className="submit-btn">
            <button onClick={handleClick} className="btn-search">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;