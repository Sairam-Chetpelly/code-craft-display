
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import SkillCard from "./SkillCard";
import { Code, Database, Globe, Layout, Server, Smartphone, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { name: "HTML & CSS", icon: <Layout /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "React", icon: <Globe /> },
    { name: "Node.js", icon: <Server /> },
    { name: "SQL & NoSQL", icon: <Database /> },
    { name: "TypeScript", icon: <Terminal /> },
    { name: "UI/UX Design", icon: <Smartphone /> },
    { name: "Git & CI/CD", icon: <Code /> },
  ];

  return (
    <Section id="skills" className="bg-gray-50">
      <div className="text-center mb-16">
        <AnimatedText>
          <span className="text-sm font-medium text-primary mb-2 block">
            Skills & Expertise
          </span>
        </AnimatedText>
        <AnimatedText delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Technical Proficiencies
          </h2>
        </AnimatedText>
        <AnimatedText delay={200} className="max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            I've acquired a diverse range of skills throughout my career, allowing me to build complete, 
            scalable applications from the ground up.
          </p>
        </AnimatedText>
      </div>

      <AnimatedText delay={300}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </AnimatedText>
    </Section>
  );
}
