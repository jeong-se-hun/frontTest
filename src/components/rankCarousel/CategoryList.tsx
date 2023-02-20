import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import ProductList from "./ProductList";

type Category = "MEN" | "WOMEN" | "SHOES" | "ACC" | "KIDS";

const CATEGORY_LIST: Array<Category> = ["MEN", "WOMEN", "SHOES", "ACC", "KIDS"];

const CategoryList = () => {
  const [select, setSelect] = React.useState<Category>("MEN");

  return (
    <>
      <CategoryListContainer>
        {CATEGORY_LIST.map((data) => (
          <CategoryItem
            key={data}
            select={data === select}
            onClick={() => setSelect(data)}
            label={data}
          />
        ))}
      </CategoryListContainer>
      <ProductList select={select} />
    </>
  );
};

export default CategoryList;

const CategoryListContainer = styled.ul`
  display: inline-block;
  position: absolute;
  right: 0;
  top: -44px;
  font-size: 0;
`;
