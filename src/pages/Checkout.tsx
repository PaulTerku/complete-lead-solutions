import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";

interface OrderData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  leadQuantity: string;
  comments: string;
}

/**
 * Checkout page component
 * Displays order summary and credit card form (UI only)
 */
const Checkout = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pricing lookup
  const pricingMap: Record<string, { total: number; perLead: number }> = {
    "3": { total: 625, perLead: 208 },
    "5": { total: 950, perLead: 190 },
    "7": { total: 1225, perLead: 175 },
    "10": { total: 1600, perLead: 160 },
  };

  // Card form state
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  // Load order data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("orderData");
    if (savedData) {
      setOrderData(JSON.parse(savedData));
    }
  }, []);

  // Handle card input changes
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsSuccess(true);

    // Clear order data
    localStorage.removeItem("orderData");
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-success text-success-foreground">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground">Payment Successful!</h1>
            <p className="mb-8 text-muted-foreground">
              Thank you for your order. You will receive an email confirmation shortly with details
              about your leads.
            </p>
            <Button onClick={() => navigate("/")} className="bg-secondary hover:bg-secondary/90">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // No order data
  if (!orderData) {
    return (
      <div className="min-h-screen bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md text-center">
            <h1 className="mb-4 text-2xl font-bold text-foreground">No Order Found</h1>
            <p className="mb-8 text-muted-foreground">
              Please select a lead package before proceeding to checkout.
            </p>
            <Button
              onClick={() => navigate("/buy-leads")}
              className="bg-secondary hover:bg-secondary/90"
            >
              Browse Packages
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const pricing = pricingMap[orderData.leadQuantity] || pricingMap["5"];

  return (
    <div className="min-h-screen bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-foreground">Checkout</h1>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <h2 className="mb-6 text-xl font-bold text-card-foreground">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Package</span>
                    <span className="font-semibold text-foreground">
                      {orderData.leadQuantity} Leads
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Service Type</span>
                    <span className="font-semibold text-foreground">{orderData.serviceType}</span>
                  </div>

                  <div className="flex justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Price per Lead</span>
                    <span className="font-semibold text-foreground">${pricing.perLead}</span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-secondary">
                      ${pricing.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-muted p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">{orderData.businessName}</p>
                  <p className="text-sm text-muted-foreground">{orderData.contactName}</p>
                  <p className="text-sm text-muted-foreground">{orderData.email}</p>
                  <p className="text-sm text-muted-foreground">{orderData.phone}</p>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="order-1 lg:order-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-6 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-secondary" />
                  <h2 className="text-xl font-bold text-card-foreground">Payment Details</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Card Number */}
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={cardData.cardNumber}
                      onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  {/* Cardholder Name */}
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={cardData.cardName}
                      onChange={handleCardChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        name="expiry"
                        value={cardData.expiry}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted.</span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay $${pricing.total.toLocaleString()}`}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
