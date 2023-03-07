import styled from 'styled-components';
import ProductItem from './ProductItem';
import items from '../../../public/data/Item.json';
import Carousel from 'react-elastic-carousel';

interface ProductListProps {
  select: string;
}

export default function ProductList({ select }: ProductListProps) {
  return (
    <ProductListContainer>
      {/* @ts-ignore */}
      {/*    <Carousel itemsToShow={4} itemsToScroll={4} pagination={false}>
       {items
          .filter(item => item.category === select)
          .map((data, i) => (
            <ProductItem key={i} {...data} />
          ))} 
      </Carousel>*/}
    </ProductListContainer>
  );
}

export const ProductListContainer = styled.ul`
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
