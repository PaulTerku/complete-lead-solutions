import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  rating: number;
  avatar?: string;
}

/**
 * Testimonial card component
 * Displays customer review with star rating
 */
const TestimonialCard = ({ name, company, testimonial, rating, avatar }: TestimonialCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Star Rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? "fill-accent text-accent" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mb-6 text-muted-foreground">&ldquo;{testimonial}&rdquo;</p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          {avatar ? (
            <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <span className="text-lg font-semibold">{name.charAt(0)}</span>
          )}
        </div>

        {/* Name & Company */}
        <div>
          <p className="font-semibold text-card-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
