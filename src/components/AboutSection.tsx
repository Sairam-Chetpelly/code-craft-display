
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import GlassCard from "./ui/GlassCard";

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
              Passionate about creating impactful digital solutions
            </h2>
          </AnimatedText>
          <AnimatedText delay={200}>
            <p className="text-muted-foreground mb-6">
              I'm a software developer with a background in computer science and a
              passion for building exceptional digital experiences. I specialize in
              creating intuitive and performant web applications that solve real-world
              problems.
            </p>
          </AnimatedText>
          <AnimatedText delay={300}>
            <p className="text-muted-foreground mb-8">
              With expertise in both frontend and backend technologies, I enjoy the
              full process of bringing ideas to life - from concept and design to
              implementation and deployment. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
          </AnimatedText>
          <AnimatedText delay={400}>
            <div className="flex flex-wrap gap-4">
              <GlassCard className="flex-1 min-w-[150px] text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </GlassCard>
              <GlassCard className="flex-1 min-w-[150px] text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </GlassCard>
              <GlassCard className="flex-1 min-w-[150px] text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </GlassCard>
            </div>
          </AnimatedText>
        </div>
        
        <div className="relative">
          <AnimatedText delay={300}>
            <div className="relative mx-auto md:ml-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 mix-blend-overlay rounded-2xl"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] bg-cover bg-center rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                <h3 className="text-white font-bold text-xl mb-1">John Doe</h3>
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
