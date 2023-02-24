import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Scrollbar, Navigation } from 'swiper';
import { StaticImageData } from 'next/image';
import VideoItem from './VideoItem';

import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/scrollbar';

type VideosCarouselProps = {
  categoryName: string;
  item: { title: string; description: string; videoThumbnail: StaticImageData; videoUrl: string }[];
};

export default function VideosCarousel(VideosInfo: VideosCarouselProps) {
  return (
    <VideosCarouselSection>
      <VideosSectionTop>
        <VideosTitle>{VideosInfo.categoryName}</VideosTitle>
        <VideosMore>더보기</VideosMore>
      </VideosSectionTop>
      <Swiper
        navigation
        loop={true}
        modules={[A11y, Scrollbar, Navigation]}
        scrollbar
        spaceBetween={30}
        slidesPerView={2}
      >
        {VideosInfo.item.map(item => {
          return (
            <SwiperSlide key={item.title}>
              <VideoItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </VideosCarouselSection>
  );
}

export const VideosCarouselSection = styled.section`
  width: 76%;
  margin: 0 auto;
  padding-top: 80px;

  & .swiper:hover {
    .swiper-button-prev,
    .swiper-button-next {
      transition: opacity 0.3s;
      opacity: 1;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    transition: opacity 0.3s;

    top: 40%;
    opacity: 0;

    &::after {
      color: #6e6e6e;
      font-size: 22px;
      font-weight: bold;
    }
  }

  & .swiper-slide {
    padding-bottom: 46px;
  }
`;

export const VideosSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 24px;
`;
export const VideosTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
export const VideosMore = styled.span`
  font-size: 12px;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
    margin-left: 6px;
    transform-origin: top center;
  }
`;
