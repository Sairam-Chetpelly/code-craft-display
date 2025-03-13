
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SkillCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>(
  ({ name, icon, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="text-primary mb-4 text-3xl">{icon}</div>
        <h3 className="text-base font-medium">{name}</h3>
      </div>
    );
  }
);

SkillCard.displayName = "SkillCard";

export default SkillCard;
