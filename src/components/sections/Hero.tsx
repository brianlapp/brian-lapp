
import { ArrowRight, Code, BrainCircuit, Github, Globe, LineChart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-card pt-24">
    {/* Neural network background pattern */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    {/* Animated glow effect */}
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary">
            <Code className="w-3 h-3 md:w-4 md:h-4 mr-1" /> Web Developer & Digital Marketing Expert
          </Badge>
        </div>
        
        <div>
          <h1 className="text-[3.5rem] md:text-[7rem] lg:text-[9rem] font-bold mb-4 md:mb-8 text-foreground leading-[0.9] tracking-tight">
            Brian Lapp
            <span className="block text-primary text-2xl md:text-4xl mt-4 md:mt-6">
              Building high-performing websites that convert
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto max-w-2xl">
            Helping businesses stand out with blazing-fast websites, smart design, and AI-powered solutions that deliver real results.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 text-muted-foreground mt-6 md:mt-10 justify-center">
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

        <div className="flex flex-col sm:flex-row gap-3 pt-6 md:pt-10 justify-center">
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
    </div>
  </section>
);

export default Hero;
