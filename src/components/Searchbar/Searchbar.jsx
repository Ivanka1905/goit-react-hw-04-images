import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

const Searchbar = ({ handleFormSubmit }) => {
  const [pictureName, setPictureName] = useState('');

  const handleNameChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (pictureName.trim() === '') {
      toast.warn('Введіть слово', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    handleFormSubmit(pictureName);
    setPictureName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={pictureName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func,
};

export default Searchbar;
