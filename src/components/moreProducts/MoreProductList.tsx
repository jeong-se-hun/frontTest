import items from "../../../public/data/Items.json";
import ProductItem from "../rankCarousel/ProductItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

type Test = {
  category: string;
  title: string;
  price: string;
  image: string;
  hover: string;
};

export default function MoreProductList() {
  const [cnt, setCnt] = useState(0);
  const [productData, setProductData] = useState<Test[]>([]);

  useEffect(() => {
    let addProduct = productData.concat(items.slice(8 * cnt, 8 * (cnt + 1)));
    setProductData(addProduct);
  }, [cnt]);

  return (
    <>
      {productData.map((item) => (
        <ProductItem key={item.title} {...item} />
      ))}
      <MoreButton onClick={() => setCnt(cnt + 1)}>상품 더보기 +</MoreButton>
    </>
  );
}

const MoreButton = styled.button`
  cursor: pointer;
  border: 0 none;
  letter-spacing: normal;
  display: block;
  margin: 41px auto;
  width: 338px;
  height: 46px;
  text-align: center;
  font-size: 15px;
  line-height: 16px;
  color: #fff;
  background: #18345b;
  font-weight: 200;
`;
