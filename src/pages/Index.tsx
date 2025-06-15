
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "min-h-screen transition-colors duration-200 ease-in-out",
      theme === "dark" 
        ? "bg-gray-900 text-white" 
        : "bg-white text-gray-900"
    )}>
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ToolsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
