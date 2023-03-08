import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface HotItemProps {
  title: string;
  image: string;
  price: string;
}

export default function HotItem({ title, image, price }: HotItemProps) {
  return (
    <HotItemContainer>
      <Link href="/">
        <Thumb>
          <Image src={image} alt={title} width={127} height={169} />
        </Thumb>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </Link>
    </HotItemContainer>
  );
}

const HotItemContainer = styled.li`
  margin-right: 12px;
`;

const Thumb = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  position: relative;
  display: block;
`;

const Name = styled.div`
  margin-top: 12px;
  height: 36px;
  color: #222;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
`;

const Price = styled.em`
  margin-top: 8px;
  color: #858585;
  font-size: 12px;
  font-family: 'Manrope', 'Noto Sans KR', sans-serif;
  font-weight: 400;
`;
