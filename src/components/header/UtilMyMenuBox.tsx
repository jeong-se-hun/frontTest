import styled from 'styled-components';
import Link from 'next/link';

function UtilMyMenuBox() {
  return (
    <MyMenuBox>
      <MyMenuBoxContent>
        <Link href={'/login'}>로그인</Link>
      </MyMenuBoxContent>
      <MyMenuBoxContent>
        <Link href={'/signup'}>회원가입</Link>
      </MyMenuBoxContent>
    </MyMenuBox>
  );
}

export default UtilMyMenuBox;

const MyMenuBox = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  height: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #000;
  z-index: 2;
  padding: 14px 8px;
`;
const MyMenuBoxContent = styled.span``;
