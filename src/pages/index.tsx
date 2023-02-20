import MewItems from '@/components/home/NewItems';
import ProductSwipe from '@/components/home/ProductSwipe';
import { SWIPE_JACKET, SWIPE_LIGHTWEIGHT_PUFFER } from '@/constants/home/constants';
import MainBanner from '@/components/home/mainBanner';

export default function Home() {
  return (
    <>
      <MainBanner />
      <MewItems />
      <ProductSwipe {...SWIPE_JACKET}></ProductSwipe>
      <ProductSwipe {...SWIPE_LIGHTWEIGHT_PUFFER}></ProductSwipe>
    </>
  );
}
