import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";
import cn from "@/utils/className";

interface Props {
  children: React.ReactNode;
  link: string;
  className?: string;
}

const Button: React.FC<Props> = ({
  className,
  link,
  ...props
}: Props): JSX.Element => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    //make the button scroll to the id of the link
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={link} className={className}>
      <button
        type="submit"
        className={cn("flex", classes.scrllBtn)}
        ref={ref}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
