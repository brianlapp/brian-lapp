import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Code, ExternalLink } from "lucide-react";
import { cn } from "../../lib/utils";

export type Project = {
  title: string;
  description: string;
  link: string;
  category: string;
  image: string;
  type: 'ai' | 'fullstack' | 'frontend' | 'data';
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Educ8r Classroom Sweepstakes",
    description: "A $1,000 classroom sweepstakes platform featuring a viral referral system, Everflow tracking integration, and BeehiiV email marketing. Built to help teachers win classroom supplies through social sharing.",
    link: "https://educ8r.freeparentsearch.com/",
    category: "Web Application",
    image: "/lovable-uploads/893cbb33-c451-46d9-8ef5-cfc1d5f6ff67.png",
    type: "fullstack",
    tags: ["Lead Generation"]
  },
  {
    title: "Word Flood Game",
    description: "An engaging word-building game where players create words from connecting letters while racing against rising flood waters. Features real-time scoring and leaderboard functionality.",
    link: "https://lovable.dev/projects/6e41d4a2-56b3-41fc-98ae-a386876dfe04",
    category: "Interactive Game",
    image: "/lovable-uploads/745aec88-dd2f-4d40-8bb9-27af73561b2d.png",
    type: "frontend",
    tags: ["SEO", "Engagement"]
  },
  {
    title: "CarlySpina.com",
    description: "Professional website for a certified holistic healing practitioner, featuring an integrated booking system for Spinal Energetics, Reiki, and Akashic Records readings.",
    link: "https://carlyspina.com",
    category: "Business Website",
    image: "/lovable-uploads/67ba490d-3ff4-44ab-a0f8-eba4c9e15bac.png",
    type: "frontend"
  },
  {
    title: "BrandingLabs",
    description: "Modern website for a digital marketing agency offering comprehensive solutions for small businesses, including web development, branding, and social media services.",
    link: "https://brandinglabs.ca",
    category: "Business Website",
    image: "/lovable-uploads/241e9c3e-df7d-4f41-af03-c01b6e51f7c9.png",
    type: "frontend"
  },
  {
    title: "Melville's Plumbing",
    description: "Professional plumbing services website showcasing emergency and specialized services. Features a comprehensive service catalog and interactive contact forms.",
    link: "https://melvillesplumbing.ca",
    category: "Business Website",
    image: "/lovable-uploads/981afe15-f86d-4e9e-a654-6155d49e5d84.png",
    type: "frontend"
  },
  {
    title: "Marley Co.",
    description: "Pre-launch landing page for a premium diaper bag brand. Features a rotating product gallery, features showcase, and waitlist system with $10 sign-up bonus.",
    link: "https://lovable.dev/projects/8ebafb94-5265-48b8-99f1-ee9e6820f23c",
    category: "E-commerce",
    image: "/lovable-uploads/5672dd26-411f-48d7-9d72-cb0529a45bbf.png",
    type: "frontend"
  }
];

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
