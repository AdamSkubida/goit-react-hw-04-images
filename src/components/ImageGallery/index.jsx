import { useState } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/index';

export const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = e => {
    setIsOpen(true);
    isOpen(isOpen);
  };

  return (
    <ul className={css.list}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} item={image} onClick={openModal} />
      ))}
    </ul>
  );
};
