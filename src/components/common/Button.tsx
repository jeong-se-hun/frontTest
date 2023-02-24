import styled from "styled-components";

type ButtonType = {
  color: string, 
  background: string,
  children:string
}

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  min-width: 220px;
  height: 45px;
  padding: 0 20px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  line-height: 45px;
  vertical-align: top;
  `

function Button({color, background, children}:ButtonType)  {
  return <StyledButton style={{color: `${color}`, background: `${background}`}}>{children}</StyledButton>;
}

const ButtonStyle = styled.button<{color:string, background:string}>`
  color: ${props => props.color},
  backgroundcolor: ${props => props.background}
  `

export default Button;