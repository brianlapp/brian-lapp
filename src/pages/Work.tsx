import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectGrid, { projects } from "../components/sections/ProjectGrid";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Cpu, BrainCircuit, Sparkles, LineChart } from "lucide-react";

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projectCounts = {
    all: projects.length,
    ai: projects.filter(p => p.type === 'ai').length,
    fullstack: projects.filter(p => p.type === 'fullstack').length,
    frontend: projects.filter(p => p.type === 'frontend').length,
    data: projects.filter(p => p.type === 'data').length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI & Full-Stack Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of my work building AI-powered applications, data pipelines, and full-stack solutions that solve real business problems.
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  All <span className="text-xs opacity-70">({projectCounts.all})</span>
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4" /> AI <span className="text-xs opacity-70">({projectCounts.ai})</span>
                </TabsTrigger>
                <TabsTrigger value="fullstack" className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Full-Stack <span className="text-xs opacity-70">({projectCounts.fullstack})</span>
                </TabsTrigger>
                <TabsTrigger value="frontend" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Frontend <span className="text-xs opacity-70">({projectCounts.frontend})</span>
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center gap-2">
                  <LineChart className="w-4 h-4" /> Data <span className="text-xs opacity-70">({projectCounts.data})</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <ProjectGrid />
              </TabsContent>
              
              <TabsContent value="ai">
                <ProjectGrid filter="ai" />
              </TabsContent>
              
              <TabsContent value="fullstack">
                <ProjectGrid filter="fullstack" />
              </TabsContent>
              
              <TabsContent value="frontend">
                <ProjectGrid filter="frontend" />
              </TabsContent>
              
              <TabsContent value="data">
                <ProjectGrid filter="data" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Looking for a Full-Stack AI Developer?</h2>
            <p className="text-muted-foreground mb-8">
              I specialize in building intelligent applications that leverage the latest in AI/ML technology while maintaining solid software engineering practices.
            </p>
            <Button size="lg" asChild>
              <a href="/contact" className="text-lg px-8">Let's Work Together</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Work;