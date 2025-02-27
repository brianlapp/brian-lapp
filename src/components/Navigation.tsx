
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";
import { Link } from "react-router-dom";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import { NavLink } from "../types/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { 
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "Website Development", href: "/services/website-development" },
        { name: "Brand & Logo Design", href: "/services/branding-and-logo" },
        { name: "Email Setup", href: "/services/email-setup" },
        { name: "Newsletter Setup", href: "/services/newsletter-setup" },
        { name: "Social Media", href: "/services/social-media" },
        { name: "Print Media", href: "/services/print-media" },
      ]
    },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Brian Lapp</span>
          </Link>

          <DesktopNav navLinks={navLinks} />

          <button
            className="md:hidden text-foreground"
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

