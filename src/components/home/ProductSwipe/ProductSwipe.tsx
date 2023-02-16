import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar } from 'swiper';

import styled from 'styled-components';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/scrollbar';

import ProductItem from '@/components/common/ProductItem';

type ProductSwipeType = {
  categoryName: string;
  Thumbnail: string;
  swipeTitle: string;
  swipeHashtag: string;
  swipeDirection: string; //* "row" or "row-reverse"
  item: { name: string; price: number; modelImage: string; itemImage: string; textAline: string; imgHeight: number }[];
};

function ProductSwipe(swipeInfo: ProductSwipeType) {
  return (
    <ProductSwipeSection>
      <ProductTitle>{swipeInfo.categoryName}</ProductTitle>
      <SwipeWrap swipeDirection={swipeInfo.swipeDirection}>
        <Thumbnail>
          <Image width={720} height={600} src={swipeInfo.Thumbnail} alt={swipeInfo.categoryName + 'thumbnail'} />
        </Thumbnail>
        <SwipeBox>
          <SwiperTitle>
            {swipeInfo.swipeTitle}
            <SwiperHashtag>{swipeInfo.swipeHashtag}</SwiperHashtag>
          </SwiperTitle>
          <Swiper modules={[A11y, Scrollbar]} scrollbar={{ draggable: true }} spaceBetween={30} slidesPerView={2}>
            {swipeInfo.item.map(item => {
              return (
                <SwiperSlide key={item.name}>
                  <ProductItem {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwipeBox>
      </SwipeWrap>
    </ProductSwipeSection>
  );
}

export default ProductSwipe;
export const ProductSwipeSection = styled.section`
  width: 76%;
  margin: 0 auto;
  padding-top: 80px;
`;
export const ProductTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #222;
  padding: 0 0 24px;
`;
export const SwipeWrap = styled.div<{ swipeDirection: string }>`
  display: flex;
  flex-direction: ${props => props.swipeDirection};
  background-color: #f8f8f8;
`;

export const SwipeBox = styled.div`
  width: 43%;
  padding: 30px 40px;

  & .swiper {
    padding-bottom: 34px;

    & .swiper-scrollbar-drag {
      cursor: pointer;
      background-color: #000;
    }
  }
`;

export const SwiperTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 42px;
`;

export const SwiperHashtag = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #858585;
  margin-top: 20px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.36px;
  font-weight: 400;
`;

export const Thumbnail = styled.div`
  width: 57%;
  flex-shrink: 0;

  & img {
    width: 100%;
  }
`;
