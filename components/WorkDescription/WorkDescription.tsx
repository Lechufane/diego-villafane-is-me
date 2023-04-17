import React from "react";

interface Props {
  children: React.ReactNode;
  style: any;
}

const WorkDescription: React.FC<Props> = (props) => {
  return <div style={props.style}>{props.children}</div>;
};

export default WorkDescription;
