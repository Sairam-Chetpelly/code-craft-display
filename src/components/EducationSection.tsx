
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Calendar, GraduationCap, School } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on neural networks and deep learning applications.",
      icon: <GraduationCap />
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      duration: "2014 - 2018",
      description: "Graduated with honors. Focused on software engineering, algorithms, and data structures.",
      icon: <School />
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Coding Academy",
      duration: "Summer 2017",
      description: "Intensive 12-week program covering modern web technologies including React, Node.js, and MongoDB.",
      icon: <BookOpen />
    },
  ];

  return (
    <Section id="education" className="bg-white">
      <div className="text-center mb-16">
        <AnimatedText>
          <span className="text-sm font-medium text-primary mb-2 block">
            Education & Certifications
          </span>
        </AnimatedText>
        <AnimatedText delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Academic Background
          </h2>
        </AnimatedText>
        <AnimatedText delay={200} className="max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            My educational journey has provided a strong foundation in computer science principles,
            software engineering practices, and cutting-edge technologies.
          </p>
        </AnimatedText>
      </div>

      <AnimatedText delay={300}>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5 pb-3">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {item.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-5">
                <CardTitle className="text-xl mb-2">{item.degree}</CardTitle>
                <CardDescription className="text-primary font-medium mb-3">
                  {item.institution}
                </CardDescription>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedText>
    </Section>
  );
}
