import { useState } from "react";
import styled from "styled-components";

type DataType = {
  id: number;
  title: string;
};

export default function CheckBox(): JSX.Element {
  const data: DataType[] = [
    { id: 0, title: "(필수) 이용약관에 대한 동의" },
    { id: 1, title: "(필수) 개인정보 수집 및 이용에 대한 동의" },
    { id: 2, title: "(필수) 본인인증을 위한 개인정보 이용 동의" },
  ];
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState<number[]>([]);

  // 체크박스 개별 선택
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열(필터)
      setCheckItems(checkItems.filter((el) => el !== id));
      // setCheckItems((prev: any[]) => prev.filter((el: any) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean): void => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 id를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  return (
    <Togbox id="termToggle">
      <Hbox>
        <CheckSkin>
          <input
            type="checkbox"
            name="select-all"
            onChange={(e) => {
              handleAllCheck(e.target.checked);
            }}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={checkItems.length === data.length ? true : false}
          />
        </CheckSkin>
        <HboxLabel htmlFor="chk_receive_1">
          이용약관 및 개인정보 수집 전체 동의
        </HboxLabel>
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
                      <GrayLabel htmlFor="onlineSiteUsefStplat">
                        (필수) 이용약관에 대한 동의
                      </GrayLabel>
                    </CheckSkin>
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
  );
}

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
