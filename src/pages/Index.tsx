import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import Footer from "../components/Footer";
import ProjectGrid from "../components/sections/ProjectGrid";
import { ArrowRight, BrainCircuit, Globe, LineChart, Rocket } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

type FeatureProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const Feature = ({ title, description, icon: Icon }: FeatureProps) => (
  <div className="p-6 rounded-lg bg-card border border-border">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-medium mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl">
                High-performing websites and digital solutions that drive real business results
              </p>
            </div>
            <Link to="/work" className="inline-flex items-center text-primary hover:text-primary/80 mt-4 md:mt-0">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <ProjectGrid />
        </div>
      </section>
      
      {/* What I Do */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Solutions That Drive Growth</h2>
            <p className="text-muted-foreground">
              From blazing-fast websites to AI-powered automation, I build digital solutions that help businesses scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature 
              title="Web Development" 
              description="Custom, high-performing websites built with modern technologies and optimized for conversion."
              icon={Globe}
            />
            <Feature 
              title="SEO & Optimization" 
              description="Data-driven strategies to improve visibility, user experience, and conversion rates."
              icon={LineChart}
            />
            <Feature 
              title="AI Integration" 
              description="Smart automation and AI-powered solutions to streamline your business operations."
              icon={BrainCircuit}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg">
                Explore Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to build a site that works as hard as you do?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a digital presence that helps your business stand out and scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary">
                  See My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
