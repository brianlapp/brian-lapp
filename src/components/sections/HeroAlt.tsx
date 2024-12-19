import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroAlt = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50/80">
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
        <div className={`grid ${!isMobile ? 'md:grid-cols-2' : ''} gap-12 items-center`}>
          {/* Content */}
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

          {/* Image Section - Only shown on desktop */}
          {!isMobile && (
            <div className="relative flex items-center justify-center md:justify-end h-full">
              <img
                src="/lovable-uploads/2be2fef7-b365-421f-a6a1-cb22aed9b05f.png"
                alt="Digital Marketing Growth Illustration"
                className="w-full max-w-[500px] h-auto object-contain absolute top-[-4rem] bottom-0"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroAlt;