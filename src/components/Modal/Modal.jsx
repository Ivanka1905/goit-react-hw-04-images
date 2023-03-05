import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImg, tags, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    function handleEscape(e) {
      if (e.code === 'Escape') onClick();
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClick]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClick();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <img src={largeImg} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string,
  tags: PropTypes.string,
};

export default Modal;
