import React from "react";
import styled from "styled-components";

interface Props {
  list: Array<string>;
  text?: string;
  setWork: (item: string) => void;
}

const UList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListElement = styled.li<{ text?: string }>`
  font-size: 90px;
  font-family: var(--font-one);
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text ?? ""}";
    top: 0;
    left: 0;
    position: absolute;
    color: #fff;
    -webkit-text-stroke: 1px white;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    animation: moveText 0.5s linear both;
  }

  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;

const List: React.FC<Props> = ({ list, setWork, text = "" }) => {
  return (
    <UList>
      {list.map((item, i) => (
        <ListElement text={text || item} key={i} onClick={() => setWork(item)}>
          {item}
        </ListElement>
      ))}
    </UList>
  );
};

export default List;
