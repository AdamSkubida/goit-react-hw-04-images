import css from './Modal.module.css';

export const Modal = ({ onClick, largeImg, alt }) => {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={largeImg} alt={alt} />
      </div>
    </div>
  );
};
