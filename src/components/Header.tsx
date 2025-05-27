
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-xl">
          Swarnim
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary link-underline"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary link-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#tools"
            className="text-sm font-medium hover:text-primary link-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tools");
            }}
          >
            Tools
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary link-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary link-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="ml-2"
            onClick={() => {
              window.open("/Swarnim_Resume.pdf", "_blank");
            }}
          >
            Download Resume
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isMobileMenuOpen ? "hidden" : "block"}
            >
              <path
                d="M0 1H18M0 6H18M0 11H18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isMobileMenuOpen ? "block" : "hidden"}
            >
              <path
                d="M1 1L13 13M1 13L13 1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden",
          isMobileMenuOpen
            ? "max-h-[300px] opacity-100 border-b border-border"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#tools"
            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tools");
            }}
          >
            Tools
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <Button
            variant="default"
            size="sm"
            className="mx-4"
            onClick={() => {
              window.open("/Swarnim_Resume.pdf", "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
