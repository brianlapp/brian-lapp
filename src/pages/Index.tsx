
import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import Footer from "../components/Footer";
import ProjectGrid from "../components/sections/ProjectGrid";
import { ArrowRight, BrainCircuit, Globe, LineChart, Camera, Video, Palette, Plus, PenTool, Mail, ScrollText, Share2, Printer } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

type ServiceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const Service = ({ title, description, icon: Icon, href }: ServiceProps & { href: string }) => (
  <Link to={href} className="block">
    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border hover:border-primary/50 transition-all duration-500">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
        <div className="flex items-center text-primary">
          <span className="mr-2 font-medium">Learn more</span>
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </Link>
);

const Index = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animateNodes = () => {
      const svg = svgRef.current;
      if (!svg) return;

      const nodes = svg.querySelectorAll('.node');
      nodes.forEach((node) => {
        const radius = 30 + Math.random() * 40;
        const speed = 20000 + Math.random() * 10000;
        const startAngle = Math.random() * Math.PI * 2;
        
        const centerX = Math.random() * 140;
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* About Me Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative z-10">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Local Business Web Expert
            </h2>
            <p className="text-2xl leading-relaxed text-muted-foreground">
              I specialize in helping small businesses like yours succeed online. With years of experience 
              in web development and digital marketing, I create high-performance websites that attract 
              local customers and drive real business growth.
            </p>
            <p className="text-2xl leading-relaxed text-muted-foreground">
              My approach combines technical expertise with practical business solutions. Every website 
              I build is designed to generate leads, improve your local visibility, and make it easy 
              for customers to connect with your business.
            </p>
          </div>
        </div>
      </section>

      {/* SVG Separator */}
      <div className="relative h-[40vh] overflow-hidden bg-card">
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
      </div>

      {/* Featured Work */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] animate-pulse-slow" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                See how local businesses like yours are growing with professional websites that attract customers and drive sales.
              </p>
            </div>
            <Link to="/work" className="group inline-flex items-center text-primary hover:text-primary/80 mt-6 md:mt-0">
              <span className="text-lg font-medium mr-2">View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <ProjectGrid />
        </div>
      </section>
      
      {/* Services */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-6">
              <div className="py-1.5 px-6 rounded-full bg-primary/10 text-primary text-lg font-medium">
                Digital Solutions
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Essential Tools for Business Growth
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything your small business needs to succeed online - from fast-loading websites to professional branding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Service 
              title="Custom Website Development" 
              description="Get a professional website that loads fast, ranks well in local searches, and turns visitors into customers."
              icon={Globe}
              href="/services/website-development"
            />
            <Service 
              title="Brand & Logo Design" 
              description="Stand out in your local market with professional branding that builds trust and recognition."
              icon={PenTool}
              href="/services/branding-and-logo"
            />
            <Service 
              title="Business Email Setup" 
              description="Look professional with custom email addresses that match your domain name (you@yourbusiness.com)."
              icon={Mail}
              href="/services/email-setup"
            />
            <Service 
              title="Email Marketing" 
              description="Keep customers coming back with professional newsletters and automated email campaigns."
              icon={ScrollText}
              href="/services/newsletter-setup"
            />
            <Service 
              title="Social Media Setup" 
              description="Attract local customers with professional profiles on Facebook, Instagram, and LinkedIn."
              icon={Share2}
              href="/services/social-media"
            />
            <Service 
              title="Print Materials" 
              description="Get professional business cards, brochures, and marketing materials that match your online brand."
              icon={Printer}
              href="/services/print-media"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Me */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Personal Service, Professional Results
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed mb-10">
                As your dedicated web partner, I provide the personal attention and expertise your business needs. 
                No confusing agency teams or complex processes - just direct communication and fast results that help 
                your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 transition-colors">
                    Start Growing Online <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/10"
                  >
                    View Success Stories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-[60px] opacity-30"></div>
                <img
                  src="/lovable-uploads/1d279200-b1bc-4eab-acd3-f509a876f64e.png"
                  alt="Brian Lapp - Web Developer for Small Businesses"
                  className="rounded-3xl object-cover w-full h-full relative z-10 transform hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary to-accent opacity-20 z-0 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

