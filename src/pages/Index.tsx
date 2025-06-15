
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-200 ease-in-out">
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
