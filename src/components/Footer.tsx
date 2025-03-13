
import Container from "./ui/Container";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="font-bold text-xl">
              <span className="text-primary">Dev</span>Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Crafting exceptional digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
