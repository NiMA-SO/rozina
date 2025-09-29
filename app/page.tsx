import BrandSwiper  from "@/components/home/brand/BrandSwiper ";
import HeroSection from "@/components/home/hero/HeroSection";
import PinkBoxSection from "@/components/home/pinkBox/PinkBoxSection";
import ImageOffersSection from "@/components/home/imageOffers/ImageOffersSection";
import OfferSwiper  from "@/components/home/offerSwiper/OfferSwiper";

export default function Home() {
  return (
    <main>
      <main className="container mx-auto bg-[var(--background)]">
        <HeroSection />
        <ImageOffersSection />
      </main>
      <PinkBoxSection />
      <main className="container mx-auto bg-[var(--background)]">
        <OfferSwiper  />
        <BrandSwiper  />
      </main>
    </main>
  );
}
