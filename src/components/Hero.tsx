import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

/**
 * Hero section component for the homepage
 * Features headline, subheadline, and CTA buttons
 */
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 500+ Service Companies
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Exclusive, Ready-to-Buy Leads for{" "}
            <span className="text-accent">Service Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Stop chasing cold leads. Get connected with customers who are
            actively looking for your services and ready to schedule
            appointments today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/buy-leads">
              <Button
                size="lg"
                className="group bg-accent px-8 text-accent-foreground hover:bg-accent/90"
              >
                Buy Leads
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="mr-2 h-4 w-4" />
                How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-primary-foreground/70">Contact Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">15K+</p>
              <p className="text-sm text-primary-foreground/70">Leads Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-primary-foreground/70">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">24hr</p>
              <p className="text-sm text-primary-foreground/70">Delivery Time</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
