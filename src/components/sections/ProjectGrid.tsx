
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Code, ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";
import { Project } from "../../types/project";
import { projects } from "../../data/projects";

interface ProjectGridProps {
  filter?: 'ai' | 'fullstack' | 'frontend' | 'data';
}

const ProjectGrid = ({ filter }: ProjectGridProps) => {
  const filteredProjects = filter 
    ? projects.filter(project => project.type === filter)
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Card key={index} className="overflow-hidden bg-muted hover:bg-muted/80 transition-colors group border-2 border-muted-foreground/10 hover:border-primary/20">
          <div className={cn(
            "aspect-video w-full overflow-hidden bg-background relative group-hover:opacity-95 transition-opacity",
            !project.image && "flex items-center justify-center"
          )}>
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <Code className="w-12 h-12 text-muted-foreground" />
            )}
          </div>
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-primary">{project.category}</span>
              {project.tags?.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <CardTitle className="text-xl leading-tight text-foreground">{project.title}</CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              variant="outline" 
              className="w-full hover:bg-primary/10 hover:border-primary/30 text-foreground border-muted-foreground/20"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
