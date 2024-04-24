import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import './style.css'

const Modal = ({ children, isOpen, onClose }) => {

    useEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;  
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = originalStyle;
      }
  
      // Cleanup function to restore original style
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }, [isOpen]);
  
    if (!isOpen) return null;

  

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-content">

      <button className="close-btn" onClick={onClose}>   <img src="icons/x.svg" alt="" /></button>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;