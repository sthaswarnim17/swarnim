import React from 'react';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding pt-16 pb-16 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://i.postimg.cc/VLmTyDBG/IMG-7149.jpg" 
              alt="Project" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 1</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 2</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 3</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 4</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 5</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Project Title 6</h3>
              <p className="text-sm text-muted-foreground">Brief description of the project. Highlight key features and technologies used.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
