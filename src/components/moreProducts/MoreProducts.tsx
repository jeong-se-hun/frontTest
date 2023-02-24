/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import MoreProductList from "./MoreProductList";

export default function MoreProducts() {
  return (
    <MoreProductListContainer>
      <Title>MD'S PICK</Title>
      <MoreProductListBox>
        <MoreProductList />
      </MoreProductListBox>
    </MoreProductListContainer>
  );
}

const MoreProductListContainer = styled.div`
  width: 1275px;
  margin: 0 auto;
  padding-top: 80px;
`;

const MoreProductListBox = styled.ul`
  margin: 0;
  padding: 0;
  color: #000;
  font-family: "Noto Sans Korean", "dotum", sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: -0.025em;
  word-break: keep-all;

  flex-wrap: wrap;
  width: 1296px;
  margin-left: -10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  position: relative;
  padding: 0 0 24px;
  display: block;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #222;
`;
