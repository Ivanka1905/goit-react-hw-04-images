import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from 'components/Button';
import css from './ImageGallery.module.css';

const ImageGalery = ({ pictureName, page, loadMore, hits, setHits }) => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (pictureName === '') {
      return;
    }
    setStatus('pending');
    fetch(
      `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=30167206-9cd8436e9cf02f01e1d7e25e7&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Nothing found'));
      })
      .then(h => {
        setHits(prevState => {
          return [...prevState, ...h.hits];
        });
        setStatus('resolve');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pictureName, page, setHits]);

  if (status === 'idle') {
    return;
  }
  if (status === 'pending') {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ea3c12"
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{}}
      />
    );
  }
  if (status === 'rejected') {
    return <h1> Oops, an error happened: {error}</h1>;
  }
  if (status === 'resolve') {
    return hits.length === 0 ? (
      <h1>Oops, nothing found</h1>
    ) : (
      <>
        <ul className={css.ImageGallery}>
          {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
        <Button onClick={loadMore} />
      </>
    );
  }
};

ImageGalery.propTypes = {
  pictureName: PropTypes.string,
};

export default ImageGalery;
