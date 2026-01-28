import FAQItem from "@/components/FAQItem";

/**
 * FAQs page component
 * Displays frequently asked questions in accordion format
 */
const FAQs = () => {
  // FAQ data organized by category
  const faqCategories = [
    {
      title: "About Our Leads",
      faqs: [
        {
          question: "What makes your leads different from other providers?",
          answer:
            "Our leads are 100% exclusive – they're never shared with other companies. Each lead is verified through our multi-step qualification process, ensuring you're connecting with prospects who have genuine intent to purchase. We also guarantee 24-hour delivery so you can reach customers while they're still in buying mode.",
        },
        {
          question: "How do you qualify your leads?",
          answer:
            "We use a proprietary qualification process that includes initial interest verification, budget confirmation, timeline assessment, and authority check. This ensures you only receive leads from decision-makers who are ready and able to purchase your services.",
        },
        {
          question: "What information is included with each lead?",
          answer:
            "Each lead includes the prospect's full name, verified phone number, email address, physical address, service type needed, project details, preferred timeline, and any specific requirements they mentioned. For appointment-set leads, you'll also receive the confirmed appointment date and time.",
        },
        {
          question: "Are the leads exclusive to my company?",
          answer:
            "Yes, absolutely. Every lead we deliver is exclusive to you. We never sell the same lead to multiple companies. This exclusivity is one of the key reasons our clients see such high conversion rates compared to shared lead services.",
        },
      ],
    },
    {
      title: "Pricing & Packages",
      faqs: [
        {
          question: "How does your pricing work?",
          answer:
            "We offer transparent, volume-based pricing. The more leads you purchase, the lower your cost per lead. Our packages range from 3 leads at $625 ($208/lead) to 10 leads at $1,600 ($160/lead). All prices are one-time payments with no hidden fees or recurring charges.",
        },
        {
          question: "Do you offer refunds or replacements for bad leads?",
          answer:
            "Yes, we stand behind our lead quality. If you receive a lead with invalid contact information or someone who denies requesting services, we'll replace it free of charge. Simply report the issue within 48 hours and we'll verify and process the replacement.",
        },
        {
          question: "Can I choose which service type I receive leads for?",
          answer:
            "Absolutely. When placing your order, you select the specific service category you want leads for. Whether it's concrete, painting, landscaping, security systems, or any other service we cover, your leads will be targeted to that specific industry.",
        },
      ],
    },
    {
      title: "Delivery & Process",
      faqs: [
        {
          question: "How quickly will I receive my leads?",
          answer:
            "We guarantee 24-hour delivery for all lead packages. Most clients receive their first leads within 12-18 hours of order confirmation. Leads are delivered via email in real-time as they're qualified, so you can start following up immediately.",
        },
        {
          question: "Can I specify my service area?",
          answer:
            "Yes, you can define your service area by city, county, zip codes, or radius around your business location. We'll only send you leads from prospects within your specified service territory to ensure maximum relevance and conversion potential.",
        },
        {
          question: "What if I need more leads than the packages offer?",
          answer:
            "We offer custom enterprise packages for high-volume needs. Contact our sales team to discuss your specific requirements, and we'll create a customized solution that meets your growth goals while providing the best value.",
        },
      ],
    },
    {
      title: "Account & Support",
      faqs: [
        {
          question: "Do I need to sign a long-term contract?",
          answer:
            "No, we don't require any long-term commitments. Each lead package is a one-time purchase. You're free to order as frequently or infrequently as your business needs. Many clients start with a smaller package to test our quality, then scale up based on results.",
        },
        {
          question: "What kind of support do you offer?",
          answer:
            "We provide dedicated support via email and phone during business hours (Monday-Friday, 9 AM - 6 PM EST). Our team typically responds to inquiries within 2 hours. We also offer optional sales training and best practice guides to help you maximize your lead conversion rates.",
        },
        {
          question: "How do I track my leads and orders?",
          answer:
            "All clients receive access to our online dashboard where you can view your order history, track incoming leads, report any issues, and manage your account settings. Leads are also delivered directly to your email for immediate action.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Find answers to common questions about our lead generation services, pricing, and
              delivery process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className={categoryIndex > 0 ? "mt-12" : ""}>
                <h2 className="mb-6 text-2xl font-bold text-foreground">{category.title}</h2>
                <div className="rounded-xl border border-border bg-card px-6 py-2 md:px-8">
                  {category.faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Still Have Questions?</h2>
            <p className="mb-8 text-muted-foreground">
              Our team is here to help. Reach out and we'll get back to you within 2 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@completeleadsolutions.com"
                className="inline-flex h-11 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                Email Us
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Call +1 (602) 561-6996
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
