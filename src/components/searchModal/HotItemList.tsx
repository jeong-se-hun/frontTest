import styled from "styled-components";
import HotListItem from "../../../public/HotListItem.json";
import HotItem from "./HotItem";

export default function HotItemList() {
  return (
    <HotItemListContainer>
      <Title>New Arrivals, New Life</Title>
      <HotItemBox>
        {HotListItem.map((item) => (
          <HotItem
            key={item.title}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </HotItemBox>
    </HotItemListContainer>
  );
}

const HotItemListContainer = styled.div`
  flex: 1;
  margin-left: 80px;
  letter-spacing: normal;
  font-family: "Manrope", "Noto Sans KR", sans-serif;
`;

const Title = styled.h2`
  margin-top: -3px;
  padding-bottom: 0px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  color: #222;
`;

const HotItemBox = styled.ul`
  margin-top: 28px;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
`;
