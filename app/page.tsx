import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import InfoSection from "@/components/info";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <InfoSection />
    </div>
  );
}
