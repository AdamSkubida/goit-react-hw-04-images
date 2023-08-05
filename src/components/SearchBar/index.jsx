import { useState } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleSubmit = () => {
    onSubmit(query);
  };

  return (
    <header className={css[`form-wrapper`]}>
      <input
        className={css.input}
        type="text"
        placeholder="Search images and photos"
        onChange={handleChange}
      />
      <button className={css.button} type="button" onClick={handleSubmit}>
        Submit
      </button>
    </header>
  );
};
