import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
};

type DesktopNavProps = {
  navLinks: NavLink[];
};

const DesktopNav = ({ navLinks }: DesktopNavProps) => (
  <div className="hidden md:flex items-center gap-8">
    {navLinks.map((link) =>
      link.subLinks ? (
        <DropdownMenu key={link.name}>
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {link.name}
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border-none shadow-lg">
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild>
                <Link to={subLink.href} className="w-full cursor-pointer">
                  {subLink.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          key={link.name}
          to={link.href}
          className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      )
    )}
    <Link to="/contact">
      <Button className="bg-primary hover:bg-primary/90 text-white">
        Free Consultation
      </Button>
    </Link>
  </div>
);

export default DesktopNav;