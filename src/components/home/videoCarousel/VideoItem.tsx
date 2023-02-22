import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import ModalPortal from '@/components/common/ModalPortal';
import VideoModal from '@/components/home/videoCarousel/VideoModal';
import { useState } from 'react';

type VideosItemProps = {
  title: string;
  description: string;
  videoThumbnail: StaticImageData;
  videoUrl: string;
};

export default function VideoItem(VideoInfo: VideosItemProps) {
  const [modalOn, setModalOn] = useState<boolean>(false);

  const HandleModalClose = () => setModalOn(false);
  const HandleModalOpen = () => setModalOn(true);

  return (
    <>
      <VideoItemWrap onClick={HandleModalOpen}>
        <VideoIteThumbnail>
          <Image src={VideoInfo.videoThumbnail} alt={VideoInfo.title + '섬네일'}></Image>
          <PlayButton />
        </VideoIteThumbnail>
        <VideoItemTitle>{VideoInfo.title}</VideoItemTitle>
        <VideoItemDescription>{VideoInfo.description}</VideoItemDescription>
      </VideoItemWrap>
      {modalOn && (
        <ModalPortal selector="#modal-root">
          <VideoModal videoUrl={VideoInfo.videoUrl} onClose={HandleModalClose} />
        </ModalPortal>
      )}
    </>
  );
}

const VideoItemWrap = styled.div`
  cursor: pointer;
`;
const VideoIteThumbnail = styled.div`
  position: relative;
  & img {
    height: auto;
  }
`;
const PlayButton = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: block;
  width: 50px;
  height: 50px;
  background-color: #ffffffd5;
  border-radius: 50%;

  &::after {
    content: '';
    display: inline-block;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 20px solid #616060;
    position: absolute;
    left: 36%;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
const VideoItemTitle = styled.h3`
  display: -webkit-box;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  margin-top: 12px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
const VideoItemDescription = styled.span`
  display: -webkit-box;
  width: 80%;
  margin: 0 auto;
  margin-top: 12px;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 14px;
`;
