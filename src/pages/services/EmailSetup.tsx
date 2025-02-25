import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Shield, Smartphone, Users, Calendar, Check } from "lucide-react";

const EmailSetup = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Email Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Professional Email Setup with Google Workspace
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Establish credibility with a professional email address like info@yourcompany.ca. We'll help you set up and manage your business communications seamlessly with Google Workspace.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started Today
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Email Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">info@yourcompany.ca</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">What's Included in Our Email Setup Service</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Domain-Connected Email</h3>
                <p className="text-gray-600">
                  Professional email addresses that match your website domain, reinforcing your brand with every message.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Google Workspace Integration</h3>
                <p className="text-gray-600">
                  Access to Gmail, Google Drive, Calendar, and more powerful tools for your business.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">User-Friendly Setup</h3>
                <p className="text-gray-600">
                  Complete configuration on all your devices for seamless access to your email.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Google Workspace */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Google Workspace?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Professionalism</h3>
                    <p className="text-gray-600">A branded email address shows customers that you mean business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security & Reliability</h3>
                    <p className="text-gray-600">Top-tier security features including two-factor authentication.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Customizability</h3>
                    <p className="text-gray-600">Easily add or manage users as your team grows.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  A professional email is more than just a tool—it's a statement. Let us help you set up your business email and unlock the power of Google Workspace.
                </p>
                <Link to="/contact">
                  <Button className="w-full">Contact Us Today</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default EmailSetup;