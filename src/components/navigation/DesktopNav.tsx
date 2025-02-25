
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronDown, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

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
          <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {link.name}
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[100] bg-background/95 backdrop-blur-md border-border">
            {link.subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.href} asChild>
                <Link to={subLink.href} className="w-full cursor-pointer text-foreground">
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
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      )
    )}
    <Link to="/contact">
      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary">
        <Mail className="w-4 h-4 mr-2" /> Let's Connect
      </Button>
    </Link>
  </div>
);

export default DesktopNav;
