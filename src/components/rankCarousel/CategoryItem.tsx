import React from "react";
import styled, { css } from "styled-components";

interface CategoryItemProps {
  label: string;
  select: boolean;
  onClick: () => void;
}

const CategoryItem = ({ label, select, onClick }: CategoryItemProps) => {
  return (
    <Item onClick={onClick} select={select}>
      {label}
    </Item>
  );
};

export default CategoryItem;

const Item = styled.li<{ select: boolean }>`
  display: inline-block;
  margin-left: 28px;
  ${({ select }) =>
    css`
      color: ${select ? "#3d3d3d" : "#a7a7a7"};
    `}
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;
