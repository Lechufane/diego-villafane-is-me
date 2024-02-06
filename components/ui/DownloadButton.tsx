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
    <a rel="noopener noreferrer" target="_blank" href={link} download>
      <button className={cn(className, classes.dwldBtn)}>{label}</button>
    </a>
  );
};

export default DownloadButton;
