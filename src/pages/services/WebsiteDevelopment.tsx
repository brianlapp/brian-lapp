
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Globe, Server, Shield, FileText, Image, Map, MessageSquare, CheckCircle2, Beaker, Code, Database, Browser } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Domain Registration",
      description: "I'll guide you through purchasing the perfect domain name that reflects your business."
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Hosting Provider Setup",
      description: "Reliable hosting setup to keep your website secure, fast, and accessible 24/7."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "SSL Certificate Setup",
      description: "SSL certificates included to ensure your site is safe and trusted."
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Content Management",
      description: "Easy-to-use content management system for updating your website."
    },
    {
      icon: <Browser className="w-12 h-12 text-primary" />,
      title: "Responsive Design",
      description: "Your website will look great on all devices - desktop, tablet, and mobile."
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Custom Development",
      description: "Tailored functionality to meet your specific business needs."
    }
  ];

  const process = [
    "Initial consultation to understand your goals",
    "Design and wireframe approval",
    "Development and content integration",
    "Testing and launch preparation"
  ];

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Website Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-[#1a1f2c] p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <span className="text-sm font-medium text-primary">Web Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Website Development
                </h1>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  I create custom websites that not only look great but drive results for your business. From simple landing pages to complex web applications, I'll help you establish a strong online presence.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    Start Your Website Project
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Website Preview Mock */}
                <div className="bg-[#0f172a] rounded-lg shadow-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                      <Browser className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Your Website</h3>
                      <p className="text-gray-200">Professional • Modern • Effective</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-white/10"
                      />
                    ))}
                  </div>
                  <div className="h-2 w-3/4 bg-gradient-to-r from-primary to-primary/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">What's Included</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-8 bg-[#1a1f2c] rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Process */}
          <section className="mb-16 bg-[#1a1f2c] rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">The Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#0f172a] p-6 rounded-lg shadow-lg border border-white/10 hover:border-white/20 transition-colors h-full">
                    <div className="text-primary font-bold text-4xl mb-4">{index + 1}</div>
                    <p className="text-gray-200">{step}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-[#1a1f2c] rounded-xl p-12 border border-white/20">
            <h2 className="text-3xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Let's create a website that works as hard as you do. I'll help you establish a professional online presence that drives results for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Let's Discuss Your Project
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;

