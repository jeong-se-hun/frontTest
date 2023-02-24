import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import black from '/public/images/carousel/black.png';

interface ProductProps {
  title: string;
  price: string;
  image: string;
  hover: string;
}

export default function ProductItem({ title, price, image, hover }: ProductProps) {
  return (
    <ProductContainer>
      <Link href="/">
        <ProductImage>
          <Image src={image} alt={title} width={304.5} height={406} />
          <Hover>
            <Image src={hover} alt={title} width={304.5} height={406} />
          </Hover>
        </ProductImage>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Colorchips>
          <Image src={black} alt="색상" />
          <Image src={black} alt="색상" />
          <Image src={black} alt="색상" />
        </Colorchips>
      </Link>
    </ProductContainer>
  );
}

const ProductContainer = styled.li`
  width: 304.5px;
  flex: 0 0 auto;
  list-style: none;
`;

const ProductImage = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Hover = styled.div`
  position: absolute;
  top: 0%;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.div`
  margin-top: 12px;
  height: 44px;
  color: #222;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

const Price = styled.div`
  margin-top: 12px;
  color: #858585;
  font-size: 18px;
  font-family: 'Manrope', 'Noto Sans KR', sans-serif;
  font-weight: 400;
`;

const Colorchips = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: left;

  img {
    width: 15px;
    height: 15px;
    margin: 0 4px;
  }
`;
