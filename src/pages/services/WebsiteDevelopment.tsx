import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Globe, Server, Shield, FileText, Image, Map, MessageSquare, CheckCircle2, Beaker } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Domain Registration",
      description: "We'll guide you through purchasing the perfect domain name that reflects your business."
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
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Content Creation",
      description: "Professional content writing tailored to your business needs."
    },
    {
      icon: <Image className="w-12 h-12 text-primary" />,
      title: "Stock Media",
      description: "High-quality stock images to enhance your website's visual appeal."
    },
    {
      icon: <Map className="w-12 h-12 text-primary" />,
      title: "Map & Contact Integration",
      description: "Interactive map and user-friendly contact form included."
    }
  ];

  const process = [
    "Consultation to understand your needs and goals",
    "Domain registration, hosting, and SSL setup",
    "Content writing and visual design tailored to your business",
    "A polished, fully functional website ready to impress"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Website Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Beaker className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <span className="text-sm font-medium text-primary">Web Development Lab</span>
                </div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Website Development
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your website is the cornerstone of your online presence—it's where potential customers go to learn about your business, explore your services, and connect with you.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Website Project
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Website Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="h-8 bg-gray-100 rounded-t-lg flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <Globe className="w-16 h-16 text-gray-300" />
                    </div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">What's Included in Our Website Development Service</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Website Design */}
          <section className="mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6">Custom Website Design</h2>
            <p className="text-lg text-gray-600 mb-6">
              A clean, modern design customized to your business, featuring up to 5 pages:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Home", "Services Pages (x3)", "Contact"].map((page, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{page}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">The Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="text-primary font-bold text-4xl mb-4">{index + 1}</div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Get Online Today!</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Let us help you establish your online presence with a website that works as hard as you do.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us Now
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