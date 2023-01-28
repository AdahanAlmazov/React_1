import classes from "./Ui.module.css";

const Button = ({ isModal, handleDo, children }) => {
  return (
    <button
      onClick={handleDo}
      className={isModal ? classes.modalButton : classes.button}
    >
      {children}
    </button>
  );
};

export default Button;
