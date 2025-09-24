import BrandSwier from "@/components/home/brand/BrandSwier";
import HeroSection from "@/components/home/HeroSection";
import PinkBox from "@/components/home/pinkBox/PinkBox";
import SectionOffer from "@/components/home/SectionOffer";
import SwiperOfferA from "@/components/home/SwiperOfferA";

export default function Home() {
  return (
    <main>
      <main className="container mx-auto bg-[var(--background)]">
        <HeroSection />
        <SectionOffer />
      </main>
      <PinkBox />
      <main className="container mx-auto bg-[var(--background)]">
        <SwiperOfferA />
        <BrandSwier />
      </main>
    </main>
  );
}
