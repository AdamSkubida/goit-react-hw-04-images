import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css['loadmore-wrapper']}>
      <button className={css.button} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};
