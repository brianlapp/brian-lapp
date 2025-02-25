import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Palette, PenTool, MessageSquare, Brush, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const BrandingAndLogo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Design Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Branding & Logo Design
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your brand is more than just a logo—it's the story, personality, and promise your business shares with the world. We help small businesses like yours stand out with professional branding and logo design that leaves a lasting impression.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Brand Journey
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Brand Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Your Brand</h3>
                      <p className="text-gray-500">Professional • Memorable • Unique</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200"
                      />
                    ))}
                  </div>
                  <div className="h-2 w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <PenTool className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Logo Design</h3>
                <p className="text-gray-600">
                  A custom-designed logo that represents your business's unique identity, crafted to resonate with your target audience.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Palette className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Identity Creation</h3>
                <p className="text-gray-600">
                  We develop a cohesive visual identity including color palette, typography, and design elements.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Messaging Framework</h3>
                <p className="text-gray-600">
                  Create compelling taglines, value propositions, and key messaging points aligned with your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Brand Elements Preview */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Brand Elements</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-secondary mb-3" />
                <p className="text-sm text-gray-600 text-center">Color Palette</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-square rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center mb-3">
                  <Brush className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 text-center">Typography</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-square rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center mb-3">
                  <Layers className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 text-center">Logo Variants</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-square rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center mb-3">
                  <PenTool className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 text-center">Style Guide</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8">
              We know small businesses often start with a blank slate. Our team takes the time to understand your vision and values to create a brand identity that reflects your business's personality and sets you apart from the competition.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandingAndLogo;