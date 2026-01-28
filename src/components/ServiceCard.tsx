import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Reusable service card component
 * Displays service icon, title, and description with hover effects
 */
const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
      {/* Icon Container */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
