
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
    title: "Brand Identity Design",
    description: "I'll help you develop a memorable brand identity that truly represents your business values.",
    link: "/services/branding-and-logo"
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Custom Website Development",
    description: "I craft responsive, user-friendly websites that engage your audience and drive results.",
    link: "/services/website-development"
  },
  {
    icon: <Mail className="w-12 h-12 text-primary" />,
    title: "Professional Email Setup",
    description: "I'll set up your business email with Google Workspace for a professional online presence.",
    link: "/services/email-setup"
  },
  {
    icon: <ScrollText className="w-12 h-12 text-primary" />,
    title: "Newsletter Management",
    description: "I'll help you build and grow your audience with engaging newsletter campaigns.",
    link: "/services/newsletter-setup"
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: "Social Media Setup",
    description: "I'll establish your brand presence across key social media platforms.",
    link: "/services/social-media"
  },
  {
    icon: <Printer className="w-12 h-12 text-primary" />,
    title: "Print Design",
    description: "I design professional marketing materials that extend your brand offline.",
    link: "/services/print-media"
  }
];

const ServicesShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What I Offer</h1>
          <p className="text-xl text-muted-foreground">
            I provide tailored digital solutions to help your business stand out and succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                Learn More
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
