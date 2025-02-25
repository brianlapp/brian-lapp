
import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Check, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Facebook Preview */}
          <div className="relative mb-16 rounded-xl overflow-hidden bg-card p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Social Media Branding & Page Setup
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
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
                <div className="bg-card rounded-lg shadow-xl p-4 border border-border">
                  <div className="h-40 bg-primary/20 rounded-t-lg relative">
                    <div className="absolute -bottom-16 left-4">
                      <div className="w-32 h-32 bg-card rounded-full p-2 border border-border">
                        <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                          <Facebook className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 px-4">
                    <h3 className="text-xl font-bold text-foreground">Your Business Name</h3>
                    <p className="text-muted-foreground text-sm">@yourbusiness</p>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Instagram className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Instagram</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-foreground">What's Included in Our Social Media Branding Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Page Creation or Update</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Setting up new pages on key platforms (Facebook, Instagram, LinkedIn, etc.) or enhancing your existing profiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Ensuring your contact information, business hours, and other details are accurate and accessible.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Branded Visuals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Profile and cover photos designed to align with your brand identity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom highlights, story covers, and banners (platform-dependent).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Social Media Branding Matters */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-foreground">Why Social Media Branding Matters</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">First Impressions Count</h3>
                <p className="text-muted-foreground">Professionally branded pages give your business credibility and help you make a strong first impression.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Brand Recognition</h3>
                <p className="text-muted-foreground">Consistent visuals and messaging make your business memorable and build trust with your audience.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Improved Engagement</h3>
                <p className="text-muted-foreground">A cohesive, attractive profile encourages users to follow, like, and engage with your business.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Streamlined Content</h3>
                <p className="text-muted-foreground">With custom templates, posting becomes faster and easier, freeing you to focus on running your business.</p>
              </div>
            </div>
          </section>

          {/* Get Social with Confidence */}
          <section className="text-center mb-16 bg-card p-12 rounded-2xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Get Social with Confidence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
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
