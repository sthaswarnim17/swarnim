import { Download, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "./AnimatedTitles";
import { GradientButton } from "./GradientButton";
import { ParticlesBackground } from "./ParticlesBackground";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();
  
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
  
  // Track mouse for subtle image movement (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    
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
  }, [isMobile]);

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
      
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          {/* Content Section - Mobile Optimized */}
          <motion.div 
            className="w-full md:w-1/2 space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1 mt-6 md:mt-0"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              variants={fadeInUp}
            >
              Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block">
                Swarnim Shrestha
              </span>
            </motion.h1>
            
            {/* Animated Titles with typewriter effect */}
            <motion.div 
              className="h-[36px] sm:h-[46px] font-medium"
              variants={fadeInUp}
            >
              <AnimatedTitles />
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0"
              variants={fadeInUp}
            >
              A Computer Engineering student at Khwopa College of Engineering, 
              blending tech skills with creativity to design visually engaging digital content.
            </motion.p>
            
            {/* Added additional bottom padding for mobile - fixed spacing issue */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 pb-12 sm:pb-0 w-full"
              variants={fadeInUp}
            >
              <GradientButton 
                size="lg" 
                onClick={() => window.open("/resume.pdf", "_blank")}
                gradientFrom="from-blue-600" 
                gradientTo="to-blue-800"
                pulseColor="blue-500"
                className="w-full sm:w-auto mb-2 sm:mb-0"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </GradientButton>
              
              <GradientButton 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact} 
                className="w-full sm:w-auto bg-none border border-purple-300/20 hover:bg-purple-50/10 dark:hover:bg-purple-900/30 transition-all duration-300 mb-2 sm:mb-0"
                gradientFrom="from-purple-500/0"
                gradientTo="to-purple-700/0"
                pulseColor="purple-500"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </GradientButton>
            </motion.div>
          </motion.div>
          
          {/* Image Section with updated image URL - Mobile Optimized */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center justify-center order-1 md:order-2"
            variants={fadeInUp}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex flex-col items-center">
              {/* Background glow - enhanced for mobile */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 dark:from-blue-600/60 dark:to-purple-700/60 absolute -z-10 blur-3xl opacity-70 dark:opacity-90 animate-pulse"></div>
              
              {/* Profile image with animated glow effect */}
              <motion.div 
                className="relative transition-transform duration-500 hover:scale-[1.02] group"
                style={{ 
                  transform: isMobile ? undefined : `translateY(${-offset * 0.3}px) translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px)` 
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced glow effect - optimized for mobile */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/40 to-white/30 blur-md dark:from-white/30 dark:to-white/20 dark:blur-lg -m-1 transition-opacity duration-300 group-hover:opacity-80"></div>
                
                <div className="relative group">
                  {/* Second layer glow that intensifies on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -m-0.5 transition-all duration-300 group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:blur-md"></div>
                  
                  {/* Image with hover effect - updated with requested image link */}
                  <img 
                    alt="Swarnim Shrestha" 
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-xl object-cover relative z-10 border-2 border-white/20 dark:border-white/10 transition-all duration-500 group-hover:border-white/40 dark:group-hover:border-white/20"
                    src="https://i.postimg.cc/hGN1qjnK/Swarnim-3.png"
                    style={{ 
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                  
                  {/* Animated border effect for mobile enhancement */}
                  <div className="absolute inset-0 rounded-2xl z-20 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 bg-[length:200%_100%] animate-[gradient-shift_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-70"></div>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10 pointer-events-none"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with improved mobile positioning and increased spacing */}
      <motion.div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500 ${isVisible ? 'opacity-80' : 'opacity-0'} z-20 mt-16 sm:mt-0`}
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
        <span className="text-sm font-medium mb-1 sm:mb-2 text-muted-foreground">Scroll Down</span>
        <div className="animate-bounce bg-primary/10 p-2 rounded-full shadow-sm">
          <ArrowDown size={isMobile ? 20 : 24} className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
}
