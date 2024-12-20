import { useIsMobile } from "@/hooks/use-mobile";

const FloatingBubbles = () => {
  const isMobile = useIsMobile();

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