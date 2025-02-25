
import { ArrowRight, Code, BrainCircuit, Github } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background to-card">
    {/* Neural network background pattern */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    {/* Animated glow effect */}
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary">
              Full Stack AI Developer
            </Badge>
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Hi, I'm Brian Lapp
              <span className="block text-primary text-2xl md:text-3xl mt-3">
                Building intelligent applications that solve real problems
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specializing in full-stack development with AI integration. I design and build intelligent systems that transform data into insights and actions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-muted-foreground">
            <div className="flex items-center text-sm gap-1 bg-card px-3 py-1 rounded-full">
              <BrainCircuit className="w-4 h-4 text-primary" />
              <span>AI/ML Engineering</span>
            </div>
            <div className="flex items-center text-sm gap-1 bg-card px-3 py-1 rounded-full">
              <Code className="w-4 h-4 text-primary" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center text-sm gap-1 bg-card px-3 py-1 rounded-full">
              <Github className="w-4 h-4 text-primary" />
              <span>Open Source Contributor</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="/work">
              <Button size="lg" className="w-full sm:w-auto text-lg">
                View My Work <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-primary/50 text-primary hover:bg-primary/10">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-[40px] opacity-30"></div>
            <img
              src="/lovable-uploads/1d279200-b1bc-4eab-acd3-f509a876f64e.png"
              alt="Brian Lapp"
              className="rounded-2xl object-cover w-full h-full relative z-10"
            />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
