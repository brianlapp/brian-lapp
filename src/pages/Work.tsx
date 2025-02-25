
import Navigation from "@/components/Navigation";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Footer from "@/components/Footer";

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Work with Lovable AI</h1>
          <p className="text-xl text-gray-400 mb-12">
            Explore a collection of web applications built using Lovable AI - showcasing the power of AI-assisted development.
          </p>
        </div>

        <ProjectGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Work;
