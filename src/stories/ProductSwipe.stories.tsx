import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductSwipe from '@/components/home/ProductSwipe';
import { SWIPE_JACKET } from '@/constants/home/constants';

export default {
  title: 'Components/ProductSwipe',
  component: ProductSwipe,
} as ComponentMeta<typeof ProductSwipe>;

const Template: ComponentStory<typeof ProductSwipe> = args => <ProductSwipe {...args} />;

const SWIPE_TEST = {
  ...SWIPE_JACKET,
  categoryName: '해당 영역의 타이틀을 입력하세요',
  swipeTitle: 'swipe의 제목을 입력하세요',
  swipeHashtag: '#해시 태그',
};

export const Default = Template.bind({});
Default.args = SWIPE_TEST;
