import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroAlt = () => (
  <section className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50" />
    
    <div className="container max-w-6xl mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="relative z-10 flex flex-col items-end text-right">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Grow Your Small Business
              </span>
              <br />
              <span className="text-gray-900">
                with Digital Marketing Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help small businesses thrive in the digital world with comprehensive marketing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Link to="/services">
                <Button size="lg" className="text-lg">
                  View Our Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="relative z-10">
          <img
            src="/lovable-uploads/ff0015e7-a8be-48bb-8eaf-c13b17ebf62f.png"
            alt="Digital Marketing Illustration"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroAlt;