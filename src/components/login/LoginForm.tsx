import React, { useState } from 'react';
import styled from 'styled-components';

import Member from '../login/Member';
import NonMember from '../login/NonMember';

function LoginForm() {
  const [test, setTest] = useState(true);

  const MemberHandler = () => {
    setTest(true);
  };

  const NonMemberHandler = () => {
    setTest(false);
  };

  return (
    <article id="container">
      <section id="contents" className="member-login">
        <LoginWrap>
          {/* LoginCnt-공통으로 감싸주는 부분 */}
          <LoginCnt>
            {/* 회원탭 start */}
            <TabType05>
              <DTab02Select>
                <DTab02SelectA href="#">
                  <button onClick={MemberHandler}>회원</button>
                </DTab02SelectA>
              </DTab02Select>
              <DTab02Select>
                <DTab02SelectA
                  href="#"
                  data-ga-category="PC_DX_로그인"
                  data-ga-action="비회원"
                  onClick={NonMemberHandler}
                >
                  <button onClick={NonMemberHandler}> 비회원 (주문조회)</button>
                </DTab02SelectA>
              </DTab02Select>
            </TabType05>
            {/* 회원탭 end */}
          </LoginCnt>
          {/* LoginCnt-공통으로 감싸주는 부분 */}
          {test ? <Member /> : <NonMember />}
        </LoginWrap>
      </section>
    </article>
  );
}

export default LoginForm;

/* 회원 & 비회원(주문조회) */
const LoginWrap = styled.div`
  width: 750px;
  margin: 0 auto;
`;

const LoginCnt = styled.div`
  width: 400px;
  margin: 78px auto 0;
`;

const TabType05 = styled.ul`
  overflow: hidden;
  background: #fff;
  z-index: 1;
`;

const DTab02Select = styled.li`
  float: left;
  width: 50%;
`;

const DTab02SelectA = styled.a`
  border-bottom: 1px solid #000;
  font-weight: 700;

  display: flex;
  height: 62px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  justify-content: center;
  align-items: center;
  word-break: inherit;
  word-wrap: break-word;
  white-space: normal;
`;
