import MenuList from './MenuList';
import UtilMenu from './UtilMenu';

import Link from 'next/link';

import styled from 'styled-components';
import Image from 'next/image';
import logo from '/public/images/logo/logo.png';

function Nav() {
  return (
    <>
      <Wrapper>
        <LogoWrap>
          <Link href={'/'}>
            <Image src={logo} alt="logo" />
          </Link>
        </LogoWrap>
        <MenuList />
        <UtilMenu />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
`;

const LogoWrap = styled.div`
  width: 18%;
  & a {
    display: block;
    margin-left: 51px;
    margin-right: 100px;
  }
`;

export default Nav;
