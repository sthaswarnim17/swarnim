
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import AnimatedTitles from "./AnimatedTitles";

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
            <h1 className="text-4xl md:text-5xl mb-4 my-[14px] py-0 mx-0 px-0 font-extrabold lg:text-5xl">
              Hi! I'm <span className="text-primary dark:text-blue-400 py-[8px] font-extrabold">
                Swarnim Shrestha
              </span>
            </h1>
            <p className="flex items-center justify-center h-[46px] mb-4 font-medium" style={{
            minHeight: "46px",
            padding: 0,
            margin: 0
          }}>
              <AnimatedTitles />
            </p>
            <p className="mb-8 text-base md:text-lg my-0 py-[25px]">
              A Computer Engineering student at Khwopa College of Engineering, blending tech skills with creativity to design visually engaging digital content.
            </p>
            <div className="flex gap-4 mx-0 my-0 px-0 py-0">
              <Button size="lg" onClick={() => window.open("/resume.pdf", "_blank")} className="gap-2 py-[3px] px-[18px]">
                <Download size={18} /> Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="gap-2 mx-0 my-0 px-[42px] py-[21px]">
                <ArrowDown size={18} /> Contact Me
              </Button>
            </div>
          </div>
          <div style={{
          animationDelay: "0.2s"
        }} className="w-full md:w-1/2 flex flex-col items-center justify-center animate-enter px-0 my-0 py-[16px]">
            <div className="relative flex flex-col items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 absolute -z-10 blur-2xl opacity-20 animate-pulse"></div>
              <img alt="Swarnim Shrestha" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-xl object-cover" src="/lovable-uploads/e4a4c165-9fe0-426d-afdb-164844acffd2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}
