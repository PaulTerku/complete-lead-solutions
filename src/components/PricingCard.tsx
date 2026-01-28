import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  leadCount: number;
  totalPrice: number;
  pricePerLead: number;
  isPopular?: boolean;
  onSelect: () => void;
}

/**
 * Pricing card component for displaying lead packages
 * Shows lead count, total price, and price per lead
 */
const PricingCard = ({
  leadCount,
  totalPrice,
  pricePerLead,
  isPopular = false,
  onSelect,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isPopular
          ? "border-accent bg-accent/5 shadow-lg"
          : "border-border bg-card hover:border-secondary"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
            Most Popular
          </span>
        </div>
      )}

      {/* Lead Count */}
      <div className="mb-4 text-center">
        <span className="text-5xl font-bold text-foreground">{leadCount}</span>
        <span className="ml-2 text-lg text-muted-foreground">Leads</span>
      </div>

      {/* Total Price */}
      <div className="mb-2 text-center">
        <span className="text-3xl font-bold text-secondary">${totalPrice.toLocaleString()}</span>
      </div>

      {/* Price Per Lead */}
      <p className="mb-6 text-center text-sm text-muted-foreground">
        ${pricePerLead} per lead
      </p>

      {/* Features List */}
      <ul className="mb-6 space-y-3">
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-success" />
          Exclusive leads (not shared)
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-success" />
          Verified contact information
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-success" />
          Ready-to-buy prospects
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-success" />
          24-hour delivery guarantee
        </li>
      </ul>

      {/* Select Button */}
      <Button
        onClick={onSelect}
        className={`w-full ${
          isPopular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-secondary hover:bg-secondary/90"
        }`}
      >
        Select Package
      </Button>
    </div>
  );
};

export default PricingCard;
