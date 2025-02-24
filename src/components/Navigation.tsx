
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "Branding & Logo", href: "/services/branding-and-logo" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Email Setup", href: "/services/email-setup" },
        { name: "Newsletter Setup", href: "/services/newsletter-setup" },
        { name: "Social Media", href: "/services/social-media" },
        { name: "Print Media", href: "/services/print-media" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b5b53779-050d-479d-a063-23e9d018a0dc.png" 
              alt="BrandingLabs.ca"
              className="h-10"
            />
          </Link>

          <DesktopNav navLinks={navLinks} />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileNav 
          navLinks={navLinks} 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </nav>
  );
};

export default Navigation;
