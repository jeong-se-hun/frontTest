import styled from 'styled-components';
import NewItem from './NewItem';
import { NEW_ITEM_INFO } from '@/constants/home/constants';

function MewItems() {
  return (
    <NewItemSection>
      <NewItemTitle>New Arrivals, New Life</NewItemTitle>
      <NewItemList>
        {NEW_ITEM_INFO.map(info => (
          <NewItem key={info.name} {...info} />
        ))}
      </NewItemList>
    </NewItemSection>
  );
}

export default MewItems;

const NewItemSection = styled.section`
  width: 76%;
  margin: 0 auto;
  padding-top: 80px;
`;
const NewItemTitle = styled.h2`
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
`;
