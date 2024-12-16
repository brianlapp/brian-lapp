import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type NavLink = {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
};

type MobileNavProps = {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ navLinks, isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-slide-down">
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link
              to={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={onClose}
            >
              {link.name}
            </Link>
            {link.subLinks && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/contact" onClick={onClose}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;