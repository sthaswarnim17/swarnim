
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  delay?: string;
  aosDelay?: number;
}

function ExperienceItem({ 
  title, 
  organization, 
  period, 
  description, 
  delay = "0s",
  aosDelay = 0 
}: ExperienceItemProps) {
  return (
    <div 
      className="relative pl-8 pb-12" 
      style={{ animationDelay: delay }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full"></div>
      
      {/* Vertical line */}
      <div className="absolute left-[7.5px] top-5 bottom-0 w-[1px] bg-border dark:bg-muted"></div>
      
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-muted-foreground">{organization}</p>
          <span className="text-muted-foreground">•</span>
          <Badge variant="outline">{period}</Badge>
        </div>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Graphic Designer",
      organization: "Hult Prize at Khwopa College of Engineering",
      period: "2024-2025",
      description: "Created visual assets for the Hult Prize competition at Khwopa College of Engineering.",
      delay: "0s",
      aosDelay: 100
    },
    {
      title: "Secretary",
      organization: "Interact Club of Bishnu Memorial",
      period: "2022-2023",
      description: "Managing club communications and supporting leadership initiatives.",
      delay: "0.1s",
      aosDelay: 200
    },
    {
      title: "IT Head",
      organization: "Interact Club of Bishnu Memorial",
      period: "2021-2022",
      description: "Led digital initiatives and managed technical aspects of club events.",
      delay: "0.2s",
      aosDelay: 300
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Experience & Involvement</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            My journey through various roles and organizations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={`${exp.title}-${exp.organization}`}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              delay={exp.delay}
              aosDelay={exp.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
