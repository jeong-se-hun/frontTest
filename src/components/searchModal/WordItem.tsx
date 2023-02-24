import styled from "styled-components";
import Link from "next/link";

interface WordItemProps {
  id: number;
  title: string;
  tag?: string;
}

export default function WordItem({ id, title, tag }: WordItemProps) {
  return (
    <WordItemContainer>
      <em>{id}</em>
      <Link href="/">{title}</Link>
      <i>{tag}</i>
    </WordItemContainer>
  );
}

const WordItemContainer = styled.li`
  letter-spacing: normal;
  position: relative;
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
  overflow: hidden;
  list-style: none;

  em {
    display: inline-block;
    width: 20px;
    margin-right: 14px;
    text-align: center;
    vertical-align: middle;
    color: #222;
    font-size: 14px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
  }

  a {
    display: inline-block;
    max-width: 280px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
    color: #222;
    line-height: 20px;
  }

  i {
    position: absolute;
    top: 14px;
    right: 0px;
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    color: #222;
  }
`;
