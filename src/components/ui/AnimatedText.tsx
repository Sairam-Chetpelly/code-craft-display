
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ 
  children, 
  className,
  delay = 0,
  ...props 
}: AnimatedTextProps) {
  return (
    <div 
      className={cn("reveal", className)} 
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
