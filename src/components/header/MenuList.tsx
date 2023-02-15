import MenuItem from './MenuItem';
import styled from 'styled-components';

function MenuList() {
  return (
    <>
      <MenuListWrap>
        <Menu>
          <MenuItem>MEN</MenuItem>
          <MenuItem>WOMEN</MenuItem>
          <MenuItem>SHOES</MenuItem>
          <MenuItem>ACC</MenuItem>
          <MenuItem>KIDS</MenuItem>
        </Menu>
        <Menu type="sub">
          <MenuItem type="sub">OUTLET</MenuItem>
          <MenuItem type="sub">PROMOTION</MenuItem>
          <MenuItem type="sub">DISCOVERER</MenuItem>
        </Menu>
      </MenuListWrap>
    </>
  );
}

export default MenuList;

const MenuListWrap = styled.div`
  display: flex;
  align-content: center;
  font-size: 1rem;
`;

export const Menu = styled.ul<{ type?: string }>`
  display: flex;
  align-content: center;
  justify-content: space-between;
  ${props =>
    props.type === 'sub'
      ? `
    &::before {
      content: '';
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 20px;
      margin: 0 18px 0 27px;
      background-color: #000;
      display: block;
    }
  `
      : ''}
`;
