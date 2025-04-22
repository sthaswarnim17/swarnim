import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="min-h-screen flex items-center section-padding pt-24 pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 animate-enter">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi! I'm <span className="text-primary dark:text-blue-400">Swarnim Shrestha</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 text-muted-foreground">
              Graphic Designer | Creative Thinker | Visual Storyteller
            </p>
            <p className="mb-8 text-base md:text-lg">
              Currently pursuing Computer Engineering at Khwopa College of Engineering, 
              Swarnim blends technical knowledge with artistic skills to create compelling 
              visual content across digital platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => window.open("/resume.pdf", "_blank")}>
                <Download size={18} /> Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={scrollToContact}>
                <ArrowDown size={18} /> Contact Me
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-enter" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 absolute -z-10 blur-2xl opacity-20 animate-pulse"></div>
              <img alt="Swarnim Shrestha" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-xl object-cover" src="/lovable-uploads/e4a4c165-9fe0-426d-afdb-164844acffd2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}