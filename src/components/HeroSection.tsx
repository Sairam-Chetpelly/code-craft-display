
import { ArrowDown, Code, Github, Laptop } from "lucide-react";
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import ButtonLink from "./ui/ButtonLink";
import { ReactComponent as Logo } from "@/assets/logo.svg";

export default function HeroSection() {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="blob top-1/4 -left-1/4 opacity-40"></div>
      <div className="blob bottom-1/4 -right-1/4 opacity-30"></div>
      
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <AnimatedText delay={100} animation="scale">
            <div className="flex items-center justify-center mb-6 gap-3">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Full-Stack Developer
              </span>
              <span className="h-6 w-px bg-gray-300"></span>
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-accent/10 text-primary rounded-full">
                UI/UX Designer
              </span>
            </div>
          </AnimatedText>
          
          <AnimatedText className="mb-6" delay={200} animation="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2 text-gradient">Sairam Chetpelly</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText className="max-w-2xl mx-auto mb-8" delay={300} animation="fade-up">
            <p className="text-lg md:text-xl text-muted-foreground">
              I build exceptional and accessible digital experiences for the web, 
              with a focus on responsive design, performance, and user satisfaction.
            </p>
          </AnimatedText>

          <AnimatedText className="flex items-center justify-center gap-6 mb-12" delay={400} animation="fade-up">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code size={18} className="text-primary" />
              <span>React</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Laptop size={18} className="text-primary" />
              <span>Node.js</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Logo className="w-5 h-5 text-primary" />
              <span>TypeScript</span>
            </div>
          </AnimatedText>
          
          <AnimatedText className="flex flex-wrap gap-4 justify-center" delay={500} animation="fade-up">
            <ButtonLink href="#projects" size="lg" className="rounded-full">
              View My Work
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" size="lg" className="rounded-full">
              Get In Touch
            </ButtonLink>
          </AnimatedText>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </Section>
  );
}
