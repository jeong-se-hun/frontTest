import styled from "styled-components";
import WordListItem from "../../../public/data/WordListItem.json";
import WordItem from "./WordItem";

export default function WordList() {
  return (
    <WordListContainer>
      <Title>조회수 급상승 키워드</Title>
      <WordListBox>
        {WordListItem.map((item) => (
          <WordItem key={item.title} {...item} />
        ))}
      </WordListBox>
    </WordListContainer>
  );
}

const WordListContainer = styled.div`
  width: 472px;
`;

export const WordListBox = styled.ol`
  columns: 2;
  column-gap: 32px;
  padding-top: 16px;
`;

const Title = styled.h2`
  margin-top: -3px;
  padding-bottom: 0px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  color: #222;
`;
