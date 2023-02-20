import React from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const RankCarousel = () => {
  return (
    <CarouselContainer>
      <Title>이번주 디스커버러의 BEST PICK</Title>
      <CarouselBox>
        <CategoryList />
      </CarouselBox>
    </CarouselContainer>
  );
};

export default RankCarousel;

const CarouselContainer = styled.div`
  margin-top: 80px;
  padding-bottom: 600px;
  background-color: #f8f8f8;
  padding-top: 80px;
`;

const Title = styled.span`
  width: 1275px;
  margin: 0 auto;
  position: relative;
  padding: 0 0 24px;
  display: block;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #222;
`;

const CarouselBox = styled.div`
  position: relative;
  width: 1275px;
  margin: 0 auto;
`;
