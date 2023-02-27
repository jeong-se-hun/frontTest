import styled from "styled-components";

type ButtonType = {
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  border?: string;
  children?: string;
};

interface ButtonProps extends ButtonType {}

function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button<ButtonType>`
  color: #fff;
  background: #000;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  border: 1px solid #000;
  border: none;
  font-size: 14px;

  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
`;

export default Button;
