import React from "react";

export interface TitleProps {
  text?: string;
}

function Test({ text }: TitleProps) {
  return <div>{text}</div>;
}

export default Test;
