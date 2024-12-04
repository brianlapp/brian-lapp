import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Palette, Printer, Layers, Star } from "lucide-react";

const BusinessCards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Split Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Business Card Design & Fulfillment
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  A well-designed business card is more than a piece of paper—it's a lasting impression. We create business cards that not only look great but also get kept.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Design Today
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Business Card Preview */}
                <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-96 h-56 bg-white rounded-lg shadow-2xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">John Smith</h3>
                      <p className="text-gray-600">Creative Director</p>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>+1 (555) 123-4567</p>
                      <p>john@example.com</p>
                      <p>www.example.com</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Palette className="w-10 h-10 text-primary" />,
                  title: "Custom Card Design",
                  description: "Unique designs that capture your brand's essence."
                },
                {
                  icon: <Printer className="w-10 h-10 text-primary" />,
                  title: "Premium Printing",
                  description: "High-quality materials and finishes."
                },
                {
                  icon: <Layers className="w-10 h-10 text-primary" />,
                  title: "Brand Consistency",
                  description: "Aligned with your brand identity."
                },
                {
                  icon: <Star className="w-10 h-10 text-primary" />,
                  title: "Professional Design",
                  description: "Memorable and impactful layouts."
                }
              ].map((service, index) => (
                <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Great Business Cards Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Memorability</h3>
                    <p className="text-gray-600">A thoughtfully designed card ensures you're remembered long after the initial meeting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
                    <p className="text-gray-600">High-quality cards signal that you take your business seriously and pay attention to detail.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Versatility</h3>
                    <p className="text-gray-600">Use your cards not just for contact information, but also to highlight your services and brand.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                    <p className="text-gray-600">Even in a digital world, physical cards are easy to share and keep, making networking seamless.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
    </div>
  );
};

export default BusinessCards;