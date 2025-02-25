
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
};

export const projects: Project[] = [
  {
    title: "Educ8r Classroom Sweepstakes Platform",
    description: "A full-stack web application that manages a $1,000 classroom sweepstakes campaign, featuring a viral referral system that integrates with Everflow for tracking and BeehiiV for email marketing, allowing teachers to enter and share for additional chances to win classroom supplies.",
    link: "https://educ8r.freeparentsearch.com/",
    category: "Web Application",
    image: "/lovable-uploads/893cbb33-c451-46d9-8ef5-cfc1d5f6ff67.png",
    type: "fullstack"
  },
  {
    title: "Word Flood",
    description: "A word-building game where players create words by connecting letters while racing against rising flood waters. Players aim to score points by forming longer words before time runs out. Features real-time scoring and leaderboard functionality.",
    link: "https://lovable.dev/projects/6e41d4a2-56b3-41fc-98ae-a386876dfe04",
    category: "Web Application",
    image: "/lovable-uploads/745aec88-dd2f-4d40-8bb9-27af73561b2d.png",
    type: "frontend"
  },
  {
    title: "CarlySpina.com - Holistic Healing & Spiritual Wellness",
    description: "A professional website for a certified holistic healing practitioner featuring an integrated booking system and comprehensive service offerings including Spinal Energetics, Reiki, and Akashic Records readings.",
    link: "https://carlyspina.com",
    category: "Business Website",
    image: "/lovable-uploads/67ba490d-3ff4-44ab-a0f8-eba4c9e15bac.png",
    type: "frontend"
  },
  {
    title: "BrandingLabs - Digital Marketing Agency Website",
    description: "A professional website for a digital marketing agency that offers comprehensive marketing solutions tailored for small businesses, including web development, branding, and social media services.",
    link: "https://brandinglabs.ca",
    category: "Business Website",
    image: "/lovable-uploads/241e9c3e-df7d-4f41-af03-c01b6e51f7c9.png",
    type: "frontend"
  },
  {
    title: "Melville's Plumbing Website",
    description: "A professional plumbing services website showcasing emergency and specialized plumbing services, built with React and modern web technologies. Features a comprehensive service catalog and interactive contact forms.",
    link: "https://melvillesplumbing.ca",
    category: "Business Website",
    image: "/lovable-uploads/981afe15-f86d-4e9e-a654-6155d49e5d84.png",
    type: "frontend"
  },
  {
    title: "Marley Co.",
    description: "A pre-launch landing page for a premium diaper bag backpack brand that combines style with functionality. Features a rotating gallery, premium features showcase, and integrated waitlist system offering a $10 sign-up bonus.",
    link: "https://lovable.dev/projects/8ebafb94-5265-48b8-99f1-ee9e6820f23c",
    category: "E-commerce Landing Page",
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
        <Card key={index} className="overflow-hidden bg-card border-border hover:border-border/50 transition-colors">
          <div className={cn(
            "aspect-video w-full overflow-hidden bg-muted",
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
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-primary">{project.category}</span>
            </div>
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              variant="outline" 
              className="w-full"
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
