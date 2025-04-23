
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  delay?: string;
}

function ProjectCard({ title, description, image, delay = "0s" }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden animate-enter" style={{ animationDelay: delay }}>
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Graphics Designer – Hult Prize 2024",
      description: "Graphics Designer for Hult Prize at Khwopa College of Engineering. Created posters, certificates, social media creatives, and event backdrops—elevating the event's visual identity and impact.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      delay: "0s",
    },
    {
      title: "Social Media Campaign",
      description: "Designed a cohesive series of social media posts for a brand awareness campaign.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      delay: "0.1s",
    },
    {
      title: "Branding Project",
      description: "Developed a complete brand identity including logo, color palette, and style guidelines.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      delay: "0.2s",
    },
    {
      title: "Video Production",
      description: "Created and edited a promotional video showcasing student life at Khwopa College.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      delay: "0.3s",
    },
    {
      title: "UI/UX Design",
      description: "Designed a user-friendly interface for a student management application.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      delay: "0.4s",
    },
    {
      title: "Digital Illustration",
      description: "Created a series of digital illustrations for an educational platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      delay: "0.5s",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-enter">Recent Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-enter" style={{ animationDelay: "0.1s" }}>
            A quick peek into my recent design work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
