import { ComponentStory, ComponentMeta } from '@storybook/react';
import VideoItem from '@/components/home/videoCarousel/VideoItem';
import { SWIPE_VIDEOS } from '@/constants/home/constants';
import styled from 'styled-components';
import { actions } from '@storybook/addon-actions';

export default {
  title: 'Components/VideoItem',
  component: VideoItem,
} as ComponentMeta<typeof VideoItem>;

const Template: ComponentStory<typeof VideoItem> = args => (
  <VideoWrap>
    <VideoItem {...args} />
  </VideoWrap>
);

const SWIPE_TEST = SWIPE_VIDEOS;
export const Default = Template.bind({});
Default.args = SWIPE_TEST.item[0];

const VideoWrap = styled.div`
  width: 640px;
`;
