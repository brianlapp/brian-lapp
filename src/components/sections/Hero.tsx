
import { ArrowRight, Code, BrainCircuit, Github, Globe, LineChart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1a0f0c] to-[#2a1410]">
    {/* Animated background pattern */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    {/* Animated glow effects */}
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#F97316]/20 rounded-full filter blur-[100px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#ea384c]/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="outline" className="px-3 py-1 border-[#F97316]/20 bg-[#F97316]/5 text-[#F97316]">
            Web Developer & Digital Marketing Expert
          </Badge>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-[#F97316] via-[#ea384c] to-[#FEC6A1] bg-clip-text text-transparent animate-gradient pb-2">
              Hi, I'm Brian Lapp
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Building high-performing websites that convert
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Helping businesses stand out with blazing-fast websites, smart design, and AI-powered solutions that deliver real results.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex items-center text-sm gap-2 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
            <Globe className="w-4 h-4 text-[#F97316]" />
            <span className="text-foreground/80">Web Development</span>
          </div>
          <div className="flex items-center text-sm gap-2 bg-[#ea384c]/10 px-4 py-2 rounded-full border border-[#ea384c]/20">
            <LineChart className="w-4 h-4 text-[#ea384c]" />
            <span className="text-foreground/80">SEO & Conversion</span>
          </div>
          <div className="flex items-center text-sm gap-2 bg-[#FEC6A1]/10 px-4 py-2 rounded-full border border-[#FEC6A1]/20">
            <BrainCircuit className="w-4 h-4 text-[#FEC6A1]" />
            <span className="text-foreground/80">AI Integration</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/work">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10"
            >
              Let's Build Something
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

