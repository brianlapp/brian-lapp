import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "Local Restaurant Website",
    description: "Modern website with online ordering system for a family-owned restaurant",
    image: "/lovable-uploads/7d075a52-1332-4fb3-a7c2-1ee21e93afd8.png",
    category: "Web Development",
  },
  {
    title: "Accounting Firm Portal",
    description: "Client management dashboard for a growing accounting practice",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    category: "Web Development",
  },
  {
    title: "Dental Practice Website",
    description: "Patient-focused website with appointment scheduling system",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Web Design",
  },
  {
    title: "Real Estate CMS",
    description: "Custom content management system for a local real estate agent to manage their listings",
    image: "/lovable-uploads/498af03f-ee74-488c-a3cb-5d0ee42de219.png",
    category: "Web Development",
  },
  {
    title: "Law Firm Website",
    description: "Professional website with client portal and case management",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Web Development",
  },
  {
    title: "Retail Digital Marketing",
    description: "Social media integration, email marketing setup, and analytics implementation",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    category: "Digital Marketing",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-400">{project.category}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] hover:from-[#0284C7] hover:to-[#2563EB]"
              >
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SureSites</h3>
              <p className="text-gray-400">
                Creating stunning digital experiences that drive results.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: hello@suresites.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SureSites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Work;
