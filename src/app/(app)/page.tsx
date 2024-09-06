import Featuredtype from "@/components/Featuredtype";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetDesigner from "@/components/MeetDesginer";
import Sampleimg from "@/components/Sampleimg";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featuredtype />
      <Sampleimg />
      <MeetDesigner />
      <Footer />
    </main>
  );
}
