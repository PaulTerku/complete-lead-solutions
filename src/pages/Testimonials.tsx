import TestimonialCard from "@/components/TestimonialCard";

/**
 * Testimonials page component
 * Displays customer testimonials in a grid layout
 */
const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Thompson Concrete Co.",
      testimonial:
        "Complete Lead Solutions transformed our business. We went from struggling to find customers to having a steady stream of qualified leads every week. Our revenue has increased by 40% in just 6 months.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      company: "Premier Painting Services",
      testimonial:
        "The quality of leads we receive is exceptional. Every lead is someone who actually wants our services and is ready to make a decision. No more wasting time on tire-kickers.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Chen's Landscaping",
      testimonial:
        "I was skeptical at first, but the results speak for themselves. We've closed 8 out of 10 leads we've received. The ROI is incredible compared to other marketing we've tried.",
      rating: 5,
    },
    {
      name: "Jennifer Wilson",
      company: "SecureHome Systems",
      testimonial:
        "As a security company, we need leads from people who are serious about protecting their homes and businesses. CLS delivers exactly that. Our sales team loves working these leads.",
      rating: 5,
    },
    {
      name: "Robert Anderson",
      company: "Anderson Asphalt",
      testimonial:
        "The appointment setting service is a game-changer. We don't have to make cold calls anymore – the leads are pre-qualified and appointments are already scheduled. Just show up and close.",
      rating: 5,
    },
    {
      name: "Lisa Brown",
      company: "Brown's Stucco & Plaster",
      testimonial:
        "We've tried other lead services before, but none compare to Complete Lead Solutions. The leads are exclusive, verified, and delivered within 24 hours. Highly recommend!",
      rating: 4,
    },
    {
      name: "James Miller",
      company: "Miller Snow Removal",
      testimonial:
        "Running a seasonal business is tough, but CLS helps us maximize our busy season. Their leads convert at nearly double the rate of any other source we've used.",
      rating: 5,
    },
    {
      name: "Amanda Garcia",
      company: "Garcia Commercial Security",
      testimonial:
        "The team at CLS really understands our industry. They don't just send any leads – they send qualified commercial prospects who have genuine security needs and budgets.",
      rating: 5,
    },
    {
      name: "Christopher Lee",
      company: "Lee's Alarm Solutions",
      testimonial:
        "Outstanding service from start to finish. The customer support is responsive, and they actually care about our success. It feels like a true partnership.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              What Our Clients Say
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Don't just take our word for it. Hear from the service companies that have grown
              their business with our leads.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary md:text-4xl">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary md:text-4xl">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary md:text-4xl">98%</p>
              <p className="text-sm text-muted-foreground">Would Recommend</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary md:text-4xl">85%</p>
              <p className="text-sm text-muted-foreground">Repeat Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to Join Our Success Stories?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Start receiving high-quality leads for your service business today.
            </p>
            <a
              href="/buy-leads"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
