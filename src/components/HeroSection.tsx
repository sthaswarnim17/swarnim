
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import AnimatedTitles from "./AnimatedTitles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";

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
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 animate-gradient"></div>
      </div>
      
      {/* Floating particles background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="particles-container">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--size': `${Math.random() * 10 + 5}px`,
                '--duration': `${Math.random() * 20 + 10}s`,
                '--delay': `${Math.random() * 5}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")" 
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background to-background"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          {/* Content Section */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
              variants={fadeInUp}
            >
              Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block">
                Swarnim Shrestha
              </span>
            </motion.h1>
            
            {/* Tagline with typewriter effect */}
            <motion.p 
              className="text-lg md:text-xl font-medium text-muted-foreground"
              variants={fadeInUp}
            >
              <TypewriterEffect text="Blending code, creativity & clarity into digital experiences" delay={30} />
            </motion.p>
            
            {/* Animated Titles */}
            <motion.div 
              className="h-[46px] font-medium"
              variants={fadeInUp}
            >
              <AnimatedTitles />
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              A Computer Engineering student at Khwopa College of Engineering, 
              blending tech skills with creativity to design visually engaging digital content.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                onClick={() => window.open("/resume.pdf", "_blank")} 
                className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-600 dark:hover:bg-blue-700"
              >
                <Download size={18} className="mr-2" /> 
                <span className="relative">
                  Download Resume
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact} 
                className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/20 hover:bg-purple-100/50 dark:hover:bg-purple-900/30"
              >
                <Mail size={18} className="mr-2" /> 
                <span className="relative">
                  Contact Me
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
            variants={fadeInUp}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex flex-col items-center">
              {/* Background glow */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400/60 to-purple-500/60 dark:from-blue-600/60 dark:to-purple-700/60 absolute -z-10 blur-3xl opacity-70 dark:opacity-90 animate-pulse"></div>
              
              {/* Profile image with glow and hover effect */}
              <div 
                className="relative transition-transform duration-500 hover:scale-[1.02] group"
                style={{ transform: `translateY(${-offset * 0.3}px)` }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/40 to-white/30 blur-md dark:from-white/30 dark:to-white/20 dark:blur-lg -m-1 transition-opacity duration-300 group-hover:opacity-80"></div>
                
                <div className="relative group">
                  {/* Second layer glow that intensifies on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -m-0.5 transition-all duration-300 group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:blur-md"></div>
                  
                  {/* Image with hover effect */}
                  <img 
                    alt="Swarnim Shrestha" 
                    className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-xl object-cover relative z-10 border-2 border-white/20 dark:border-white/10 transition-all duration-500 group-hover:border-white/40 dark:group-hover:border-white/20"
                    src="/lovable-uploads/e4a4c165-9fe0-426d-afdb-164844acffd2.png" 
                    style={{ 
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with bouncing animation */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500 ${isVisible ? 'opacity-80' : 'opacity-0'}`}
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 0.8 : 0, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm font-medium mb-2 text-muted-foreground">Scroll Down</span>
        <div className="animate-bounce">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
}
