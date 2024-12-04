import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Website Development</h1>
          <p className="text-lg text-gray-600 mb-12">
            Your website is the cornerstone of your online presence—it's where potential customers go to learn about your business, explore your services, and connect with you. At SureSites, we specialize in building professional, easy-to-navigate websites tailored to small businesses just starting out.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
                <p className="text-gray-600">
                  A clean, modern design customized to your business, featuring up to 5 pages including Home, Services, and Contact.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Server className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Full Setup</h3>
                <p className="text-gray-600">
                  Domain registration, hosting setup, and content creation to get your site up and running.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-gray-600">
                  SSL certificates and security measures to keep your website safe and trusted.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Website Project
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;