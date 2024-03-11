import FeaturedCars from "@/components/FeaturedCars";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]0.3">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCars />
    </main>
  );
}
