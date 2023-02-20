import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { items } from "../../../public/Item.json";
import Carousel from "react-elastic-carousel";

interface ProductListProps {
  select: string;
}

const ProductList = ({ select }: ProductListProps) => {
  const { elastic } = items;
  return (
    <ProductListContainer>
      <Carousel itemsToShow={4} itemsToScroll={4} pagination={false}>
        {elastic
          .filter((item) => item.category === select)
          .map((data, i) => (
            <ProductItem
              key={i}
              title={data.title}
              image={data.image}
              price={data.price}
              hover={data.hover}
            />
          ))}
      </Carousel>
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.ul`
  display: flex;
  width: 110%;
  position: absolute;
  left: -60px;

  .kXteup {
    color: gray;
    background-color: lightgray;
  }

  .kXteup:hover:enabled,
  .kXteup:focus:enabled {
    color: gray;
    background-color: lightgray;
  }

  .Slxdj {
    background-color: lightgray;
    color: gray;
  }
`;
