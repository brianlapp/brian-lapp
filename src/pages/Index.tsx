import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import Footer from "../components/Footer";
import ProjectGrid from "../components/sections/ProjectGrid";
import { ArrowRight, BrainCircuit, Globe, LineChart, Camera, Video, Palette, Plus, PenTool, Mail, ScrollText, Share2, Printer } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

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
              About Me
            </h2>
            <p className="text-2xl leading-relaxed text-muted-foreground">
              As a freelance web developer and digital marketing expert, I specialize in creating 
              high-performance websites that drive results. With a focus on clean design and 
              user experience, I help small businesses establish a strong online presence.
            </p>
            <p className="text-2xl leading-relaxed text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only look great but also perform exceptionally well.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] animate-pulse-slow" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Recent Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Crafting digital experiences that propel small businesses forward – your vision, our expertise, limitless possibilities.
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
                My Services
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Solutions for Small Business Success
            </h2>
            <p className="text-xl text-muted-foreground">
              From blazing-fast websites to creative content, I deliver comprehensive digital solutions that help local businesses thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Service 
              title="Custom Web Design & Development" 
              description="One-of-a-kind websites that stand out in the digital crowd, built with your favorite CMS platform."
              icon={Globe}
              href="/services/website-development"
            />
            <Service 
              title="Brand & Logo Design" 
              description="Create a memorable brand identity that truly represents your business and resonates with your audience."
              icon={PenTool}
              href="/services/branding-and-logo"
            />
            <Service 
              title="Professional Email Setup" 
              description="Establish credibility with professional email addresses and powerful collaboration tools."
              icon={Mail}
              href="/services/email-setup"
            />
            <Service 
              title="Newsletter Management" 
              description="Build and grow your audience with engaging newsletter campaigns that drive results."
              icon={ScrollText}
              href="/services/newsletter-setup"
            />
            <Service 
              title="Social Media Branding" 
              description="Establish a strong presence across key social platforms with cohesive branding and strategy."
              icon={Share2}
              href="/services/social-media"
            />
            <Service 
              title="Print Design" 
              description="Professional marketing materials that extend your brand to the physical world."
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
                Why Choose Me?
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed mb-10">
                As a solo freelancer, I offer personalized service and attention to detail that you won't find at a larger agency. I'm dedicated to delivering high-quality work that exceeds your expectations and helps you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 transition-colors">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/10"
                  >
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-[60px] opacity-30"></div>
                <img
                  src="/lovable-uploads/1d279200-b1bc-4eab-acd3-f509a876f64e.png"
                  alt="Brian Lapp"
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
