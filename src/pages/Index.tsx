import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/

Let's update the design to adjust the services, change the accent color, and add creative SVG elements while maintaining the professional look.

<lov-code>
We'll update the Index page to reflect these changes:

<lov-write file_path="src/pages/Index.tsx">
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Monitor, ShoppingCart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom websites that perfectly align with your brand and goals.",
  },
  {
    icon: Mail,
    title: "Email Marketing Solutions",
    description: "Strategic email campaigns that drive engagement and conversions.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Professional online stores that drive sales and growth.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative SVG Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 -z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#0EA5E9" d="M44.7,-76.4C58.8,-69.2,71.8,-57.9,79.6,-43.9C87.4,-29.9,90,-13.2,87.6,2.4C85.2,18,77.8,32.5,68.4,45.3C59,58.1,47.6,69.2,34.1,75.6C20.6,82,5,83.7,-10.2,81.1C-25.4,78.5,-40.2,71.6,-52.7,62.1C-65.2,52.6,-75.4,40.4,-79.9,26.4C-84.4,12.4,-83.2,-3.4,-78.7,-17.8C-74.2,-32.1,-66.4,-45,-55.6,-53.8C-44.8,-62.6,-31,-67.3,-17.8,-76.5C-4.6,-85.7,8,-99.5,22.9,-97.9C37.8,-96.4,54.9,-79.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 -z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#0EA5E9" d="M39.3,-65.6C54.4,-60.9,72.6,-56.3,81.5,-44.7C90.4,-33.1,90,-14.4,85.9,2.9C81.8,20.2,74.1,36.1,63.7,48.7C53.3,61.3,40.3,70.7,25.9,75.4C11.5,80.2,-4.3,80.4,-19.6,76.6C-34.9,72.8,-49.8,65,-61.1,53.5C-72.4,41.9,-80.2,26.6,-83.7,9.8C-87.2,-7,-86.4,-25.4,-79.1,-40.5C-71.8,-55.7,-58,-67.7,-43,-71.8C-28,-75.9,-11.7,-72.1,1.3,-74.4C14.3,-76.7,28.6,-85.1,39.3,-65.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-down">
              We Build Websites That
              <span className="text-[#0EA5E9] block mt-2">Drive Results</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 animate-fade-up">
              Transform your online presence with our expert web design and development services. 
              We create stunning, functional websites that help your business grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7]">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
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
          <div className="grid md:grid-cols-3 gap-8">
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