import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

const ImageGalleryItem = ({ smallImg, tags, largeImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={smallImg}
        alt={tags}
        className={css.ImageGalleryItemImage}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      />
      {isModalOpen && (
        <Modal
          largeImg={largeImg}
          tags={tags}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string,
  tags: PropTypes.string,
  largeImg: PropTypes.string,
};

export default ImageGalleryItem;
