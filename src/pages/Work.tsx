import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
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

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover how we've helped small businesses achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        {/* Projects Grid */}
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

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that will help your business reach new heights.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SureSites</h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
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
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
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