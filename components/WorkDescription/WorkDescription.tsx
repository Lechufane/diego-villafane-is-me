import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const WorkDescription: React.FC<Props> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default WorkDescription;
