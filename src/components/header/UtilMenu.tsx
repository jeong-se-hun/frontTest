import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import ico_search from '/public/images/common/ico_search.png';
import ico_my from '/public/images/common/ico_my.png';
import ico_bag from '/public/images/common/ico_bag.png';

import Modal from '../searchModal/Modal';
import UtilMyMenuBox from './UtilMyMenuBox';
import Link from 'next/link';

function UtilMenu() {
  const [modal, setModal] = useState(false);
  const [myMenuChecked, setMyMenuChecked] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setMyMenuChecked(false);
  }, [router.asPath]);

  const onOpen = () => setModal(true);
  const onClose = () => setModal(false);
  const myMenuCheckedToggle = () => setMyMenuChecked(myMenuChecked => !myMenuChecked);

  return (
    <>
      <UtilMenuWrap>
        <UtilItem>
          <button onClick={onOpen}>
            <Image src={ico_search} alt="search icon"></Image>
          </button>
        </UtilItem>
        <UtilItem>
          <button onClick={myMenuCheckedToggle}>
            <Image src={ico_my} alt="my icon"></Image>
          </button>
          {myMenuChecked && <UtilMyMenuBox />}
        </UtilItem>
        <UtilItem>
          <button>
            <Link href={'/cart_page'}>
              <Image src={ico_bag} alt="bag icon"></Image>
            </Link>
          </button>
        </UtilItem>
      </UtilMenuWrap>

      {modal ? <Modal onClose={onClose} /> : null}
    </>
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
  position: relative;
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
