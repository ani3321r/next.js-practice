import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import GridCards from "@/components/GridCards";
import HeroSection from "@/components/HeroSection";
import ScrAnime from "@/components/ScrAnime";
import SomeClassics from "@/components/SomeClassics";
import TooltipProches from "@/components/TooltipPorches";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]0.3">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCars />
      <ScrAnime />
      <GridCards />
      <SomeClassics />
      <TooltipProches />
      <Footer />
    </main>
  );
}
