import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductSwipe from '@/components/home/ProductSwipe/ProductSwipe';

export default {
  title: 'Components/ProductSwipe',
  component: ProductSwipe,
} as ComponentMeta<typeof ProductSwipe>;

const Template: ComponentStory<typeof ProductSwipe> = args => <ProductSwipe {...args} />;

const SWIPE_TEST = {
  categoryName: '해당 영역의 타이틀을 입력하세요',
  Thumbnail: '/images/item/swiper/Jacket_thumbnail.png',
  swipeTitle: 'swipe의 제목을 입력하세요',
  swipeHashtag: '#해시 태그',
  swipeDirection: 'row',

  item: [
    {
      name: '프리미엄 남성 고어택스 자켓',
      price: 299000,
      modelImage: '/images/item/swiper/Jacket1.png',
      itemImage: '/images/item/swiper/Jacket1-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 3L 남성 고어텍스 자켓',
      price: 379000,
      modelImage: '/images/item/swiper/Jacket2.png',
      itemImage: '/images/item/swiper/Jacket2-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 소프트 남성 고어텍스 자켓',
      price: 319000,
      modelImage: '/images/item/swiper/Jacket3.png',
      itemImage: '/images/item/swiper/Jacket3-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 남성 고어텍스 자켓',
      price: 299000,
      modelImage: '/images/item/swiper/Jacket4.png',
      itemImage: '/images/item/swiper/Jacket4-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 컬러블럭 남성 고어텍스 자켓',
      price: 299000,
      modelImage: '/images/item/swiper/Jacket5.png',
      itemImage: '/images/item/swiper/Jacket5-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 여성 고어텍스 자켓',
      price: 299000,
      modelImage: '/images/item/swiper/Jacket6.png',
      itemImage: '/images/item/swiper/Jacket6-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 소프트 여성 고어텍스 자켓',
      price: 319000,
      modelImage: '/images/item/swiper/Jacket7.png',
      itemImage: '/images/item/swiper/Jacket7-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 3L 여성 고어텍스 자켓',
      price: 379000,
      modelImage: '/images/item/swiper/Jacket8.png',
      itemImage: '/images/item/swiper/Jacket8-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
    {
      name: '프리미엄 컬러블럭 여성 고어텍스 자켓',
      price: 299000,
      modelImage: '/images/item/swiper/Jacket9.png',
      itemImage: '/images/item/swiper/Jacket9-1.png',
      textAline: 'center',
      imgHeight: 300,
    },
  ],
};

export const Default = Template.bind({});
Default.args = SWIPE_TEST;
