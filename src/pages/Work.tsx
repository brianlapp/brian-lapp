import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Work = () => {
  const projects = [
    {
      title: "BrandingLabs - Digital Marketing Agency Website",
      description: "A professional website for a digital marketing agency that offers comprehensive marketing solutions tailored for small businesses, including web development, branding, and social media services. The site features a modern, responsive design with detailed service pages and clear calls-to-action.",
      link: "https://brandinglabs.ca",
      category: "Business Website",
      image: "/lovable-uploads/241e9c3e-df7d-4f41-af03-c01b6e51f7c9.png"
    },
    {
      title: "Agency Website",
      description: "A professional agency website with service packages, pricing information, and contact forms. Built using React and modern UI components.",
      link: "https://lovable.dev/brian-lapp/agency",
      category: "Business Website"
    },
    {
      title: "Interactive Dashboard",
      description: "A responsive dashboard interface with data visualization, user authentication, and real-time updates using React Query.",
      link: "https://lovable.dev/brian-lapp/dashboard",
      category: "Web Application"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My Work
          </h1>
          <p className="text-xl text-gray-400">
            Explore my recent projects built with React, Tailwind CSS, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <div className={cn(
                "aspect-video w-full overflow-hidden bg-gray-800",
                !project.image && "flex items-center justify-center"
              )}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Code className="w-12 h-12 text-gray-600" />
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
                <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-gray-800 text-white hover:bg-gray-800"
                >
                  <Link to={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
