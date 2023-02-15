import styled from 'styled-components';

export type NEW_ITEM_INFO_TYPE = {
  name: string;
  price: number;
  modelImage: string;
  itemImage: string;
};

export type NEW_ITEM_WRAP_TYPE = {
  modelImage: string;
  itemImage: string;
};

function NewItem({ name, price, modelImage, itemImage }: NEW_ITEM_INFO_TYPE) {
  return (
    <NewItemWrap modelImage={modelImage} itemImage={itemImage}>
      <div />
      <NewItemTitle>{name}</NewItemTitle>
      <NewItemPrice>{price.toLocaleString()}원</NewItemPrice>
    </NewItemWrap>
  );
}

export default NewItem;

export const NewItemWrap = styled.article<NEW_ITEM_WRAP_TYPE>`
  cursor: pointer;

  & div {
    display: block;
    height: 400px;
    background-image: url(${props => props.modelImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      background-image: url(${props => props.itemImage});
      transition: background-image 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`;

export const NewItemTitle = styled.h3`
  margin-top: 12px;
  width: 305px;
  height: 44px;
  color: #222;
  font-weight: 700;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const NewItemPrice = styled.span`
  color: #858585;
  font-size: 18px;
  font-family: 'Manrope', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  letter-spacing: 0.05rem;
`;
