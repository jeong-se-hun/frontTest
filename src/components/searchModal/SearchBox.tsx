import { useEffect, useState } from "react";
import styled from "styled-components";
import placeHolder from "../../../public/data/placeHolder.json";

export default function SearchBox() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index + 1);

      if (index === 10) {
        setIndex(0);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <SerachBoxContainer>
      <SearchInputBox>
        <SearchInput type="text" placeholder={placeHolder[index].name} />
      </SearchInputBox>
      <SearchButton type="button" />
    </SerachBoxContainer>
  );
}

const SerachBoxContainer = styled.div`
  position: relative;
  width: 1098px;
`;

const SearchInputBox = styled.span`
  position: relative;
  white-space: nowrap;
  display: block;
  border-bottom: #000 solid 2px;
`;

const SearchInput = styled.input`
  border: none;
  height: 38px;
  width: 100%;
  padding: 0 38px 14px 0;
  outline: none;
  font-size: 24px;
  color: #b5b5b5;
  // z-index: 15;
`;

const SearchButton = styled.button`
  z-index: 10;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  background: url(https://static.discovery-expedition.com/pc/static/images/common/v2/ico_search_layer.png)
    right 2px/20px 20px no-repeat;
  width: 38px;
  height: 38px;
  border: none;
`;
