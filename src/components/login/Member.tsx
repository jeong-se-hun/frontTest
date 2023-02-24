import styled from "styled-components";
import Coupon from "../common/Coupon";
import Button2 from "../common/Button2";

export default function Member() {
  return (
    <LoginCnt>
      <DTab02Cont style={{ display: "block" }}>
        {/* 회원 form start */}
        <form id="loginForm" method="post">
          <input
            type="hidden"
            name="_csrf"
            value="57f826b6-5e22-4804-be28-872cc93de46d"
          />
          <input type="hidden" name="accessToken" id="accessToken" value="" />
          <input
            type="hidden"
            name="loginTarget"
            id="loginTarget"
            value="https://www.discovery-expedition.com/main/mall/view"
          />
          <input type="hidden" name="remember-me" id="autologin" value="true" />
          <input type="hidden" name="pageMode" value="false" />
          <input type="hidden" name="redirect_uri" id="redirect_uri" value="" />
          <input type="hidden" name="id_token" id="id_token" value="" />
          {/* 회원 form end */}

          {/* 회원-아이디 & 비밀번호 input start */}
          <InputStyle01
            type="text"
            title="아이디 입력창"
            placeholder="아이디"
            id="userId"
            name="userId"
            /* value="" validate="required;" validatetext="아이디" */
          />
          <InputStyle01
            type="password"
            title="비밀번호 입력창"
            placeholder="비밀번호"
            id="password"
            name="password"
            value="" /* validate="required;" validatetext="비밀번호" */
          />

          <LoginCheckId>
            <CheckSkin>
              <input type="checkbox" id="chkSaveId" name="chkSaveId" />
              <CheckSkinSpan>선택</CheckSkinSpan>
            </CheckSkin>
            <label /* for="chkSaveId" */>아이디 저장</label>
          </LoginCheckId>

          <ErrorMsg></ErrorMsg>
        </form>
        {/* 회원-아이디 & 비밀번호 input end */}

        {/* 로그인 버튼 start */}

        <Button2 width="100%" color="#fff" background="black">
          로그인
        </Button2>
        <Button2 width="198px" background="#03c75a" color="#fff">
          네이버 로그인
        </Button2>
        <Button2 width="198px" background="#fee500" color="#191919">
          카카오 로그인
        </Button2>

        {/* 로그인 버튼 end */}

        {/* login-btn-link start */}
        <LoginBtnLnk className="login-btn-lnk">
          <FindA
            href="#"
            id="findId" /* onClick="return false;" */
            data-ga-category="PC_DX_로그인"
            data-ga-action="정보찾기"
            data-ga-label="아이디 찾기"
          >
            아이디 찾기
          </FindA>
          <FindA
            href="#"
            id="findPassword" /* onClick="return false;" */
            data-ga-category="PC_DX_로그인"
            data-ga-action="정보찾기"
            data-ga-label="비밀번호 찾기"
          >
            비밀번호 찾기
          </FindA>
        </LoginBtnLnk>
        {/* login-btn-link end */}

        <div className="member-benefit">
          <TitleH3>
            지금 바로 회원가입하고 <Strong>특별한 혜택</Strong> 받기
          </TitleH3>

          {/* 쿠폰창 start */}
          <ListBf>
            <ListBfUl>
              <Coupon></Coupon>
              <Coupon
                amount={"10 %"}
                title={"첫 구매완료 시\n 감사쿠폰 지급"}
              ></Coupon>
              <Coupon
                amount={"6 %"}
                title={"구매할 때마다\n 최대 6% 적립"}
              ></Coupon>
            </ListBfUl>
          </ListBf>
          {/* 쿠폰창 end */}
        </div>
        {/* 회원가입 버튼 start */}
        <Button2 background="white" color="#000" border="1px solid #000">
          회원가입
        </Button2>
        {/* 회원가입 버튼 end */}
      </DTab02Cont>
      {/* DTab02Cont-회원 전체 탭 */}
    </LoginCnt>
  );
}

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
