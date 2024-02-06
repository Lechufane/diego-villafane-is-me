import React from "react";
import classes from "./Button.module.css";
import cn from "@/utils/className";

interface Props {
  label?: string;
  link: string;
  className?: string;
}

const DownloadButton: React.FC<Props> = ({
  link,
  label,
  className,
  ...props
}: Props) => {
  return (
    <button className={cn(className, classes.dwldBtn)}>
      <a rel="noopener noreferrer" target="_blank" href={link} download>
        {label}
      </a>
    </button>
  );
};

export default DownloadButton;
