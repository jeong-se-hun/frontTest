import styled from "styled-components";

type CouponType = {
  amount: string | number,
  title: string
}

function Coupon({ amount, title } : CouponType){
  
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

Coupon.defaultProps ={
  amount: '10,000 M',
  title: '신규가입 시\n 마일리지 지급'
}

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

export default Coupon;