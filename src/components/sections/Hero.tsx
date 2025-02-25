
import { ArrowRight, Code, BrainCircuit, Github, Globe, LineChart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { useEffect, useRef } from "react";

const Hero = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animateNodes = () => {
      const svg = svgRef.current;
      if (!svg) return;

      const nodes = svg.querySelectorAll('.node');
      nodes.forEach((node) => {
        const radius = 30 + Math.random() * 40; // Increased radius range
        const speed = 20000 + Math.random() * 10000;
        const startAngle = Math.random() * Math.PI * 2;
        
        // Expanded center points for wider distribution
        const centerX = Math.random() * 100;
        const centerY = Math.random() * 100;
        const x = centerX + radius * Math.cos(startAngle);
        const y = centerY + radius * Math.sin(startAngle);
        
        const currentX = parseFloat(node.getAttribute('cx') || '0');
        const currentY = parseFloat(node.getAttribute('cy') || '0');
        
        node.animate([
          { cx: currentX + '%', cy: currentY + '%' },
          { cx: x + '%', cy: y + '%' }
        ], {
          duration: speed,
          fill: 'forwards',
          easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        });
      });
    };

    const interval = setInterval(animateNodes, 25000);
    animateNodes();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background to-card pt-24">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary">
                <Code className="w-3 h-3 md:w-4 md:h-4 mr-1" /> Web Developer & Digital Marketing Expert
              </Badge>
            </div>
            
            <div>
              <h1 className="text-[3.5rem] md:text-[7rem] lg:text-[8rem] font-bold mb-4 md:mb-8 text-foreground leading-[0.9] tracking-tight">
                Brian Lapp
                <span className="block text-primary text-2xl md:text-4xl mt-4 md:mt-6">
                  Building high-performing websites that convert
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Helping businesses stand out with blazing-fast websites, smart design, and AI-powered solutions that deliver real results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 text-muted-foreground mt-6 md:mt-10">
              <div className="flex items-center text-xs md:text-sm gap-1 bg-card px-3 py-1 rounded-full">
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center text-xs md:text-sm gap-1 bg-card px-3 py-1 rounded-full">
                <LineChart className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>SEO & Conversion</span>
              </div>
              <div className="flex items-center text-xs md:text-sm gap-1 bg-card px-3 py-1 rounded-full">
                <BrainCircuit className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>AI Integration</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 md:pt-10">
              <Link to="/work">
                <Button size="lg" className="w-full sm:w-auto text-base md:text-lg">
                  View My Work <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg border-primary/50 text-primary hover:bg-primary/10">
                  Let's Build Something
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-[140%] aspect-square -translate-x-[20%]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-[60px] opacity-30" />
              <svg 
                ref={svgRef}
                className="w-full h-full relative z-10"
                viewBox="0 0 140 100"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255,87,87,0.2))' }}
              >
                {Array.from({ length: 35 }).map((_, i) => (
                  <g key={i}>
                    <circle
                      className="node"
                      cx={`${Math.random() * 140}%`}
                      cy={`${Math.random() * 100}%`}
                      r={0.6 + Math.random() * 0.4}
                      fill={i % 2 ? '#ff5757' : '#10b981'}
                      opacity={0.4 + Math.random() * 0.2}
                    />
                    {Array.from({ length: 3 }).map((_, j) => (
                      <path
                        key={j}
                        d={`M ${Math.random() * 140} ${Math.random() * 100} Q ${70 + Math.random() * 40} ${50 + Math.random() * 30} ${Math.random() * 140} ${Math.random() * 100}`}
                        stroke={j % 2 ? '#ff5757' : '#10b981'}
                        strokeWidth="0.15"
                        fill="none"
                        opacity="0.1"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.05;0.15;0.05"
                          dur={`${4 + Math.random() * 3}s`}
                          repeatCount="indefinite"
                          begin={`${Math.random() * 4}s`}
                        />
                      </path>
                    ))}
                  </g>
                ))}
              </svg>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 z-0 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

