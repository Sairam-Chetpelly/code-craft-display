
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale";
}

export default function AnimatedText({ 
  children, 
  className,
  delay = 0,
  animation = "fade-up",
  ...props 
}: AnimatedTextProps) {
  return (
    <div 
      className={cn("reveal", className, animation ? `animation-${animation}` : "")} 
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
