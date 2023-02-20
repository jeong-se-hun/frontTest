import MewItems from "@/components/home/NewItems";
import ProductSwipe from "@/components/home/ProductSwipe";
import {
  SWIPE_JACKET,
  SWIPE_LIGHTWEIGHT_PUFFER,
} from "@/constants/home/constants";
import MainBanner from "@/components/home/mainBanner";
import RankCarousel from "@/components/rankCarousel/RankCarousel";

export default function Home() {
  return (
    <>
      <MainBanner />
      <MewItems />
      <RankCarousel />
      <ProductSwipe {...SWIPE_JACKET}></ProductSwipe>
      <ProductSwipe {...SWIPE_LIGHTWEIGHT_PUFFER}></ProductSwipe>
    </>
  );
}
