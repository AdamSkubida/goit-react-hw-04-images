import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/index';

export const ImageGalleryItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const { webformatURL, tags, largeImageURL } = item;

  return (
    <>
      {isOpen && (
        <Modal onClick={handleModal} largeImg={largeImageURL} alt={tags} />
      )}
      <li onClick={handleModal}>
        <img className={css.img} src={webformatURL} alt={tags} />
      </li>
    </>
  );
};
