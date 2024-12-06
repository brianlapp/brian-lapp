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

const Services = () => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2 leading-tight">
          Complete Digital Marketing Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Everything your small business needs to succeed online, all in one place.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
