import { LucideIcon } from "lucide-react";

interface LeadLevelCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  step: number;
}

/**
 * Lead level card component
 * Displays different stages of lead services
 */
const LeadLevelCard = ({ title, description, icon: Icon, step }: LeadLevelCardProps) => {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
      {/* Step Number */}
      <div className="absolute -top-4 left-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary-foreground">
          {step}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default LeadLevelCard;
