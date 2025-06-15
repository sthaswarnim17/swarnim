
import { useState, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function FeaturedProjectSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // YouTube video configuration
  const videoId = "qa2InEhNVDs";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://youtu.be/${videoId}`;

  const handlePlayVideo = () => {
    if (videoRef.current) {
      // If video is not playing, play it
      if (!isPlaying) {
        videoRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="featured-project" className="section-padding bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎬 Festivals of Nepal – Project Showcase
          </h2>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* YouTube video with responsive aspect ratio */}
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  {!isPlaying ? (
                    <>
                      {/* Thumbnail preview with play button */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center cursor-pointer group"
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                        onClick={handlePlayVideo}
                      >
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                            <svg 
                              className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        {/* Gradient overlay for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      </div>
                    </>
                  ) : (
                    <iframe
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                      title="Festivals of Nepal – Project Showcase"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </AspectRatio>
              </div>
              
              {/* Video description */}
              <div className="p-6 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  A cultural documentary video created as part of my contribution to the Interact Club of Bishnu Memorial. 
                  It highlights Nepal's diverse and vibrant festivals through storytelling, visuals, and editing — 
                  blending my technical and creative skills.
                </p>
                
                {/* YouTube link button */}
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span>Watch on YouTube</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
