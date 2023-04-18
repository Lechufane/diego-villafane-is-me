import React from "react";
import classes from "./Button.module.css";

interface Props {
  children: React.ReactNode;
}

const SubmitButton: React.FC<Props> = (props) => {
  return (
    <button type='submit' className={classes.btn}>
      {props.children}
    </button>
  );
};

export default SubmitButton;