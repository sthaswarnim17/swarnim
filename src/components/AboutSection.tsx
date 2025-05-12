
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-enter">
            <div className="relative">
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="About Swarnim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary rounded-xl flex items-center justify-center p-6 shadow-lg dark:bg-primary/20 backdrop-blur">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-enter" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              I'm Swarnim Shrestha, a passionate Computer Engineering student at Khwopa College of Engineering. My journey combines technology with creativity, allowing me to explore the intersection of innovation and design.
            </p>
            <p className="text-lg mb-6">
              I love front-end development, UI/UX design, and creative media production including video editing and graphic design. The process of bringing ideas to life through visual storytelling fascinates me.
            </p>
            <p className="text-lg mb-6">
              As someone who is creative, curious, and collaborative, I thrive in environments where I can work with others to solve problems and create meaningful experiences through technology and design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
