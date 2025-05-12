
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Html, Css, Javascript, React, Figma, Image, Video, Palette, Film, Layers } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: string;
}

function SkillCard({ title, icon, skills, delay = "0s" }: SkillCardProps) {
  return (
    <Card className="animate-enter overflow-hidden" style={{ animationDelay: delay }}>
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
      icon: <Html className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js (basic)"],
      delay: "0s",
    },
    {
      title: "Design",
      icon: <Figma className="w-8 h-8" />,
      skills: ["Figma", "Canva", "UI/UX", "Photoshop (basic)"],
      delay: "0.1s",
    },
    {
      title: "Video Editing",
      icon: <Video className="w-8 h-8" />,
      skills: ["Adobe Premiere Pro", "DaVinci Resolve", "Filmora"],
      delay: "0.2s",
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-enter">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-enter" style={{ animationDelay: "0.1s" }}>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
