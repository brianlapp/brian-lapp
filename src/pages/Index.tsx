import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import HeroAlt from "@/components/sections/HeroAlt";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  // Set to true to use the alternative Hero design
  const useAltHero = true;

  return (
    <div className="min-h-screen">
      <Navigation />
      {useAltHero ? <HeroAlt /> : <Hero />}
      <Services />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;