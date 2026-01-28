import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface HeaderProps {
  cartCount?: number;
}

/**
 * Main navigation header component
 * Features: Logo, navigation links, auth buttons, cart icon
 */
const Header = ({ cartCount = 0 }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/buy-leads", label: "Buy Leads" },
    { path: "/about", label: "About Us" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/faqs", label: "FAQs" },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Complete Lead Solutions"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${isActiveLink(link.path) ? "text-secondary" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden items-center gap-2 md:flex">
              <Link to="/sign-in">
                <Button variant="ghost" size="sm" className="hover:text-secondary hover:bg-ghost">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Cart Icon */}
            <Link to="/checkout" className="relative">
              <Button variant="ghost" size="icon" className="relative hover:bg-ghost hover:text-secondary">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${isActiveLink(link.path) ? "bg-muted text-secondary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
