import { PropsWithChildren } from "react";

import styled, { CSSProperties } from "styled-components";

export type FlagTypes = "flagA" | "flagB" | "flagC";

export type FlagProps = {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  radius?: number;
  borderRadius?: number;
  boxShadow?: string;
  zIndex?: number;
  flagSeriesType?: FlagTypes;
};

const flagList = {
  flagA: `
  padding:5px 13px;
  border-radius:0 0 70px 70px;
  background:#F4A100;
  color:#eee;
  fontSize: 12px;
  text-shadow: -1px 0 #F4A100, 0 1px #F4A100, 1px 0 #F4A100, 0 -1px #F4A100;
  font-weight:900;
  `,
  flagB: `
  padding:5px;
  background: #adadad;
  color: #ffffff;
  fontSize: 14px;
  fontWeight: 700;
  text-align: center;
  `,
  flagC: `  
  width:20%;
  height:20px;
  background: black;
  color: #eee;
  fontSize: 10px;
  fontWeight: 700;
  margin: 0 4px 0 0;
  `,
};

// type FlagProps = FlagProps & { children: ReactNode }; //PropsWithChildren없었으면 이렇게 했어야했음

const Flag = ({ children, ...props }: PropsWithChildren<FlagProps>) => {
  return <StyledFlag {...props}>{children}</StyledFlag>;
};

export default Flag;

const StyledFlag = styled.div<FlagProps & CSSProperties>`
  ${({ flagSeriesType }) => flagSeriesType && flagList[flagSeriesType]}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  margin: ${({ margin }) => margin};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  padding: ${({ padding }) => padding};
  ${({ paddingLeft }) => paddingLeft && `padding-left : ${paddingLeft}`};
  ${({ paddingRight }) => paddingRight && `padding-right : ${paddingRight}`};
  ${({ paddingTop }) => paddingTop && `padding-top : ${paddingTop}`};
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom : ${paddingBottom}`};
  ${({ textAlign }) => (textAlign && `text-align : ${textAlign}`) || "center"};
  ${({ boxShadow }) => boxShadow && `box-shadow : 0px 2px 2px #eee`};
`;
