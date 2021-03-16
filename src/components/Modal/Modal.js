import React from 'react';
import './Modal.scss';

const Modal = (props) => {

  const { isOpen, closeModal, children } = props;

  // CLOSE MODAL
  const handleClose = (e) => {
    e.currentTarget === e.target && closeModal();
  }

  return (
    <div onClick={handleClose} className={isOpen ? "modal" : "modal hidden"}>
      <div className="modal-container">
        {children}
      </div>
    </div>
  );
};

export default Modal;