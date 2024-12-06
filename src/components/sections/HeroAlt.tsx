import { ArrowRight, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroAlt = () => (
  <section className="relative min-h-[90vh] py-32 lg:py-40 flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50/80">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
    
    {/* Floating bubbles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i * 0.8}s`,
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            animation: `rise ${12 + i * 0.8}s infinite ease-in-out`,
            bottom: `-${20 + i * 10}px`,
            zIndex: 10,
          }}
        />
      ))}
    </div>
    
    <style>
      {`
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40vh) rotate(180deg);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-80vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}
    </style>
    
    <div className="absolute right-0 top-0 -mt-24 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute left-0 bottom-0 -mb-24 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
    
    <div className="container relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit mx-auto">
            <Beaker className="w-4 h-4 animate-pulse" />
            Digital Marketing Solutions
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Grow Your Small Business
              </span>
              <br />
              <span className="text-slate-800">
                with Digital Marketing Excellence
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
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