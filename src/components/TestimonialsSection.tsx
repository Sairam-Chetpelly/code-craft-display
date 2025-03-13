
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import { Quote } from "lucide-react";
import GlassCard from "./ui/GlassCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Sairam is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding.",
      author: "Jessica Chen",
      position: "CTO, TechVision",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Working with Sairam was a pleasure. He understood our requirements perfectly and implemented features that exceeded our expectations.",
      author: "Michael Rodriguez",
      position: "Product Manager, Innovate Solutions",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Sairam's technical expertise and communication skills make him a valuable asset to any team. He solved complex problems elegantly and efficiently.",
      author: "Sarah Johnson",
      position: "Lead Developer, WebForge",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <AnimatedText>
          <span className="text-sm font-medium text-primary mb-2 block">
            Testimonials
          </span>
        </AnimatedText>
        <AnimatedText delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Say
          </h2>
        </AnimatedText>
        <AnimatedText delay={200} className="max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            I'm proud of the relationships I've built with clients and colleagues.
            Here's what they have to say about working with me.
          </p>
        </AnimatedText>
      </div>

      <AnimatedText delay={300}>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="relative pt-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="text-white" size={20} />
              </div>
              
              <p className="mb-6 text-muted-foreground italic">"{testimonial.text}"</p>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedText>
    </Section>
  );
}
