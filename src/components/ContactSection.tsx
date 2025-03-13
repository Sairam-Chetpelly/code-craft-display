
import { FormEvent, useState } from "react";
import Section from "./ui/Section";
import AnimatedText from "./ui/AnimatedText";
import GlassCard from "./ui/GlassCard";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <AnimatedText>
            <span className="text-sm font-medium text-primary mb-2 block">
              Get In Touch
            </span>
          </AnimatedText>
          <AnimatedText delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
          </AnimatedText>
          <AnimatedText delay={200} className="mb-8">
            <p className="text-muted-foreground">
              I'm currently available for freelance work and full-time positions. 
              If you're interested in working together or have any questions, 
              feel free to reach out.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={300} className="space-y-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Phone</h3>
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={400} className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </AnimatedText>
        </div>
        
        <AnimatedText delay={400}>
          <GlassCard className="md:ml-auto">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-primary text-primary-foreground rounded-md py-2 px-4 font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </AnimatedText>
      </div>
    </Section>
  );
}
