import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

import x from '/public/images/common/x.png';

type VideoModalProps = {
  onClose: () => void;
  videoUrl: string;
};

export default function VideoModal(props: VideoModalProps) {
  return (
    <VideoModalWrap>
      <DimmedLayer onClick={props.onClose} />
      <VideoWrap>
        <ReactPlayer url={props.videoUrl} playing={true} controls={true} />
        <VideoModalClose onClick={props.onClose}>
          <Image src={x} alt={'닫기 아이콘'}></Image>
        </VideoModalClose>
      </VideoWrap>
    </VideoModalWrap>
  );
}

const VideoModalWrap = styled.div``;
const DimmedLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000be;
  z-index: 99;
`;
const VideoWrap = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 100;
`;
const VideoModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: -30px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  vertical-align: middle;
  transform: translate(0, -50%);
  border-radius: 50%;
  border: none;
  color: #6e6e6e;
  background-color: #fff;
  cursor: pointer;

  & img {
    max-width: 40%;
    max-height: 40%;
  }
`;
