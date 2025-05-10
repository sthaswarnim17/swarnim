
import { Download, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "./AnimatedTitles";
import { GradientButton } from "./GradientButton";
import { ParticlesBackground } from "./ParticlesBackground";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Track mouse for subtle image movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      {/* Interactive particle background */}
      <ParticlesBackground />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-800/10 dark:from-blue-900/20 dark:to-purple-900/20 animate-gradient"></div>
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
            
            {/* Animated Titles with typewriter effect */}
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
              <GradientButton 
                size="lg" 
                onClick={() => window.open("/swarnim/resume.pdf", "_blank")}
                gradientFrom="from-blue-600" 
                gradientTo="to-blue-800"
                pulseColor="blue-500"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </GradientButton>
              
              <GradientButton 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact} 
                className="bg-none border border-purple-300/20 hover:bg-purple-50/10 dark:hover:bg-purple-900/30 transition-all duration-300"
                gradientFrom="from-purple-500/0"
                gradientTo="to-purple-700/0"
                pulseColor="purple-500"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </GradientButton>
            </motion.div>
          </motion.div>
          
          {/* Image Section with updated image URL */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
            variants={fadeInUp}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex flex-col items-center">
              {/* Background glow */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 dark:from-blue-600/60 dark:to-purple-700/60 absolute -z-10 blur-3xl opacity-70 dark:opacity-90 animate-pulse"></div>
              
              {/* Profile image with glow and hover effect */}
              <motion.div 
                className="relative transition-transform duration-500 hover:scale-[1.02] group"
                style={{ 
                  transform: `translateY(${-offset * 0.3}px) translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px)` 
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/40 to-white/30 blur-md dark:from-white/30 dark:to-white/20 dark:blur-lg -m-1 transition-opacity duration-300 group-hover:opacity-80"></div>
                
                <div className="relative group">
                  {/* Second layer glow that intensifies on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -m-0.5 transition-all duration-300 group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:blur-md"></div>
                  
                  {/* Image with hover effect - updated with requested image link */}
                  <img 
                    alt="Swarnim Shrestha" 
                    className="w-72 h-72 md:w-96 md:h-96 rounded-2xl shadow-xl object-cover relative z-10 border-2 border-white/20 dark:border-white/10 transition-all duration-500 group-hover:border-white/40 dark:group-hover:border-white/20"
                    src="https://i.postimg.cc/hGN1qjnK/Swarnim-3.png"
                    style={{ 
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10 pointer-events-none"></div>
                </div>
              </motion.div>
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
