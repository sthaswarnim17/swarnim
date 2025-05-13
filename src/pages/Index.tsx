
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ToolsSection } from "@/components/ToolsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FeaturedProjectSection } from "@/components/FeaturedProjectSection";
import { useEffect } from "react";

const Index = () => {
  // Refresh AOS on component mount
  useEffect(() => {
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.refresh();
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedProjectSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
