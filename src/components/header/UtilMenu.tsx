import styled from 'styled-components';

import Image from 'next/image';
import ico_search from '/public/images/common/ico_search.png';
import ico_my from '/public/images/common/ico_my.png';
import ico_bag from '/public/images/common/ico_bag.png';

function UtilMenu() {
  return (
    <UtilMenuWrap>
      <UtilItem>
        <button>
          <Image src={ico_search} alt="search icon"></Image>
        </button>
      </UtilItem>
      <UtilItem>
        <button>
          <Image src={ico_my} alt="my icon"></Image>
        </button>
      </UtilItem>
      <UtilItem>
        <button>
          <Image src={ico_bag} alt="bag icon"></Image>
        </button>
      </UtilItem>
    </UtilMenuWrap>
  );
}

export default UtilMenu;

const UtilMenuWrap = styled.ul`
  display: flex;
  justify-content: right;
  flex-grow: 1;
  margin-right: 70px;
`;

export const UtilItem = styled.li`
  width: 40px;
  height: auto;

  display: flex;
  align-content: center;
  justify-content: center;

  & button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  & img {
    width: 20px;
    height: auto;
  }
`;
