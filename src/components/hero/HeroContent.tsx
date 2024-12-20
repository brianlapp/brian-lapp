import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeroContentProps = {
  isMobile: boolean;
};

const HeroContent = ({ isMobile }: HeroContentProps) => (
  <div className="flex flex-col space-y-8">
    <div>
      <h1 className={`text-3xl xs:text-4xl ${isMobile ? 'text-center px-2' : ''} md:text-5xl lg:text-6xl font-bold leading-tight mb-6`}>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Grow Your Small Business
        </span>
        <br />
        <span className="text-slate-800">
          with Digital Marketing Excellence
        </span>
      </h1>
      <p className={`text-lg text-slate-600 leading-relaxed ${isMobile ? 'text-center px-4' : ''}`}>
        We help small businesses thrive in the digital world with comprehensive marketing solutions tailored to your needs.
      </p>
    </div>

    <div className={`flex flex-col sm:flex-row ${isMobile ? 'flex-col items-stretch gap-4' : 'gap-4'} ${isMobile ? 'justify-center' : ''}`}>
      <Link to="/services" className={`${isMobile ? 'w-full' : ''}`}>
        <Button size="lg" className="text-lg group w-full sm:w-auto">
          View Our Services 
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
      <Link to="/contact" className={`${isMobile ? 'w-full' : ''}`}>
        <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto">
          Contact Us
        </Button>
      </Link>
    </div>
  </div>
);

export default HeroContent;