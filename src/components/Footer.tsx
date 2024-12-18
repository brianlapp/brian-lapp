import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BrandingLabs</h3>
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
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-gray-400 hover:text-white transition-colors">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 BrandingLabs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;