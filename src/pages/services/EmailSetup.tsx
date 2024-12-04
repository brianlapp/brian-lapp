import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const EmailSetup = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Professional Email Setup</h1>
          <p className="text-lg text-gray-600 mb-12">
            A professional email address establishes credibility and strengthens your brand. At SureSites, we'll help you set up a professional email using Google Workspace for seamless business communications.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Domain Email</h3>
                <p className="text-gray-600">
                  Professional email addresses that match your domain name, reinforcing your brand identity.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-gray-600">
                  Top-tier security features including two-factor authentication for your business communications.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Device Setup</h3>
                <p className="text-gray-600">
                  Complete configuration on all your devices for seamless access to your email.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Set Up Your Professional Email
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailSetup;