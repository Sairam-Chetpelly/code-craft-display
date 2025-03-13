
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md", 
    children, 
    ...props 
  }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-11 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
