import BrandSwier from "@/components/home/brand/BrandSwier";
import HeroSection from "@/components/home/HeroSection";
import SectionOffer from "@/components/home/SectionOffer";
import SwiperOfferA from "@/components/home/SwiperOfferA";

export default function Home() {
  return (
    <main className="container mx-auto bg-[#ffffff]">
      <HeroSection />
      <SectionOffer />
      <SwiperOfferA />
      <BrandSwier />
    </main>
  );
}
