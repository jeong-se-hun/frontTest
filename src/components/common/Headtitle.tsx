import styled from 'styled-components';

type HeadtitleType = {
  title: string;
  smallTitle: string;
};

function Headtitle({ title, smallTitle }: HeadtitleType) {
  return (
    <>
      <LocationContainer>
        <LocationContents>
          <Title>{title}</Title>
          <Location>
            <span>
              <a href="/main/mall/view">Home</a>
            </span>
            <strong>{smallTitle}</strong>
          </Location>
        </LocationContents>
      </LocationContainer>
    </>
  );
}

Headtitle.defaultProps = {
  title: '회원가입',
  smallTitle: '회원가입',
};

export default Headtitle;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;

  & ~ #container #contents {
    padding-top: 0;
  }
`;

const LocationContents = styled.div`
  width: 1280px;
  margin: 0 220px;
  padding: 150px 0 0;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-top: -5px;
`;

const Location = styled.p`
  margin-top: 33px;
  padding-bottom: 12px;
  border-bottom: 4px solid #000;
  font-size: 15px;
  line-height: 13px;
`;
