//버튼 컴포넌트 테스트

import styled from "styled-components";

type ButtonType = {
  color?: string; 
  background?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  display?: string;
  justifyContent?: string;
  alignItems?:string;
  float?: string;
  position?: string;
  marginLeft?: string;
  paddingLeft?: string;
  letterSpacing?: string;
  lineHeight?: string;
  border?: string | number;
}

interface ButtonProps extends ButtonType {
  children?: string;
}

function Button2({ children, ...rest }: ButtonProps)  {
  return (
  <StyledButton {...rest}>{children}</StyledButton>
  )
}

const StyledButton = styled.button<ButtonType>`
  width: 100%;
  height: 50px;
  line-height: 50px;  
  justify-content: center;
  display: inline-block;
  minidth: 220px;
  height: 45px;
  padding: 0 20px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  line-height: 45px;
  vertical-align: top;
  border: none;
  font-size: 14px;

  color: ${props => props.color};
  background: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display}
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  float: ${props => props.float};
  line-height: ${props => props.lineHeight};
  border: ${props => props.border};
  `

export default Button2;