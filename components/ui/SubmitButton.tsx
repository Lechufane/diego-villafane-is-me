import React from "react";
import classes from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const SubmitButton: React.FC<Props> = (props) => {
  return (
    <button
      type="submit"
      className={props.disabled ? classes.btnDisabled : classes.btn}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default SubmitButton;
