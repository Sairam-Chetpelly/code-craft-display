
import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useRef } from "react";
import Container from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    id, 
    children, 
    className, 
    containerClassName, 
    withContainer = true,
    ...props 
  }, ref) => {
    const sectionRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const revealElements = sectionRef.current?.querySelectorAll(".reveal");
      revealElements?.forEach((el) => observer.observe(el));

      return () => {
        revealElements?.forEach((el) => observer.unobserve(el));
      };
    }, []);

    return (
      <section
        id={id}
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          sectionRef.current = node;
        }}
        className={cn("py-16 md:py-24 relative", className)}
        {...props}
      >
        {withContainer ? (
          <Container className={containerClassName}>{children}</Container>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
