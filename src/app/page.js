import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import Vision from "./components/Vision";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import EarthTechMission from "./components/EarthTechMission";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <Vision />
      {/* <Slider />/ */}
      <WhatWeDo />

      <Features />

      <EarthTechMission />

      <Team />
      <ContactUs />
    </div>
  );
}
