
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import AnimatedTitles from "./AnimatedTitles";
import { useEffect, useState } from "react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Add subtle parallax effect to the image
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animated scroll indicator
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 pb-16 overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")" 
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background to-background"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Content Section */}
          <div className="w-full md:w-1/2 animate-enter space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block">
                Swarnim Shrestha
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl font-medium text-muted-foreground">
              Blending code, creativity & clarity into digital experiences
            </p>
            
            {/* Animated Titles */}
            <div className="h-[46px] font-medium">
              <AnimatedTitles />
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground">
              A Computer Engineering student at Khwopa College of Engineering, 
              blending tech skills with creativity to design visually engaging digital content.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => window.open("/resume.pdf", "_blank")} 
                className="rounded-full transition-transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact} 
                className="rounded-full transition-transform hover:scale-105 shadow-md hover:shadow-purple-500/10"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center animate-enter">
            <div className="relative flex flex-col items-center">
              {/* Background glow */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-500/60 dark:from-blue-600/60 dark:to-purple-700/60 absolute -z-10 blur-3xl opacity-70 dark:opacity-90 animate-pulse"></div>
              
              {/* Profile image with glow effect */}
              <div 
                className="relative"
                style={{ transform: `translateY(${-offset * 0.3}px)` }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/40 to-white/30 blur-md dark:from-white/30 dark:to-white/20 dark:blur-lg -m-1"></div>
                
                <div className="relative">
                  {/* Second layer glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -m-0.5"></div>
                  
                  <img 
                    alt="Swarnim Shrestha" 
                    className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-xl object-cover relative z-10 border-2 border-white/20 dark:border-white/10 transition-all duration-300" 
                    src="/lovable-uploads/e4a4c165-9fe0-426d-afdb-164844acffd2.png" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="animate-bounce">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}
