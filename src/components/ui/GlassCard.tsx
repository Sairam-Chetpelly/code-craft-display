
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-6 rounded-2xl transition-all duration-300",
          hoverable && "hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
