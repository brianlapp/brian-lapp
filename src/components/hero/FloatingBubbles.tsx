import { useIsMobile } from "../../hooks/use-mobile";

const FloatingBubbles = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2">
          <div 
            className="relative w-40 h-40"
            style={{
              animation: 'brandingIron 4s infinite ease-in-out',
            }}
          >
            {/* Branding Iron Handle */}
            <div className="absolute right-0 w-32 h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform rotate-45" />
            
            {/* Branding Iron Head */}
            <div className="absolute right-32 w-16 h-16 rounded-full">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-orange-500 via-red-500 to-primary rounded-full blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-primary rounded-full opacity-75" />
              
              {/* Glowing Effect */}
              <div className="absolute inset-[-8px] animate-pulse bg-primary/30 rounded-full blur-xl" />
              
              {/* Heat Waves */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-[-16px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,87,87,0.2) 0%, transparent 70%)',
                    animation: `heatWave ${1.5 + i * 0.5}s infinite ease-in-out`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes brandingIron {
              0%, 100% {
                transform: translate(120%, -50%) rotate(45deg);
              }
              50% {
                transform: translate(20%, -50%) rotate(45deg);
              }
            }
            @keyframes heatWave {
              0%, 100% {
                transform: scale(1);
                opacity: 0.2;
              }
              50% {
                transform: scale(1.5);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${9 + i * 0.5}s`,
            width: isMobile ? `${10 + i * 3}px` : `${20 + i * 6}px`,
            height: isMobile ? `${10 + i * 3}px` : `${20 + i * 6}px`,
            animation: `rise ${10 + i * 0.5}s infinite ease-in-out`,
            bottom: `-${isMobile ? (10 + i * 3) : (20 + i * 6)}px`,
            zIndex: 10,
          }}
        />
      ))}
      <style>
        {`
          @keyframes rise {
            0% {
              transform: translateY(40vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            50% {
              transform: translateY(-100vh) rotate(180deg);
              opacity: 0.4;
            }
            100% {
              transform: translateY(-150vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingBubbles;