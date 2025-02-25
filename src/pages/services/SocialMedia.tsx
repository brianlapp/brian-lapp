import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Check, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Facebook Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Social Media Branding & Page Setup
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your social media presence is often the first impression customers have of your business. 
                  A well-branded and cohesive profile can make you stand out and build trust instantly.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Social Media Journey
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Facebook Page Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="h-40 bg-blue-600 rounded-t-lg relative">
                    <div className="absolute -bottom-16 left-4">
                      <div className="w-32 h-32 bg-white rounded-full p-2">
                        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                          <Facebook className="w-12 h-12 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 px-4">
                    <h3 className="text-xl font-bold">Your Business Name</h3>
                    <p className="text-gray-500 text-sm">@yourbusiness</p>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Instagram className="w-5 h-5 text-gray-600" />
                        <span className="text-sm text-gray-600">Instagram</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-5 h-5 text-gray-600" />
                        <span className="text-sm text-gray-600">LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">What's Included in Our Social Media Branding Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Page Creation or Update</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Setting up new pages on key platforms (Facebook, Instagram, LinkedIn, etc.) or enhancing your existing profiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Ensuring your contact information, business hours, and other details are accurate and accessible.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Branded Visuals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Profile and cover photos designed to align with your brand identity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Custom highlights, story covers, and banners (platform-dependent).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Social Media Branding Matters */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Why Social Media Branding Matters</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">First Impressions Count</h3>
                <p className="text-gray-600">Professionally branded pages give your business credibility and help you make a strong first impression.</p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
                <p className="text-gray-600">Consistent visuals and messaging make your business memorable and build trust with your audience.</p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Improved Engagement</h3>
                <p className="text-gray-600">A cohesive, attractive profile encourages users to follow, like, and engage with your business.</p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Streamlined Content</h3>
                <p className="text-gray-600">With custom templates, posting becomes faster and easier, freeing you to focus on running your business.</p>
              </div>
            </div>
          </section>

          {/* Get Social with Confidence */}
          <section className="text-center mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Get Social with Confidence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We'll ensure your social media pages reflect your brand and set you up for success in the digital space. 
              Whether you need new pages or a refresh, we're here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us Today
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default SocialMedia;