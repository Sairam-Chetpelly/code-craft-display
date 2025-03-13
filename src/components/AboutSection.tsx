
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import GlassCard from "./ui/GlassCard";
import { Calendar, Download, MapPin, User } from "lucide-react";
import ButtonLink from "./ui/ButtonLink";

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50 clip-path-slant"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <AnimatedText>
            <span className="text-sm font-medium text-primary mb-2 block">
              About Me
            </span>
          </AnimatedText>
          <AnimatedText delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creating innovative digital solutions with passion
            </h2>
          </AnimatedText>
          <AnimatedText delay={200}>
            <p className="text-muted-foreground mb-6">
              I'm Sairam Chetpelly, a software developer with expertise in modern web technologies 
              and a passion for creating exceptional digital experiences. My background in computer 
              science and years of practical experience enable me to build robust, scalable applications 
              that solve real-world problems.
            </p>
          </AnimatedText>
          <AnimatedText delay={300}>
            <p className="text-muted-foreground mb-8">
              With a focus on both frontend and backend development, I enjoy transforming ideas into 
              reality - from concept and design to implementation and deployment. I'm constantly 
              learning and exploring new technologies to bring innovation to every project.
            </p>
          </AnimatedText>

          <AnimatedText delay={350} className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Name</h3>
                <p className="text-muted-foreground">Sairam Chetpelly</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Experience</h3>
                <p className="text-muted-foreground">3+ years</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={400}>
            <ButtonLink href="#" variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </ButtonLink>
          </AnimatedText>
        </div>
        
        <div className="relative">
          <AnimatedText delay={300}>
            <div className="relative mx-auto md:ml-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 mix-blend-overlay rounded-2xl"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] bg-cover bg-center rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                <h3 className="text-white font-bold text-xl mb-1">Sairam Chetpelly</h3>
                <p className="text-white/80 text-sm">Full-Stack Developer</p>
              </div>
            </div>
          </AnimatedText>
          
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </Section>
  );
}
