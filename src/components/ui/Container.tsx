
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, fluid = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-6 sm:px-8 md:px-10",
          fluid ? "w-full" : "max-w-7xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
