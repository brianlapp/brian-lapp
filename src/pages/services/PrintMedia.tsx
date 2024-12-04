import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Palette, Layout, Printer } from "lucide-react";

const PrintMedia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Print Media Design
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Print materials like flyers, brochures, and posters are still powerful tools for getting the word out about your business. We create compelling, professional designs that will capture attention and drive action.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Print Project
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/placeholder.svg"
                    alt="Print Media Examples"
                    className="w-full h-64 object-cover rounded"
                  />
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
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">Eye-catching flyers, brochures, and posters that reflect your brand.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Branded Consistency</h3>
                <p className="text-gray-600">Perfect alignment with your overall brand identity.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Winning Layouts</h3>
                <p className="text-gray-600">Designs focused on driving action and results.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Printing</h3>
                <p className="text-gray-600">Various paper finishes and sizes to suit your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Print Media Still Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Tangible Impact</h3>
                  <p className="text-gray-600">A physical flyer or brochure leaves a lasting impression, especially when it's designed professionally.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Local Marketing</h3>
                  <p className="text-gray-600">Perfect for reaching local customers and driving foot traffic to your store or office.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Versatility</h3>
                  <p className="text-gray-600">Create promotional flyers, event handouts, or business postcards designed to meet your specific needs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Engagement</h3>
                  <p className="text-gray-600">Well-designed materials give potential customers something tangible to hold onto, increasing action rates.</p>
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

export default PrintMedia;