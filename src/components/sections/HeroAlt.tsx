import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroAlt = () => (
  <section className="relative min-h-[90vh] py-32 lg:py-40 flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50/80">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
    <div className="absolute right-0 top-0 -mt-24 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute left-0 bottom-0 -mb-24 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
    
    <div className="container relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col gap-12 items-center">
        {/* Bottom - Content */}
        <div className="flex flex-col space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Marketing Solutions
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Grow Your Small Business
              </span>
              <br />
              <span className="text-gray-900">
                with Digital Marketing Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We help small businesses thrive in the digital world with comprehensive marketing solutions tailored to your needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="text-lg group">
                View Our Services 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex -space-x-4">
              <img
                src="/lovable-uploads/62644382-2cd2-40d0-ba6a-97167ed84ad7.png"
                alt="Client Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/lovable-uploads/7d075a52-1332-4fb3-a7c2-1ee21e93afd8.png"
                alt="Client Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/lovable-uploads/add6edef-3b4a-4de3-aea2-016876855066.png"
                alt="Client Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">500+</span> Happy Clients
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroAlt;