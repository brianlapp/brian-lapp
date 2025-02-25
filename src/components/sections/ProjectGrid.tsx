
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI-Powered Portfolio",
    description: "A modern portfolio website built with Lovable AI, featuring dark mode, responsive design, and seamless animations.",
    image: "/grid.svg",
    category: "Personal Website",
    link: "https://lovable.ai",
  },
  {
    title: "Interactive Web Apps",
    description: "Creating dynamic web applications with real-time AI assistance and code generation.",
    image: "/grid.svg",
    category: "Web Development",
    link: "https://lovable.ai",
  },
  {
    title: "Responsive Designs",
    description: "Building beautiful, responsive interfaces using Tailwind CSS and shadcn/ui components.",
    image: "/grid.svg",
    category: "UI/UX Design",
    link: "https://lovable.ai",
  }
];

const ProjectGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-800">
        <div className="aspect-video w-full overflow-hidden bg-gray-800 flex items-center justify-center">
          <Code className="w-12 h-12 text-gray-600" />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-primary">{project.category}</span>
          </div>
          <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link 
            to={project.link} 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default ProjectGrid;
