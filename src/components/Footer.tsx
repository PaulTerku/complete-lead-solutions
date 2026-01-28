import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
/**
 * Footer component with company info, quick links, and contact details
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className=" flex-col items-center ">
            <div className="mb-4">
              <img
                src={logo}
                alt="Complete Lead Solutions"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for exclusive, sales-ready leads. We help service businesses grow
              with quality leads that convert.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/buy-leads" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Buy Leads
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Concrete Leads</li>
              <li>Asphalt Leads</li>
              <li>Painting Leads</li>
              <li>Landscaping Leads</li>
              <li>Security Systems Leads</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@completeleadsolutions.com" className="hover:text-accent">
                  info@completeleadsolutions.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+18005551234" className="hover:text-accent">
                  +1 (602) 561-6996
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="mt-1 h-4 w-4 text-accent" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  Arizona, AZ 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Complete Lead Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
