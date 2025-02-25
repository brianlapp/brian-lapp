
import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import Footer from "../components/Footer";
import ProjectGrid from "../components/sections/ProjectGrid";
import { ArrowRight, BrainCircuit, Globe, LineChart, Camera, Video, Palette, Plus } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

type ServiceProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const Service = ({ title, description, icon: Icon }: ServiceProps) => (
  <div className="relative p-6 rounded-lg bg-card border border-border group hover:border-primary/50 transition-all">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-medium mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="flex items-center text-primary">
      <span className="mr-2">Read more</span>
      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
    </div>
    
    {/* Y2K-inspired decorative elements */}
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full blur-sm animate-pulse" />
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: "1s" }} />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* About Me Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a freelance web developer and digital marketing expert, I specialize in creating 
              high-performance websites that drive results. With a focus on clean design and 
              user experience, I help small businesses establish a strong online presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only look great but also perform exceptionally well.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Y2K-inspired background elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-[100px] animate-pulse-slow" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Recent Work</h2>
              <p className="text-muted-foreground max-w-2xl">
                Crafting digital experiences that propel small businesses forward – your vision, our expertise, limitless possibilities.
              </p>
            </div>
            <Link to="/work" className="inline-flex items-center text-primary hover:text-primary/80 mt-4 md:mt-0">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <ProjectGrid />
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
              <div className="py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
                My Services
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Solutions for Small Business Success</h2>
            <p className="text-muted-foreground">
              From blazing-fast websites to creative content, I deliver comprehensive digital solutions that help local businesses thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Service 
              title="Custom Web Design & Development" 
              description="One-of-a-kind websites that stand out in the digital crowd, built with your favorite CMS platform."
              icon={Globe}
            />
            <Service 
              title="Photography & Videography" 
              description="Professional visual content that showcases your products and services in the best light."
              icon={Camera}
            />
            <Service 
              title="UI/UX Design" 
              description="Creating seamless user experiences that are visually stunning and optimized for maximum satisfaction."
              icon={Palette}
            />
            <Service 
              title="Website Makeover" 
              description="Breathe new life into your online presence with strategic redesigns that captivate and convert."
              icon={BrainCircuit}
            />
            <Service 
              title="SEO Optimization" 
              description="Improve your search rankings and attract more qualified traffic with data-driven SEO strategies."
              icon={LineChart}
            />
            <Service 
              title="Video Production" 
              description="Transform your story into captivating visuals with professional videography and drone footage."
              icon={Video}
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Me */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Why Choose Me?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                As a solo freelancer, I offer personalized service and attention to detail that you won't find at a larger agency. I'm dedicated to delivering high-quality work that exceeds your expectations and helps you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/10">
                    View My Work
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
      
      <Footer />
    </div>
  );
};

export default Index;
