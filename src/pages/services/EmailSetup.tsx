
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
                  Professional Business Email Setup
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Make a professional impression with custom email addresses like info@yourbusiness.com. 
                  Our complete setup service gets you up and running with Google Workspace, giving you 
                  powerful business tools and reliable email that works anywhere.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Professional Email Setup
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Email Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">you@yourbusiness.com</span>
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
            <h2 className="text-2xl font-semibold mb-8 text-center">Complete Business Email Solution</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Email</h3>
                <p className="text-gray-600">
                  Custom email addresses that match your domain name, helping you look professional and build trust with customers.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Tools</h3>
                <p className="text-gray-600">
                  Access to Gmail, Google Calendar, Drive, and more - everything you need to run your business efficiently.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Work Anywhere</h3>
                <p className="text-gray-600">
                  Access your email and documents from any device - computer, phone, or tablet, in the office or on the go.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Google Workspace */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Benefits for Your Business</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Look Professional</h3>
                    <p className="text-gray-600">Custom email addresses show customers you're an established business they can trust.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reliable & Secure</h3>
                    <p className="text-gray-600">Enterprise-grade security and 99.9% uptime ensure your business communications never miss a beat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Easy Team Collaboration</h3>
                    <p className="text-gray-600">Share documents, manage calendars, and coordinate with your team effortlessly.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Get professional email addresses for your business, plus all the tools you need to work efficiently. 
                  Our setup service includes everything - you'll be up and running in no time.
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
