import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Vision from "./components/Vision";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Vision />
      <Features />
      <Team />
      <ContactUs />
    </div>
  );
}
