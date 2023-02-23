import styled from "styled-components";

export type Coupon2Type = {
  amount: string | number,
  title: string
}

export type Coupon2WrapType = {
  CouponPadding: string;
  CouponMargin: string;
  CouponJustifyContent: string;
  
}

function Coupon2({ amount, title } : Coupon2Type){
  
  return(
  <>
    <ListBnfUl>
      <ListBnfUlLi>
        <ListBnfUlLiMileData>{ amount }</ListBnfUlLiMileData>
        <div>
          <ListBnfUlLiSpan>{ title }</ListBnfUlLiSpan>
        </div>
      </ListBnfUlLi>
    </ListBnfUl>
  </>
  );
}

Coupon2.defaultProps ={
  amount: '10,000 M',
  title: '신규가입 시\n 마일리지 지급'
}

export const Coupon2Wrap = styled.ul<Coupon2WrapType>`
  padding: ${props => props.CouponPadding};
  margin: ${props => props.CouponMargin};
  justifyContent: ${props => props.CouponJustifyContent};
`

const ListBnfUl = styled.ul`
  display: flex;
  justify-content: center;
`

const ListBnfUlLi = styled.li`
  flex: 0 0 auto;
  position: relative;
  margin: 0 0 0 45px;
  padding: 0;
`

const ListBnfUlLiMileData = styled.span`
  background-image: url(../images/member/ico_benefit_blk.png);
  font-size: 14px;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0 7px 0 10px;
  width: 100px;
  height: 40px;
  background-position: 0 0;
  background-repeat: no-repeat;
  line-height: 40px;
  letter-spacing: normal;
  color: #fff;
`

const ListBnfUlLiSpan = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  white-space: pre-line
`

export default Coupon2;