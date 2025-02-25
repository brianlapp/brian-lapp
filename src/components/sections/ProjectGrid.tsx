
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../../components/ui/card";
import { Code, ExternalLink, GitBranch, Star, Cpu, Sparkles, Rocket, BrainCircuit, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  tags: string[];
  stats?: {
    stars?: number;
    impact?: string;
    performance?: string;
  };
  type: "ai" | "fullstack" | "frontend" | "data";
};

export const projects: ProjectType[] = [
  {
    title: "Neural Search Engine",
    description: "AI-powered search interface with semantic understanding and dynamic query reformulation.",
    image: "/grid.svg",
    category: "AI Project",
    tags: ["React", "Python", "TensorFlow", "NLP"],
    link: "https://github.com/brian-lapp/neural-search",
    stats: {
      stars: 120,
      impact: "50% better results",
      performance: "98ms latency"
    },
    type: "ai"
  },
  {
    title: "ML Model Deployment Platform",
    description: "End-to-end platform for training, testing, and deploying ML models to production.",
    image: "/grid.svg", 
    category: "MLOps",
    tags: ["Python", "Docker", "Kubernetes", "TensorFlow"],
    link: "https://github.com/brian-lapp/ml-platform",
    stats: {
      stars: 87,
      impact: "10x deployment speed",
      performance: "99.9% uptime"
    },
    type: "ai"
  },
  {
    title: "Realtime Data Pipeline",
    description: "Scalable data processing pipeline with real-time analytics and visualization.",
    image: "/grid.svg",
    category: "Data Engineering",
    tags: ["Apache Kafka", "Spark", "React", "TypeScript"],
    link: "https://github.com/brian-lapp/data-pipeline",
    stats: {
      stars: 45,
      impact: "5TB daily processing",
      performance: "Sub-second latency"
    },
    type: "data"
  },
  {
    title: "AI Code Assistant SDK",
    description: "Developer toolkit for integrating AI assistants into any IDE or development environment.",
    image: "/grid.svg",
    category: "Developer Tools",
    tags: ["TypeScript", "Python", "REST API", "LLM Integration"],
    link: "https://github.com/brian-lapp/code-assistant-sdk",
    stats: {
      stars: 210,
      impact: "Used by 20+ companies",
      performance: "200ms response time"
    },
    type: "fullstack"
  },
  {
    title: "Enterprise Dashboard",
    description: "Responsive enterprise dashboard with real-time analytics and ML-powered insights.",
    image: "/grid.svg",
    category: "Web Application",
    tags: ["React", "TypeScript", "D3.js", "Python Backend"],
    link: "https://github.com/brian-lapp/enterprise-dashboard",
    stats: {
      stars: 75,
      impact: "30% decision improvement",
      performance: "3.2s load time"
    },
    type: "frontend"
  },
  {
    title: "Voice Sentiment Analyzer",
    description: "AI-powered voice analysis tool that extracts sentiment, emotion and key topics from audio.",
    image: "/grid.svg",
    category: "AI Project",
    tags: ["Python", "TensorFlow", "React", "WebAudio API"],
    link: "https://github.com/brian-lapp/voice-sentiment",
    stats: {
      stars: 156,
      impact: "92% accuracy rate",
      performance: "Real-time processing"
    },
    type: "ai"
  }
];

const getIconForProjectType = (type: string) => {
  switch(type) {
    case 'ai': return <BrainCircuit className="w-5 h-5" />;
    case 'fullstack': return <Cpu className="w-5 h-5" />;
    case 'frontend': return <Sparkles className="w-5 h-5" />;
    case 'data': return <LineChart className="w-5 h-5" />;
    default: return <Code className="w-5 h-5" />;
  }
};

type ProjectGridProps = {
  filter?: string;
  limit?: number;
}

const ProjectGrid = ({ filter, limit }: ProjectGridProps) => {
  let filteredProjects = filter 
    ? projects.filter(p => p.type === filter || p.tags.includes(filter))
    : projects;
    
  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Card key={index} className="overflow-hidden group hover:shadow-md hover:shadow-primary/10 transition-all duration-300 bg-card border-gray-800 h-full flex flex-col">
          <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {getIconForProjectType(project.type)}
          </div>
          <CardHeader className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-muted text-primary border-primary/20">
                {project.category}
              </Badge>
            </div>
            <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
            <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary-foreground text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          {project.stats && (
            <CardContent className="pt-0">
              <div className="grid grid-cols-3 gap-2 my-2 text-xs">
                {project.stats.stars && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span>{project.stats.stars}</span>
                  </div>
                )}
                {project.stats.impact && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Rocket className="w-3 h-3 text-primary" />
                    <span>{project.stats.impact}</span>
                  </div>
                )}
                {project.stats.performance && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <LineChart className="w-3 h-3 text-accent" />
                    <span>{project.stats.performance}</span>
                  </div>
                )}
              </div>
            </CardContent>
          )}
          <CardFooter className="pt-0 mt-auto">
            <Link 
              to={project.link} 
              target="_blank"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
