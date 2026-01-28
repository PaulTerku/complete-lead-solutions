import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Buy Leads page component
 * Displays pricing cards and purchase form
 */
const BuyLeads = () => {
  const navigate = useNavigate();

  // Pricing packages data
  const pricingPackages = [
    { leadCount: 3, totalPrice: 625, pricePerLead: 208 },
    { leadCount: 5, totalPrice: 950, pricePerLead: 190, isPopular: true },
    { leadCount: 7, totalPrice: 1225, pricePerLead: 175 },
    { leadCount: 10, totalPrice: 1600, pricePerLead: 160 },
  ];

  // Form state
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    leadQuantity: "5",
    comments: "",
  });

  // Service types for dropdown
  const serviceTypes = [
    "Concrete",
    "Asphalt",
    "Painting",
    "Stucco",
    "Landscaping",
    "Commercial Security Cameras",
    "Alarm Systems",
    "Snow Plowing",
  ];

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle package selection
  const handleSelectPackage = (leadCount: number) => {
    setFormData((prev) => ({ ...prev, leadQuantity: leadCount.toString() }));
    // Scroll to form
    document.getElementById("purchase-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data for checkout (in real app, would use context or state management)
    localStorage.setItem("orderData", JSON.stringify(formData));
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            Buy Exclusive Leads
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Choose your package and start receiving high-quality, ready-to-buy leads for your
            service business.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Choose Your Package</h2>
            <p className="text-muted-foreground">
              All leads are exclusive to you and verified for quality.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPackages.map((pkg) => (
              <PricingCard
                key={pkg.leadCount}
                leadCount={pkg.leadCount}
                totalPrice={pkg.totalPrice}
                pricePerLead={pkg.pricePerLead}
                isPopular={pkg.isPopular}
                onSelect={() => handleSelectPackage(pkg.leadCount)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Form Section */}
      <section id="purchase-form" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-card-foreground">
                Complete Your Order
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Lead Quantity */}
                <div className="space-y-3">
                  <Label>Lead Quantity</Label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {pricingPackages.map((pkg) => (
                      <label
                        key={pkg.leadCount}
                        className={`flex cursor-pointer flex-col items-center rounded-lg border-2 p-3 transition-colors ${
                          formData.leadQuantity === pkg.leadCount.toString()
                            ? "border-secondary bg-secondary/10"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="leadQuantity"
                          value={pkg.leadCount}
                          checked={formData.leadQuantity === pkg.leadCount.toString()}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-lg font-bold text-foreground">{pkg.leadCount}</span>
                        <span className="text-xs text-muted-foreground">
                          ${pkg.totalPrice}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments (Optional)</Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  Proceed to Checkout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyLeads;
