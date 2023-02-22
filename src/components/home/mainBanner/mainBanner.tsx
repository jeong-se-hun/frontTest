import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import banner1 from '/public/images/item/banner/1.jpg';
import banner2 from '/public/images/item/banner/2.jpg';
import banner3 from '/public/images/item/banner/3.jpg';
import banner4 from '/public/images/item/banner/4.jpg';
import banner5 from '/public/images/item/banner/5.jpg';
import banner6 from '/public/images/item/banner/6.jpg';
import banner7 from '/public/images/item/banner/7.jpg';
import banner8 from '/public/images/item/banner/8.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import styled from 'styled-components';

export default function MainBanner() {
  return (
    <MainBannerWrap>
      <Swiper
        modules={[A11y, Navigation, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <Image src={banner1} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner5} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner6} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner7} alt={'배너 이미지'} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner8} alt={'배너 이미지'} />
        </SwiperSlide>
      </Swiper>
    </MainBannerWrap>
  );
}

const MainBannerWrap = styled.div`
  & img {
    height: auto;
  }
`;
