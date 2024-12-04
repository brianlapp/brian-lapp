import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2, BarChart3, Globe, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Website Development",
      description: "Custom-built, responsive websites that convert visitors into customers.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Strategic social media management to build your brand and engage your audience.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "SEO & Analytics",
      description: "Data-driven SEO strategies to improve your visibility and track success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Small Business with Digital Marketing Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help small businesses thrive in the digital world with comprehensive marketing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your small business needs to succeed online, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Digital Marketing Team"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SureSites?</h2>
                <div className="space-y-4">
                  {[
                    "Tailored strategies for small businesses",
                    "Comprehensive digital marketing solutions",
                    "Dedicated support team",
                    "Proven track record of success",
                    "Affordable monthly plans",
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="mt-8" size="lg">
                    Schedule a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses that have grown with our digital marketing expertise.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 border-white"
            >
              Get Your Free Digital Marketing Analysis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SureSites</h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: hello@suresites.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SureSites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;