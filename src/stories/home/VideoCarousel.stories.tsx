import { ComponentStory, ComponentMeta } from '@storybook/react';
import VideosCarousel from '@/components/home/videoCarousel/VideoCarousel';
import { SWIPE_VIDEOS } from '@/constants/home/constants';

import 'swiper/css/navigation';

export default {
  title: 'Components/VideosCarousel',
  component: VideosCarousel,
} as ComponentMeta<typeof VideosCarousel>;

const Template: ComponentStory<typeof VideosCarousel> = args => <VideosCarousel {...args} />;

const SWIPE_TEST = SWIPE_VIDEOS;
export const Default = Template.bind({});
Default.args = SWIPE_TEST;
