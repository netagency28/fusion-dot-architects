import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { AnimatedSection } from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import StudioMap from "@/components/StudioMap";
import AboutServices from "@/components/AboutServices";
import SelectedWork from "@/components/SelectedWork";
import OurProcessSection from "@/components/OurProcessSection";
import BuildCTASection from "@/components/BuildCTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <AboutServices />
      <SelectedWork />
      <OurProcessSection />
      <BuildCTASection />
      {/* <AnimatedSection className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </AnimatedSection> */}
      <StudioMap />
      <Footer />
    </div>
  );
}