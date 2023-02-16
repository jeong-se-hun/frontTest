import MewItems from '@/components/home/newItems/NewItems';
import ProductSwipe from '@/components/home/ProductSwipe/ProductSwipe';
import { SWIPE_JACKET, SWIPE_LIGHTWEIGHT_PUFFER } from '@/constants/home/constants';

export default function Home() {
  return (
    <>
      <MewItems />
      <ProductSwipe {...SWIPE_JACKET}></ProductSwipe>
      <ProductSwipe {...SWIPE_LIGHTWEIGHT_PUFFER}></ProductSwipe>
    </>
  );
}
