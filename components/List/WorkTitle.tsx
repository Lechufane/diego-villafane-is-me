import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
}

const ListElement = styled.li<{ text?: string }>`
  font-size: 90px;
  font-family: var(--font-one);
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text ?? ""}";
    position: absolute;
    color: #fff;
    -webkit-text-stroke: 1px white;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-align: center; // Center the text horizontally
  }

  &:hover::after {
    width: 100%;
    animation: moveText 0.5s linear both; // Keep the fill animation on hover
  }

  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;

const WorkTitle: React.FC<Props> = ({ text }: Props) => {
  return <ListElement text={text}>{text}</ListElement>;
};

export default WorkTitle;
