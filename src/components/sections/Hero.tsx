import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Grow Your Small Business with Digital Marketing Excellence
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We help small businesses thrive in the digital world with comprehensive marketing solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;