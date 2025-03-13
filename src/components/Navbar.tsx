
import { useState, useEffect } from "react";
import Container from "./ui/Container";
import { Menu, X } from "lucide-react";

const MENU_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="font-bold text-xl md:text-2xl">
            <span className="text-primary">Dev</span>Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-lg z-50 animate-fade-in md:hidden">
            <Container>
              <div className="flex flex-col space-y-6 py-8">
                {MENU_ITEMS.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
