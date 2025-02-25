
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Palette, PenTool, MessageSquare, Brush, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const BrandingAndLogo = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Design Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-[#1a1f2c] p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Branding & Logo Design
                </h1>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Your brand is more than just a logo—it's the story, personality, and promise your business shares with the world. I help small businesses like yours stand out with professional branding and logo design that leaves a lasting impression.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    Start Your Brand Journey
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Brand Preview Mock */}
                <div className="bg-[#0f172a] rounded-lg shadow-xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Your Brand</h3>
                      <p className="text-gray-200">Professional • Memorable • Unique</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-white/10"
                      />
                    ))}
                  </div>
                  <div className="h-2 w-3/4 bg-gradient-to-r from-primary to-primary/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">What I Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#1a1f2c] rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <PenTool className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Logo Design</h3>
                <p className="text-gray-200">
                  A custom-designed logo that represents your business's unique identity, crafted to resonate with your target audience.
                </p>
              </div>
              <div className="p-8 bg-[#1a1f2c] rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <Palette className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Brand Identity Creation</h3>
                <p className="text-gray-200">
                  I develop a cohesive visual identity including color palette, typography, and design elements.
                </p>
              </div>
              <div className="p-8 bg-[#1a1f2c] rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Messaging Framework</h3>
                <p className="text-gray-200">
                  Create compelling taglines, value propositions, and key messaging points aligned with your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Brand Elements Preview */}
          <section className="mb-16 bg-[#1a1f2c] rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">Brand Elements</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-primary/70 mb-3" />
                <p className="text-sm font-medium text-gray-200 text-center">Color Palette</p>
              </div>
              <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="aspect-square rounded-lg bg-[#1a1f2c] border border-white/10 flex items-center justify-center mb-3">
                  <Brush className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-200 text-center">Typography</p>
              </div>
              <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="aspect-square rounded-lg bg-[#1a1f2c] border border-white/10 flex items-center justify-center mb-3">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-200 text-center">Logo Variants</p>
              </div>
              <div className="bg-[#0f172a] p-6 rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-colors">
                <div className="aspect-square rounded-lg bg-[#1a1f2c] border border-white/10 flex items-center justify-center mb-3">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-200 text-center">Style Guide</p>
              </div>
            </div>
          </section>

          {/* Why Choose Me Section */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-white">Why Choose Me?</h2>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              I know small businesses often start with a blank slate. I take the time to understand your vision and values to create a brand identity that reflects your business's personality and sets you apart from the competition.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
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

