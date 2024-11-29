import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Monitor, ShoppingCart, Sparkles, Wrench, Code, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom websites that perfectly align with your brand and goals, built with modern technologies.",
  },
  {
    icon: Mail,
    title: "Email Marketing Solutions",
    description: "Strategic email campaigns that drive engagement and conversions using platforms like Mailchimp and Klaviyo.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Professional online stores built with Shopify or WooCommerce that drive sales and growth.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Regular updates, bug fixes, and performance monitoring to keep your site running smoothly.",
  },
  {
    icon: Code,
    title: "Custom Web Features",
    description: "Integration with CRMs, booking systems, and other third-party tools to enhance functionality.",
  },
  {
    icon: PaintBucket,
    title: "Branding & Identity",
    description: "Complete branding solutions including logo design, color palettes, and brand guidelines.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white animate-fade-down">
              We Build Websites That
              <span className="text-accent block mt-2">Drive Results</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 animate-fade-up">
              Transform your online presence with our expert web design and development services. 
              We create stunning, functional websites that help your business grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/work">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#0EA5E9] opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
                  <service.icon className="h-12 w-12 text-[#0EA5E9]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#0EA5E9] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#ffffff" d="M47.5,-73.7C62.3,-67.1,75.7,-55.9,84.6,-41.5C93.4,-27.1,97.7,-9.4,94.9,7.2C92.2,23.8,82.4,39.2,70.1,51.4C57.8,63.5,43,72.3,27.4,76.3C11.7,80.3,-4.9,79.5,-21.1,75.3C-37.3,71.2,-53.1,63.7,-65.3,52C-77.5,40.3,-86.1,24.4,-87.4,7.8C-88.7,-8.8,-82.7,-26.2,-72.6,-40C-62.4,-53.8,-48.1,-64,-34,-69.7C-19.8,-75.4,-5.9,-76.5,5.2,-84.8C16.3,-93.1,32.6,-108.5,47.5,-73.7Z" transform="translate(100 100)" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto relative">
              Let's create something amazing together. Our team is ready to help you achieve your digital goals.
            </p>
            <Button size="lg" variant="secondary" className="relative">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
