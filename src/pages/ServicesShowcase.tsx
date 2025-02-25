import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { 
  Globe, 
  PenTool, 
  Mail, 
  Megaphone, 
  ScrollText, 
  Printer 
} from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-12 h-12 text-primary" />,
    title: "Branding & Logo Design",
    description: "Create a memorable brand identity that sets you apart from competitors.",
    link: "/services/branding-and-logo"
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Website Development",
    description: "Custom-built, responsive websites that convert visitors into customers.",
    link: "/services/website-development"
  },
  {
    icon: <Mail className="w-12 h-12 text-primary" />,
    title: "Email Setup",
    description: "Professional email solutions with Google Workspace integration.",
    link: "/services/email-setup"
  },
  {
    icon: <ScrollText className="w-12 h-12 text-primary" />,
    title: "Newsletter Setup",
    description: "Build and grow your email list with engaging newsletter campaigns.",
    link: "/services/newsletter-setup"
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: "Social Media",
    description: "Strategic social media management to build your brand presence.",
    link: "/services/social-media"
  },
  {
    icon: <Printer className="w-12 h-12 text-primary" />,
    title: "Print Media",
    description: "High-quality brochures, flyers, and marketing materials.",
    link: "/services/print-media"
  }
];

const ServicesShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                Read More
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesShowcase;
