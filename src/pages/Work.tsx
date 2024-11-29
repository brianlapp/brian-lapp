import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online store with seamless checkout experience",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Web Development",
  },
  {
    title: "Tech Startup Website",
    description: "Clean and professional corporate website design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Web Design",
  },
  {
    title: "AI Integration Platform",
    description: "Advanced machine learning dashboard interface",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Web Development",
  },
  {
    title: "Mobile App Website",
    description: "Landing page for innovative mobile application",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    category: "UI/UX Design",
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics and management platform",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Web Development",
  },
  {
    title: "Corporate Portal",
    description: "Enterprise-level business management system",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    category: "Web Development",
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
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-sm font-medium text-blue-400">{project.category}</p>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
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