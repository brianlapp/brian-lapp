import Navigation from "@/components/Navigation";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

        <ProjectGrid />

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

      <Footer />
    </div>
  );
};

export default Work;