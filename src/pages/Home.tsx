import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import LeadLevelCard from "@/components/LeadLevelCard";
import appointmentBg from "@/assets/appointment-team-bg.jpg";
import {
  Hammer,
  PaintBucket,
  Truck,
  Trees,
  Camera,
  Shield,
  Snowflake,
  Layers,
  Calendar,
  CheckCircle2,
  RefreshCw,
  Users,
  ArrowRight,
  Headphones,
} from "lucide-react";

/**
 * Home page component
 * Contains Hero, Services, Lead Levels, Appointment Team, and CTA sections
 */
const Home = () => {
  // Services data
  const services = [
    {
      title: "Concrete",
      description:
        "Connect with homeowners needing driveways, patios, and foundations.",
      icon: Layers,
    },
    {
      title: "Asphalt",
      description:
        "Get leads for parking lots, driveways, and paving projects.",
      icon: Truck,
    },
    {
      title: "Painting",
      description:
        "Interior and exterior painting leads for residential and commercial.",
      icon: PaintBucket,
    },
    {
      title: "Stucco",
      description: "Quality leads for stucco installation and repair services.",
      icon: Hammer,
    },
    {
      title: "Landscaping",
      description: "Lawn care, garden design, and outdoor living space leads.",
      icon: Trees,
    },
    {
      title: "Commercial Security Cameras",
      description:
        "Business security system installation and monitoring leads.",
      icon: Camera,
    },
    {
      title: "Alarm Systems",
      description:
        "Residential and commercial security alarm installation leads.",
      icon: Shield,
    },
    {
      title: "Snow Plowing",
      description: "Winter weather snow removal and de-icing service leads.",
      icon: Snowflake,
    },
  ];

  // Lead levels data
  const leadLevels = [
    {
      title: "Appointment Setting",
      description:
        "We make the initial contact and schedule qualified appointments with interested prospects.",
      icon: Calendar,
      step: 1,
    },
    {
      title: "Appointment Confirmation",
      description:
        "Every appointment is confirmed 24 hours prior to ensure the prospect is ready and waiting.",
      icon: CheckCircle2,
      step: 2,
    },
    {
      title: "Appointment Follow-up",
      description:
        "We follow up after each appointment to gather feedback and ensure customer satisfaction.",
      icon: RefreshCw,
      step: 3,
    },
    {
      title: "Customer Retention & Referrals",
      description:
        "Our retention programs help turn one-time customers into repeat clients and referral sources.",
      icon: Users,
      step: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We specialize in generating high-quality leads for service-based
              businesses across multiple industries.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Levels Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Our Lead Service Levels
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From initial contact to long-term retention, we handle every step
              of the customer acquisition journey.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadLevels.map((level) => (
              <LeadLevelCard
                key={level.title}
                title={level.title}
                description={level.description}
                icon={level.icon}
                step={level.step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Team Section */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage: `url(${appointmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/85" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Icon */}
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                <Headphones className="h-12 w-12 text-accent-foreground" />
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
                  Our Dedicated Appointment Team
                </h2>
                <p className="mb-4 text-primary-foreground/80">
                  Our professional appointment setters are trained specialists
                  who understand the unique needs of service businesses. They
                  don't just make calls – they build relationships and qualify
                  prospects to ensure every lead you receive is genuinely
                  interested and ready to buy.
                </p>
                <p className="text-primary-foreground/80">
                  With an average of 5+ years experience in lead generation and
                  customer service, our team consistently delivers conversion
                  rates that outperform industry standards. We treat your
                  potential customers with the same care and professionalism as
                  if they were our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join hundreds of service companies already scaling with our
              exclusive leads.
            </p>
            <Link to="/buy-leads">
              <Button
                size="lg"
                className="group bg-accent px-8 text-accent-foreground hover:bg-accent/90"
              >
                Buy Leads Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
