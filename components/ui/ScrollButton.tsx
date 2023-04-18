import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<Props> = (props:Props) => {

  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    //make the button scroll to the id of the link
    const element = document.getElementById(props.link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
      <Link href={props.link}>
        <button type='submit' className={classes.btn} ref={ref} onClick={handleClick}>
          {props.children}
        </button>
      </Link>
  );
};

export default Button;
