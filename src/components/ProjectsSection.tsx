
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play, Youtube } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  videoId?: string;
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
  youtubeUrl,
  videoId,
  technologies, 
  inProgress = false,
  aosDelay = 0
}: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoPlay = () => {
    setShowVideo(true);
  };

  return (
    <div 
      className="bg-card rounded-lg shadow-md overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="relative">
        {videoId && !showVideo ? (
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title} 
            className="w-full h-60 object-cover transition-transform hover:scale-105 duration-500 rounded-t-lg"
          />
        ) : videoId && showVideo ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-t-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        ) : (
          <>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-60 object-cover transition-transform hover:scale-105 duration-500 rounded-t-lg"
            />
            {inProgress && (
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  In Progress
                </Badge>
              </div>
            )}
          </>
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
          {youtubeUrl && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                <span>Preview</span>
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
      title: "CurioQuotes",
      description: "A simple yet stylish web app that displays random inspirational quotes. Get new random quotes from DummyJSON API.",
      image: "/lovable-uploads/e38b4bc4-a02e-418d-9890-eefefaa0a0b2.png",
      liveUrl: "https://sthaswarnim17.github.io/CurioQuotes/",
      githubUrl: "https://github.com/sthaswarnim17/CurioQuotes",
      technologies: ["HTML5", "CSS3", "JavaScript", "DummyJSON API", "GitHub Pages"],
      aosDelay: 100
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and experience.",
      image: "/lovable-uploads/27e34563-b954-4334-b11b-82cd68c44f35.png",
      liveUrl: "https://www.swarnimstha.com.np",
      githubUrl: "https://github.com/sthaswarnim17/sthaswarnim17.github.io",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      aosDelay: 200
    },
    {
      title: "Nepal Tour",
      description: "A visual tour of Nepal created for the Interact Club of Bishnu Memorial. This project was designed for international collaboration and to promote the cultural and natural beauty of Nepal.",
      image: "https://img.youtube.com/vi/mjlR46nOCZI/maxresdefault.jpg",
      youtubeUrl: "https://youtu.be/mjlR46nOCZI",
      videoId: "mjlR46nOCZI",
      technologies: ["Video Production", "Cultural Documentation", "International Collaboration"],
      aosDelay: 300
    },
    {
      title: "Festivals of Nepal",
      description: "A culturally-rich video project exploring Nepal's vibrant festivals, created to celebrate our traditions with creativity and passion.",
      image: "https://img.youtube.com/vi/qa2InEhNVDs/maxresdefault.jpg",
      youtubeUrl: "https://youtu.be/qa2InEhNVDs",
      videoId: "qa2InEhNVDs",
      technologies: ["Video Editing", "Storytelling", "Cultural Documentation"],
      aosDelay: 400
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
