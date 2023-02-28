import { useState } from "react";
import styled from "styled-components";

type CheckBoxType = {
  label: string;
  props: string;
};

type DataType = {
  id: number;
  title: string;
};

export default function CheckBox(): JSX.Element {
  const data: DataType[] = [
    { id: 0, title: "(필수) 이용약관에 대한 동의" },
    { id: 1, title: "(필수) 개인정보 수집 및 이용에 대한 동의" },
    { id: 2, title: "(필수) 본인인증을 위한 개인정보 이용 동의" },
    /*     { id: 3, title: "(선택) E-mail 수신 동의" },
    { id: 4, title: "(선택) SNS (알림톡) 수신 동의" }, */
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
    <ParentDiv>
      <HeaderDiv>
        <HeaderSpan>
          <input
            type="checkbox"
            name="select-all"
            onChange={(e) => {
              handleAllCheck(e.target.checked);
            }}
            // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
            checked={checkItems.length === data.length ? true : false}
          />
          <label className="second-row">
            이용약관 및 개인정보 수집 전체 동의
          </label>
        </HeaderSpan>
        <ShowContents></ShowContents>
      </HeaderDiv>

      <BodyDiv>
        <BodyLi>
          <TitleTerms>이용약관</TitleTerms>
          {data?.map((data: DataType, key: number) => (
            <RequiredTerms key={key}>
              <RequiredTermsWrap>
                <RequiredTermsBoxItems>
                  <RequiredTermsItems>
                    <input
                      type="checkbox"
                      name={`select-${data.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, data.id)
                      }
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(data.id) ? true : false}
                    />
                  </RequiredTermsItems>
                </RequiredTermsBoxItems>
              </RequiredTermsWrap>
              <label className="second-row">{data.title}</label>
              <ShowContentsSpan>
                <span>내용보기</span>
              </ShowContentsSpan>
            </RequiredTerms>
          ))}
        </BodyLi>
      </BodyDiv>
    </ParentDiv>
  );
}

const ParentDiv = styled.div`
  min-height: 30px;
  margin: 50px 0;
`;

const HeaderDiv = styled.div`
  padding: 20px 0;
  border-bottom: #000 solid 1px;
`;

const HeaderSpan = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  overflow: hidden;
`;

const BodyDiv = styled.div`
  display: block;
`;

const BodyLi = styled.li`
  border-bottom: #dddddd solid 1px;
  padding: 20px 0;
  position: relative;
  list-style: none;
  border: none;
  display: flex;
`;

const TitleTerms = styled.div`
  flex: 0 0 auto;
  width: 200px;
  font-size: 14px;
  color: #000;
`;

const RequiredTerms = styled.div`
  min-width: 170px;
  font-size: 14px;
  cursor: pointer;
  padding-right: 22px;
`;

const RequiredTermsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  flex: 1;
`;

const RequiredTermsBoxItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RequiredTermsItems = styled.span`
  margin-left: 0;
`;

const ShowContents = styled.a``;

const ShowContentsSpan = styled.span`
  font-size: 12px;
  line-height: 13px;
  font-weight: 100;
  color: #737373;
`;
