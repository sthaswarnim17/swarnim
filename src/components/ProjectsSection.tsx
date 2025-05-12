
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  inProgress?: boolean;
  aosDelay?: number;
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  liveUrl, 
  githubUrl, 
  technologies, 
  inProgress = false,
  aosDelay = 0
}: ProjectCardProps) {
  return (
    <div 
      className="bg-card rounded-lg shadow-md overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
        />
        {inProgress && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
              In Progress
            </Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-4">
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" className="gap-2" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: "KhwopaConnect",
      description: "An e-commerce platform promoting local Bhaktapur goods, built during a hackathon.",
      image: "https://i.postimg.cc/VLmTyDBG/IMG-7149.jpg",
      githubUrl: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
      aosDelay: 100
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and experience.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://www.swarnimstha.com.np",
      githubUrl: "https://github.com/sthaswarnim17/sthaswarnim17.github.io",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      aosDelay: 200
    },
    {
      title: "Future Project",
      description: "An exciting project coming soon. Stay tuned for updates!",
      image: "https://placehold.co/600x400",
      inProgress: true,
      technologies: ["Coming Soon"],
      aosDelay: 300
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Showcasing some of my recent work and ongoing projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
