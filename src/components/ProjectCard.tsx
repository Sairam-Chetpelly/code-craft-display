
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { HTMLAttributes, forwardRef, useState } from "react";
import GlassCard from "./ui/GlassCard";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc?: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ 
    title, 
    description, 
    imageSrc, 
    technologies, 
    liveLink, 
    githubLink, 
    className,
    ...props 
  }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
      <GlassCard
        ref={ref}
        className={cn("overflow-hidden group", className)}
        {...props}
      >
        {imageSrc && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4 blur-load">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary transition-colors hover:text-primary/80"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-foreground transition-colors hover:text-primary"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
          )}
        </div>
      </GlassCard>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
