import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "Local Restaurant Website",
    description: "Complete digital presence overhaul including website, social media management, and local SEO optimization",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Full Service Digital Marketing",
  },
  {
    title: "Accounting Firm Growth",
    description: "Lead generation campaign and content marketing strategy that increased qualified leads by 150%",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Lead Generation",
  },
  {
    title: "Dental Practice Marketing",
    description: "Comprehensive digital marketing campaign resulting in 200% increase in new patient appointments",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Digital Marketing",
  },
  {
    title: "Real Estate Marketing",
    description: "Social media strategy and content creation that doubled property viewing requests",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Social Media Marketing",
  },
  {
    title: "Law Firm Digital Presence",
    description: "Website redesign and SEO optimization that increased organic traffic by 180%",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "SEO & Web Design",
  },
  {
    title: "Retail Digital Strategy",
    description: "Integrated digital marketing campaign that increased online sales by 250%",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Digital Strategy",
  },
];

const ProjectGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    {projects.map((project, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-primary">{project.category}</span>
          </div>
          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
          <CardDescription className="text-gray-600">{project.description}</CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>
);

export default ProjectGrid;