import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroAlt = () => (
  <section className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50" />
    
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column - Content */}
        <div className="relative z-10 max-w-xl">
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Right Column - SVG Illustration */}
        <div className="relative z-10 lg:ml-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-xl" />
            <div className="relative bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-xl p-16 shadow-xl flex items-center justify-center">
              <Building2 className="w-full h-full text-primary/80 max-w-[400px]" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroAlt;