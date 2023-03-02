import MewItems from '@/components/home/newItems/NewItems';
import ProductSwipe from '@/components/home/ProductSwipe/ProductSwipe';
import {
  SWIPE_JACKET,
  SWIPE_LIGHTWEIGHT_PUFFER,
  SWIPE_VIDEOS,
} from '@/constants/home/constants';
import MainBanner from '@/components/home/mainBanner/mainBanner';
import RankCarousel from '@/components/rankCarousel/RankCarousel';
import VideosCarousel from '@/components/home/videoCarousel/VideoCarousel';
import MoreProducts from '@/components/moreProducts/MoreProducts';

export default function Home() {
  return (
    <>
      <MainBanner />
      <MewItems />
      <RankCarousel />
      <ProductSwipe {...SWIPE_JACKET}></ProductSwipe>
      <ProductSwipe {...SWIPE_LIGHTWEIGHT_PUFFER}></ProductSwipe>
      <MoreProducts />
      <VideosCarousel {...SWIPE_VIDEOS}></VideosCarousel>
    </>
  );
}
