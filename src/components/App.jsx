import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGalery from './ImageGallery';

const App = () => {
  const [pictureName, setPictureName] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);

  const handleFormSubmit = pictureName => {
    setPictureName(pictureName);
    setPage(1);
    setHits([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGalery
        pictureName={pictureName}
        page={page}
        loadMore={loadMore}
        hits={hits}
        setHits={setHits}
      />
    </div>
  );
};

export default App;
