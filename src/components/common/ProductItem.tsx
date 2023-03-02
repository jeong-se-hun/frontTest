import styled from 'styled-components';

export type ProductItemType = {
  textAline?: string;
  name: string;
  price: number;
  modelImage: string;
  itemImage: string;
  imgHeight: number;
};

export type ProductItemWrapType = {
  modelImage: string;
  itemImage: string;
  imgHeight: number;
};

function ProductItem({
  name,
  price,
  modelImage,
  itemImage,
  imgHeight,
  textAline = 'left',
}: ProductItemType) {
  return (
    <ProductItemWrap
      imgHeight={imgHeight}
      modelImage={modelImage}
      itemImage={itemImage}
    >
      <div />
      <ProductItemTitle textAline={textAline}>{name}</ProductItemTitle>
      <ProductItemPrice textAline={textAline}>
        {price.toLocaleString()}원
      </ProductItemPrice>
    </ProductItemWrap>
  );
}

export default ProductItem;

export const ProductItemWrap = styled.article<ProductItemWrapType>`
  cursor: pointer;

  & div {
    display: block;
    height: ${(props) => props.imgHeight}px;
    background-image: url(${(props) => props.modelImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: #f8f8f8;

    &:hover {
      background-image: url(${(props) => props.itemImage});
      transition: background-image 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;

export const ProductItemTitle = styled.h3<{ textAline?: string }>`
  margin-top: 12px;
  width: 100%;
  height: 44px;
  color: #222;
  font-weight: 700;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.025em;
  text-align: ${(props) => props.textAline};
`;

export const ProductItemPrice = styled.span<{ textAline?: string }>`
  display: block;
  color: #858585;
  font-size: 18px;
  font-family: 'Manrope', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  text-align: ${(props) => props.textAline};
  margin-top: 12px;
  letter-spacing: 0.025em;
`;
