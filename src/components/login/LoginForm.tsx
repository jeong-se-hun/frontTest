import React, { useState } from "react";
import styled from "styled-components";

import Member from "../login/Member";
import NonMember from "../login/NonMember";

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

const DTab02Cont = styled.div`
  margin-top: 30px;
`;

const DTab02Cont2 = styled.div`
  margin-top: 30px;
`;

/* 아이디 & 비밀번호 input */
const InputStyle01 = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border-radius: 0;
  margin-top: 5px;

  height: 40px;
  padding: 0 20px;
  font-size: 13px;
  color: #000;
  border: 1px solid #ddd;
  vertical-align: middle;
`;

const LoginCheckId = styled.p`
  margin-top: 17px;
`;

const CheckSkin = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;
`;

const CheckSkinSpan = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  font-size: 0;
  color: transparent;
  background: url(../images/common/checkbox2.png) no-repeat left top;
  z-index: 3;
`;

const ErrorMsg = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: #ff3600;
  text-align: left;
`;

/* 로그인 버튼 */

/* login-btn-link */
const LoginBtnLnk = styled.div`
  margin: 28px 0;
  text-align: center;

  margin-top: 27px;
  text-align: center;
`;

const FindA = styled.a`
  display: inline-block;
  position: relative;
  padding: 0 15px;
  font-size: 13px;
`;

const MemberBenefit = styled.div`
  margin-top: 20px;
  border-top: 2px solid #000;
`;

const TitleH3 = styled.h3`
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 500;
  background-color: #fff;
`;

const Strong = styled.strong`
  font-weight: bold;
  color: #ff3600;
`;

/* 쿠폰창 */
const ListBf = styled.div`
  // padding: 25px 27px;
  // background-color: #f0f0f0;
  // display: flex;

  // justify-content: space-between;
`;

const ListBfUl = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #f6f6f6;
`;

const ListBfUlLi = styled.li`
  margin-left: 0;
  flex: 0 0 auto;
  position: relative;
  margin: 0;
  padding: 0;
  padding: 40px 0;
  border-bottom: 1px solid #eaebef;
`;

/* 비회원 input */
const PhoneWrap = styled.div`
  margin-top: 5px;
  font-size: 0;
`;
const PhoneWrapSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 10px;
  height: 40px;
  font-size: 0;
  line-height: 0;
  vertical-align: top;
`;

const LoginCsInfo = styled.div`
  margin: 28px 0;
  padding: 17px;
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  font-family: "Manrope", "Noto Sans KR", sans-serif;
`;

const LoginCsInfoStrong = styled.strong`
  font-weight: 700;
`;

const BorderButton = styled.div``;
