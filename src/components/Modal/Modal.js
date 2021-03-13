import React from 'react';
import './Modal.scss';
import iconLocation from '../../images/desktop/icon-location.svg';

const Modal = (props) => {

  const { isOpen, closeModal } = props;

  const handleCloseModal = (e) => {
    e.currentTarget === e.target && closeModal();
  }

  const handleSearchModal = (e) => {
    e.preventDefault();
    closeModal();
  }

  return (
    <div onClick={handleCloseModal} className={isOpen ? "modal" : "modal hidden"}>
      <div className="modal-container">
        <div className="search-field location">
          <img src={iconLocation} alt="Search icon" />
          <input
            name="location"
            type="text"
            placeholder="Filter by location..."
          />
        </div>
        <div className="button-box">
          <label className="checkbox-wrapper">
            <input name="jobType" type="checkbox" />
            <span className="checkmark"></span>
            <span className="label">Full Time Only</span>
          </label>
          <div className="submit-btn">
            <button onClick={handleSearchModal} className="btn-search">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;