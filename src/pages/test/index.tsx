import React from "react";
import Flag from "../../components/common/flag/Flag";
import styled from "styled-components";
import BottomContainer from "@/components/common/potalContainer/BottomContainer";

const Test = () => {
  return (
    <Container>
      <p>Flag A</p>
      <Flag width="48px" height="24px" flagSeriesType="flagA">
        KIDS
      </Flag>
      <div />
      <p>Flag B</p>
      <Flag width="187px" height="24px" flagSeriesType="flagB">
        일시 품절
      </Flag>
      <div />
      <p>Flag B (버튼형)</p>
      <Flag
        width="335px"
        height="56px"
        flagSeriesType="flagB"
        color="gray"
        backgroundColor="#282828"
        padding="20px"
        borderRadius={28}
      >
        일시 품절
      </Flag>
      <div />
      <p>Flag c</p>
      <Flag flagSeriesType="flagC">일시 품절asd</Flag>
      <div />
      <BottomContainer />
    </Container>
  );
};

export default Test;

const Container = styled.div`
  position: absolute;
  top: 400px;
  left: 300px;

  & div {
    margin: 0 0 20px;
  }
  & p {
    margin: 0 0 9px;
    color: gray;
  }
`;
