import { useIsMobile } from "../../hooks/use-mobile";
import FloatingBubbles from "../hero/FloatingBubbles";
import HeroContent from "../hero/HeroContent";
import HeroBackground from "../hero/HeroBackground";

const HeroAlt = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/10 to-gray-50/80">
      <HeroBackground />
      <FloatingBubbles />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        <div className={`grid ${!isMobile ? 'md:grid-cols-2' : ''} gap-12 items-center`}>
          <HeroContent isMobile={isMobile} />

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