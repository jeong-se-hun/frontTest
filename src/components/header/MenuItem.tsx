import Link from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type MenuItemType = {
  link?: string;
  readonly type?: string;
};

function MenuItem({ children, link = '/', type = 'main' }: PropsWithChildren<MenuItemType>) {
  return (
    <>
      <MenuItemWrap type={type}>
        <Link href={link}>{children}</Link>
      </MenuItemWrap>
    </>
  );
}

export default MenuItem;

const MenuItemWrap = styled.li<{ type: string }>`
  font-weight: ${props => (props.type === 'sub' ? '500' : '600')};
  color: ${props => (props.type === 'sub' ? '#6e6e6e' : '#000')};

  & a {
    margin: ${props => (props.type === 'sub' ? '38px 10px' : '38px 17px')};
    display: block;
  }
`;
