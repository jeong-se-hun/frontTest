import styled from "styled-components";
import SearchBox from "./SearchBox";
import ModalBack from "./ModalBack";
import WordList from "./WordList";
import HotItemList from "./HotItemList";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <>
      <ModalContainer>
        <SearchContainer>
          <SearchBox />
          <CloseButton type="button" onClick={onClose} />
        </SearchContainer>
        <ContextBox>
          <WordList />
          <HotItemList />
        </ContextBox>
      </ModalContainer>
      <ModalBack onClose={onClose} />
    </>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  min-height: 171px;
  top: 0;
  left: 0px;
  right: 0px;
  padding: 60px 322px 60px 322px;
  background-color: #fff;
  box-shadow: 0 10px 25px 0 rgb(34 34 34 / 5%);
  border-top: 1px solid #e4e4e4;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const ContextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1098px;
  margin: 0;
  padding: 48px 0 0;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: relative;
  margin-left: 30px;
  top: -5px;
  width: 37px;
  height: 37px;
  background: url("https://static.discovery-expedition.com/pc/static/images/common/v2/ico_search_close.png")
    no-repeat;
  border: none;
  z-index: 15;
`;
