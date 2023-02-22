import styled from 'styled-components';
import ProductItem from '../../common/ProductItem';
import { NEW_ITEM_INFO } from '@/constants/home/constants';

export default function MewItems() {
  return (
    <NewItemSection>
      <NewItemTitle>New Arrivals, New Life</NewItemTitle>
      <NewItemList>
        {NEW_ITEM_INFO.map(info => (
          <ProductItem key={info.name} {...info} />
        ))}
      </NewItemList>
    </NewItemSection>
  );
}

export const NewItemSection = styled.section`
  width: 76%;
  margin: 0 auto;
  padding-top: 80px;
`;
export const NewItemTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #222;
  padding: 0 0 24px;
`;
export const NewItemList = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  & article {
    flex-basis: 25%;
  }
`;
