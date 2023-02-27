import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import Coupon from "../common/Coupon";

type SignupFormTyle = {
  name: string;
  value: string;
  validate: string;
  htmlFor: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function SignupForm() {
  return (
    <MemberDetailWrap>
      {/* F&F 통합회원 특별혜택 start */}
      <MemberJoinTop>
        <Benefit>
          <div className="desc">
            <Title>F&amp;F 통합회원 특별혜택</Title>
            <TitleP>
              F&amp;F 패밀리 브랜드의 다양한 서비스를 <br />
              하나의 계정으로 편리하게!
            </TitleP>
          </div>

          <Coupon></Coupon>
          <Coupon
            amount={"10 %"}
            title={"첫 구매완료 시\n 감사쿠폰 지급"}
          ></Coupon>
          <Coupon
            amount={"6 %"}
            title={"구매할 때마다\n 최대 6% 적립"}
          ></Coupon>
        </Benefit>
        <Family>
          <FamilyDt>F&amp;F Family Brand</FamilyDt>
          <FamilyDd>
            {" "}
            Discovery Expedition · MLB · MLB KIDS · COLLECTED
          </FamilyDd>
        </Family>
        <TxtHint>
          <TxtHintP>
            신규 가입 통합 마일리지는 1인 1회 지급으로 오프라인 가입 이력이
            있으신 경우, 마일리지가 지급되지 않습니다.
          </TxtHintP>
        </TxtHint>
      </MemberJoinTop>
      {/* F&F 통합회원 특별혜택 end */}

      {/* =====form start===== */}
      <form action="/member/join/add" id="joinMbrForm" method="post">
        <input type="hidden" name="REQ_SEQ" id="REQ_SEQ" />
        <input type="hidden" name="RES_SEQ" id="RES_SEQ" />
        <input type="hidden" name="CERT_END_YN" id="CERT_END_YN" value="N" />
        <input
          type="hidden"
          name="mbr.emailRecptnAgrYn"
          id="mbr.emailRecptnAgrYn"
          value="N"
        />
        <input
          type="hidden"
          name="mbr.smsRecptnAgrYn"
          id="mbr.smsRecptnAgrYn"
          value="N"
        />
        <input
          type="hidden"
          name="_csrf"
          value="568cabc8-cfc1-4e1f-9990-54bbf5af88a5"
        />

        {/* =====필수정보 start===== */}
        <Title06>필수정보</Title06>
        <BoardWrite>
          <Table summary="개인정보입력">
            <caption>개인정보입력</caption>
            <colgroup>
              <col style={{ width: "200px" }} />
            </colgroup>
            <Tbody>
              <Tr>
                <Th scope="row">
                  <label>아이디</label>
                  <Required>*</Required>
                </Th>
                <Td>
                  <InputStyle01
                    type="text"
                    id="mbrId"
                    name="mbr.mbrId"
                    className="input-style01"
                    style={{ width: "550px" }}
                  />
                  <span className="error-msg"></span>
                  <Comment>6~15자 영문, 숫자 조합</Comment>
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">
                  <label>비밀번호</label>
                  <Required>*</Required>
                </Th>
                <Td>
                  <InputStyle01
                    type="password"
                    id="mbrPw"
                    name="mbr.mbrPw"
                    className="input-style01"
                    style={{ width: "550px" }}
                  />
                  <span className="error-msg"></span>
                  <Comment>
                    8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합
                  </Comment>
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">
                  <label>비밀번호 확인</label>
                  <Required>*</Required>
                </Th>
                <Td>
                  <InputStyle01
                    type="password"
                    id="mbrCheckPw"
                    className="input-style01"
                    style={{ width: "550px" }}
                  />
                  <span className="error-msg"></span>
                </Td>
              </Tr>
              <Tr>
                <Th scope="row">
                  <label>이메일</label>
                  <Required>*</Required>
                </Th>
                <Td>
                  <InputStyle01
                    type="text"
                    id="mbrEmail"
                    className="input-style01"
                    title="이메일 아이디 입력"
                    value=""
                    style={{ width: "208px" }}
                  />
                  <At>@</At>
                  <InputStyle01
                    type="text"
                    id="mbrEmailDomain"
                    className="input-style01"
                    title="이메일 도메인 주소 직접 입력"
                    style={{ width: "152px" }}
                  />
                  <SelectStyle01 title="이메일 도메인 주소 선택창">
                    <SelectStyle01Button
                      type="button"
                      className="d_select_sel"
                      style={{ width: "152px" }}
                      id="emailDefaultDomain"
                    >
                      <span>직접입력</span>
                    </SelectStyle01Button>

                    <ul>
                      <SelectStyle01Li>
                        <a href="#">직접입력</a>
                      </SelectStyle01Li>
                      <SelectStyle01Li>
                        <a href="#">naver.com</a>
                      </SelectStyle01Li>
                      <SelectStyle01Li>
                        <a href="#">daum.net</a>
                      </SelectStyle01Li>
                      <SelectStyle01Li>
                        <a href="#">nate.com</a>
                      </SelectStyle01Li>
                      <SelectStyle01Li>
                        <a href="#">gmail.com</a>
                      </SelectStyle01Li>
                      <SelectStyle01Li>
                        <a href="#">hotmail.com</a>
                      </SelectStyle01Li>
                    </ul>
                  </SelectStyle01>
                  <span className="error-msg"></span>
                  <InputStyle01 type="hidden" name="mbr.mbrEmail" />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </BoardWrite>
        {/* =====필수정보 end===== */}

        {/* =====이용약관 start===== */}
        <section className="sect receive" style={{ display: "block" }}>
          <Togbox id="termToggle">
            <Hbox>
              <CheckSkin>
                <input
                  type="checkbox"
                  id="chk_receive_1"
                  data-gtm-form-interact-field-id="0"
                />
                {/*   <SelectSpan>선택</SelectSpan> */}
              </CheckSkin>
              <HboxLabel htmlFor="chk_receive_1">
                이용약관 및 개인정보 수집 전체 동의
              </HboxLabel>
              <small
                id="chkReciveError"
                style={{ display: "none", color: "red", fontSize: "13px" }}
              >
                필수약관에 동의를 체크해 주세요.
              </small>
              <BtnOpen
                type="button"
                className="btn-open d_toggle_select"
                id="termBtn"
              >
                <span>Open</span>
              </BtnOpen>
            </Hbox>
            <CboxDtoggleCont>
              <ul className="list">
                <TogboxList>
                  <TitAtree>이용약관</TitAtree>
                  <AgreeWrap>
                    <AgreeWrapItems>
                      <BoxItems>
                        <Item>
                          <CheckSkin>
                            <input
                              type="checkbox"
                              name="onlineSiteUsefStplat"
                              id="onlineSiteUsefStplat"
                              value="Y"
                            />
                          </CheckSkin>
                          <GrayLabel htmlFor="onlineSiteUsefStplat">
                            (필수) 이용약관에 대한 동의
                          </GrayLabel>
                        </Item>
                      </BoxItems>
                      <a href="javascript:;" className="linkASt">
                        <ContentSpan>내용보기</ContentSpan>
                      </a>
                    </AgreeWrapItems>

                    <AgreeItems>
                      <BoxItems>
                        <Item>
                          <CheckSkin>
                            <input
                              type="checkbox"
                              name="psnlInfoColctUsefAgr"
                              id="psnlInfoColctUsefAgr"
                              value="Y"
                            />
                          </CheckSkin>
                          <GrayLabel htmlFor="onlineSiteUsefStplat">
                            (필수) 개인정보 수집 및 이용에 대한 동의
                          </GrayLabel>
                        </Item>
                      </BoxItems>
                      <a href="javascript:;" className="linkAS">
                        <ContentSpan>내용보기</ContentSpan>
                      </a>
                    </AgreeItems>

                    <AgreeItems>
                      <BoxItems>
                        <Item>
                          <CheckSkin>
                            <input
                              type="checkbox"
                              name="psnlInfoUseAgr"
                              id="psnlInfoUseAgr"
                              value="Y"
                            />
                          </CheckSkin>
                          <GrayLabel htmlFor="psnlInfoUseAgr">
                            (필수) 본인인증을 위한 개인정보 이용 동의
                          </GrayLabel>
                        </Item>
                      </BoxItems>
                      <a href="javascript:;" className="linkASt">
                        <ContentSpan>내용보기</ContentSpan>
                      </a>
                    </AgreeItems>
                  </AgreeWrap>
                </TogboxList>

                <TogboxList>
                  <TitAtree>마케팅정보 수신</TitAtree>
                  <BoxItems>
                    <Item>
                      <CheckSkin>
                        <input
                          type="checkbox"
                          name="emailRecptnAgrYn"
                          id="emailRecptnAgrYn"
                          value="Y"
                        />
                      </CheckSkin>
                      <GrayLabel htmlFor="emailRecptnAgrYn">
                        (선택) E-mail 수신 동의
                      </GrayLabel>
                    </Item>
                    <Item>
                      <CheckSkin>
                        <input
                          type="checkbox"
                          name="smsRecptnAgrYn"
                          id="smsRecptnAgrYn"
                          value="Y"
                        />
                      </CheckSkin>
                      <GrayLabel htmlFor="smsRecptnAgrYn">
                        (선택) SNS (알림톡) 수신 동의
                      </GrayLabel>
                    </Item>
                  </BoxItems>
                  <a href="javascript:;" className="linkASt">
                    <ContentSpan>내용보기</ContentSpan>
                  </a>
                </TogboxList>
              </ul>
            </CboxDtoggleCont>
          </Togbox>
        </section>
        {/* =====이용약관 end===== */}
      </form>
      {/* =====form end===== */}

      {/* =====회원가입 버튼 start===== */}
      <BtnWrap>
        <BtnStyled02
          href="#none"
          className="btn-style02"
          id="confirmBtn"
          data-ga-category="PC_DX_회원가입"
          data-ga-action="통합회원 가입"
          data-ga-label="통합회원 가입"
        >
          본인인증하고 회원가입
        </BtnStyled02>
      </BtnWrap>
      {/* =====회원가입 버튼 end===== */}

      {/* =====간편 회원가입 start===== */}
      <SignEasy>
        <Title02>간편회원 가입</Title02>
        <TxtSubInfo02>자주 사용하는 SNS 아이디로 간편하게 가입!</TxtSubInfo02>
        <BtnEasyJoin>
          <Naver
            href="javascript:void(0);"
            className="naver"
            id="naverJoin"
            data-ga-category="PC_DX_회원가입"
            data-ga-action="간편회원 가입"
            data-ga-label="네이버로 가입"
          >
            <BtnEasyJoinSpan>네이버로 가입</BtnEasyJoinSpan>
          </Naver>
          <Kakao
            href="javascript:void(0);"
            className="kakao"
            id="kakaoJoin"
            data-ga-category="PC_DX_회원가입"
            data-ga-action="간편회원 가입"
            data-ga-label="카카오로 가입"
          >
            <BtnEasyJoinSpan>카카오로 가입</BtnEasyJoinSpan>
          </Kakao>
          <a id="kakao-join-btn" style={{ display: "none" }}></a>
        </BtnEasyJoin>
      </SignEasy>
      {/* =====간편 회원가입 end===== */}
    </MemberDetailWrap>
  );
}

/* =====F&F 통합회원 특별혜택 start===== */
const MemberDetailWrap = styled.div`
  width: 750px;
  margin: 0 auto;
  padding: 36px 0 0 0;
`;

const MemberJoinTop = styled.div`
  position: relative;
  padding-top: 14px;
`;

const Benefit = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
`;

const TitleP = styled.p`
  margin-top: 19px;
  line-height: 20px;
  color: #666;
  font-size: 14px;
`;

const Family = styled.dl`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 20px;
  padding: 22px 0 23px;
  background-color: #f4f4f4;
`;

const FamilyDt = styled.dt`
  position: relative;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
`;

const FamilyDd = styled.dd`
  position: relative;
  padding-left: 65px;
  margin-left: 65px;
  line-height: 14px;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  letter-spacing: normal;
  font-size: 14px;
`;

const TxtHint = styled.div`
  margin: 20px 0 0;
`;

const TxtHintP = styled.p`
  padding-left: 22px;
  background: url(../images/member/ico_alert.png) 0px 2px no-repeat;
  color: #666;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
`;

/* =====필수정보 start===== */
const Title06 = styled.h3`
  margin-top: 80px;
  font-size: 16px;
`;

const BoardWrite = styled.div`
  padding: 25px 0;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #666;
  border-bottom: 1px solid #ddd;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const Th = styled.th`
  border-top: none;
  padding: 25px 0;
  border: none;

  color: #000;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  word-break: break-word;
`;

const Td = styled.td`
  padding: 15px 0;
  border: none;
`;

const InputStyle01 = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  height: 40px;
  padding: 0 20px;
  font-size: 13px;
  color: #000;
  border: 1px solid #ddd;
  vertical-align: middle;
  font-family: "Manrope", "Noto Sans KR", sans-serif !important;
`;
const Comment = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: #999;
`;
const At = styled.span`
  padding: 0 5px;
`;

const SelectStyle01 = styled.div`
  margin-left: 6px;
  vertical-align: top;

  display: inline-block;
  position: relative;
  height: 40px;
  background: #fff;
  vertical-align: middle;
  z-index: 1;
`;

const SelectStyle01Button = styled.button`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 40px;
  padding: 0 40px 0 10px;
  border: 1px solid #ddd;
  vertical-align: middle;
  text-align: left;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;

const SelectStyle01Li = styled.li`
  margin-top: 8px;
  font-size: 13px;
  color: #999;
`;

/* =====이용약관 start===== */
const Togbox = styled.div`
  min-height: 30px;
  margin: 50px 0;
`;

const Hbox = styled.div`
  padding: 20px 0;
  border-bottom: #000 solid 1px;
`;

const CheckSkin = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;
`;

const GrayLabel = styled.label`
  width: auto;
  color: #737373;
  font-size: 13px;
  font-weight: 100;
  cursor: pointer;

  inline-block;
  margin-left: 5px;
  color: #666;
  vertical-align: -1px;
  display: inline-block;
  min-width: 160px;
`;

const ContentSpan = styled.span`
  font-size: 12px;
  line-height: 13px;
  font-weight: 100;
  color: #737373;
`;

const HboxLabel = styled.label`
  min-width: 170px;
  font-size: 14px;
  cursor: pointer;
  padding-right: 22px;
`;

const BtnOpen = styled.button`
  top: 10px;
  width: 30px;
  height: 30px;
  background: url(../images/common/bg_select_open.png) no-repeat 50%;
  background-image: url(../images/common/bg_select_close.png);
  text-indent: -9999px;
  overflow: hidden;
  position: absolute;
  right: -7px;
`;

const CboxDtoggleCont = styled.div`
  display: block;
`;

const TogboxList = styled.li`
  border-bottom: #dddddd solid 1px;
  padding: 20px 0;
  position: relative;

  list-style: none;
  border: none;
  display: flex;
`;

const TitAtree = styled.div`
  flex: 0 0 auto;
  width: 200px;
  font-size: 14px;
  color: #000;
`;

const AgreeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  flex: 1;
`;

const AgreeWrapItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxItems = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const Item = styled.span`
  margin-left: 0;
`;

const Required = styled.span`
  color: #ff3600 !important;
`;

const AgreeItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* =====회원가입 버튼 start===== */
const BtnWrap = styled.div`
  margin-top: 80px;

  overflow: hidden;
  text-align: center;
`;

const BtnStyled02 = styled.a`
  width: 280px;
  height: 50px;
  line-height: 47px;
  letter-spacing: normal;
  font-weight: 100;

  display: inline-block;
  min-width: 220px;
  height: 45px;
  padding: 0 20px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  line-height: 45px;
  vertical-align: top;
`;

/* =====간편 회원가입 start===== */
const SignEasy = styled.div`
  position: relative;
  margin-top: 100px;
  padding-top: 50px;
  border-top: 1px solid #666;
`;

const Title02 = styled.h3`
  margin-top: 26px;
  font-size: 24px;
`;

const TxtSubInfo02 = styled.p`
  margin-top: 17px;
  color: #666;
  font-size: 13px;
  line-height: 18px;
`;

const BtnEasyJoin = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  font-size: 0;
`;

const BtnEasyJoinSpan = styled.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0;
  font-size: 13px;
  color: #666;
  white-space: nowrap;
`;

const Naver = styled.a`
  background-image: url(../images/member/bg_naver2.png);

  display: inline-block;
  position: relative;
  width: 59px;
  height: 59px;
  margin-left: 40px;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 0;
  color: transparent;
`;

const Kakao = styled.a`
  background-image: url(../images/member/bg_kakao2.png);

  display: inline-block;
  position: relative;
  width: 59px;
  height: 59px;
  margin-left: 40px;
  background-repeat: no-repeat;
  background-position: 0 0;
  font-size: 0;
  color: transparent;
`;

export default SignupForm;
