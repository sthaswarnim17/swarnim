
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, PenTool, Film } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: string;
  aosDelay?: number;
}

function SkillCard({ title, icon, skills, delay = "0s", aosDelay = 0 }: SkillCardProps) {
  return (
    <Card 
      className="overflow-hidden" 
      style={{ animationDelay: delay }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-12 h-12 mb-3 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js (basic)"],
      delay: "0s",
      aosDelay: 100
    },
    {
      title: "Design",
      icon: <PenTool className="w-8 h-8" />,
      skills: ["Figma", "Canva", "UI/UX", "Photoshop (basic)"],
      delay: "0.1s",
      aosDelay: 200
    },
    {
      title: "Video Editing",
      icon: <Film className="w-8 h-8" />,
      skills: ["Adobe Premiere Pro", "DaVinci Resolve", "Filmora"],
      delay: "0.2s",
      aosDelay: 300
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
              aosDelay={category.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
