
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-950 text-white py-12 border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold mb-2">Brian Lapp</span>
          <p className="text-gray-400 text-center md:text-left">
            Frontend Developer & UI Engineer
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:contact@brianlapp.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Brian Lapp. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
