import { Target, Heart, Zap, Award } from "lucide-react";
import appointmentBg from "@/assets/appointment-team-bg.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
/**
 * About page component
 * Contains hero section, company description, mission & values
 */
const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on lead quality. Every lead is verified and qualified before delivery.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description:
        "Your success is our success. We measure ourselves by the results our clients achieve.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Fast lead delivery with our 24-hour guarantee ensures you never miss an opportunity.",
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "Transparent pricing, honest communication, and ethical business practices guide everything we do.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage: `url(${aboutHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              About Complete Lead Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We're on a mission to help service businesses grow by connecting
              them with customers who are ready to buy.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Complete Lead Solutions was founded in 2015 by a team of
                  marketing professionals who saw a gap in the market. Service
                  companies were spending thousands on advertising but
                  struggling to find qualified leads who were actually ready to
                  make a purchase.
                </p>
                <p className="mb-4 text-muted-foreground">
                  We developed a proprietary lead generation system that focuses
                  on intent-based targeting. Instead of casting a wide net and
                  hoping for the best, we identify consumers who are actively
                  searching for services and qualify them before passing them to
                  our clients.
                </p>
                <p className="text-muted-foreground">
                  Today, we've delivered over 15,000 leads to more than 500
                  service companies across the United States, with an
                  industry-leading conversion rate and customer satisfaction
                  score.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-xl bg-muted p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-4xl font-bold text-secondary">500+</p>
                      <p className="text-sm text-muted-foreground">
                        Happy Clients
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-secondary">15K+</p>
                      <p className="text-sm text-muted-foreground">
                        Leads Delivered
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-secondary">98%</p>
                      <p className="text-sm text-muted-foreground">
                        Contact Rate
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-secondary">8+</p>
                      <p className="text-sm text-muted-foreground">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To empower service businesses with the highest quality leads,
              enabling them to spend less time prospecting and more time doing
              what they do best – serving their customers and growing their
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These principles guide every decision we make and every
              interaction we have.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
