
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website with user authentication, product catalog, and payment processing.",
      imageSrc: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and real-time updates.",
      imageSrc: "https://images.unsplash.com/photo-1611224885990-d81446388412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Content Generator",
      description: "An application that uses AI to generate blog posts, articles, and social media content.",
      imageSrc: "https://images.unsplash.com/photo-1635002065555-529e377cf4b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "OpenAI API", "Express"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracking Platform",
      description: "A web application that allows users to track workouts, set goals, and monitor progress.",
      imageSrc: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <Section id="projects" className="bg-white">
      <div className="text-center mb-16">
        <AnimatedText>
          <span className="text-sm font-medium text-primary mb-2 block">
            Portfolio
          </span>
        </AnimatedText>
        <AnimatedText delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
        </AnimatedText>
        <AnimatedText delay={200} className="max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise 
            in developing comprehensive web applications.
          </p>
        </AnimatedText>
      </div>

      <AnimatedText delay={300}>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </AnimatedText>
    </Section>
  );
}
