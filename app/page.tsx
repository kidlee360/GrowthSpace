import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import InfoSection from "@/components/info";
import ReviewSection from "@/components/review";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <InfoSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}
