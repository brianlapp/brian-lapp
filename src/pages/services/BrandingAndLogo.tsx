import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const BrandingAndLogo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Branding & Logo Design</h1>
          <p className="text-lg text-gray-600 mb-12">
            Your brand is more than just a logo—it's the story, personality, and promise your business shares with the world. At SureSites, we help small businesses like yours stand out with professional branding and logo design that leaves a lasting impression.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <PenTool className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Logo Design</h3>
                <p className="text-gray-600">
                  A custom-designed logo that represents your business's unique identity, crafted to resonate with your target audience.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Palette className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Identity Creation</h3>
                <p className="text-gray-600">
                  We develop a cohesive visual identity including color palette, typography, and design elements.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Messaging Framework</h3>
                <p className="text-gray-600">
                  Create compelling taglines, value propositions, and key messaging points aligned with your goals.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-6">
              We know small businesses often start with a blank slate. Our team takes the time to understand your vision and values to create a brand identity that reflects your business's personality and sets you apart from the competition.
            </p>
          </section>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandingAndLogo;