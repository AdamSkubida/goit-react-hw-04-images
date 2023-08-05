import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/index';
import { Loader } from './Loader/index';
import { ImageGallery } from './ImageGallery/index';
import { Button } from './Button/index';

const API_KEY = `36950464-5a13f55b57e77fe0085f04ef4`;

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    fetchImages();
  }, [query]);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleSubmit = newQuery => {
    setPage(1);
    setQuery(newQuery);
  };

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${
          page * 15
        }`
      );

      const data = await response.json();

      setImages(data.hits);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    setPage(page + 1);
    fetchImages();
  };

  // openModal = imageData => {
  //   if (imageData) {
  //     setState({ isOpen: true });
  //   }
  // };

  // closeModal = modalData => {
  //   if (!modalData) {
  //     setState({ isOpen: false });
  //   }
  // };

  return (
    <>
      <SearchBar
        onSubmit={query => {
          handleSubmit(query);
        }}
      />
      {isLoading && <Loader />}

      <ImageGallery
        images={images}
        // isOpen={isOpen => {
        //   openModal(isOpen);
        // }}
      />
      {images.length > 0 && !isLoading && <Button onClick={handleClick} />}
    </>
  );
};
