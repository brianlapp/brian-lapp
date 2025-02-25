
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
                  Professional Social Media Setup for Small Businesses
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a polished, professional presence across major social platforms that attracts customers and builds trust. 
                  Perfect for busy business owners who want to make a strong first impression online.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Professional Social Media Setup
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
            <h2 className="text-2xl font-semibold mb-8 text-center text-foreground">Complete Social Media Setup Package</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Profile Setup</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Complete setup of your business profiles on Facebook, Instagram, and LinkedIn to attract local customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Optimization of business hours, contact details, and location information for better local search visibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Brand-Focused Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Eye-catching profile photos and cover images that match your business brand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom graphic templates for consistent, professional-looking posts and stories</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Social Media Matters */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-foreground">Benefits for Your Small Business</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Attract Local Customers</h3>
                <p className="text-muted-foreground">Professional profiles help you appear in local searches and attract customers in your area</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Build Trust</h3>
                <p className="text-muted-foreground">Professional social media presence shows customers you're established and trustworthy</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Save Time</h3>
                <p className="text-muted-foreground">Get everything set up right the first time, so you can focus on running your business</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:bg-card/80 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Easy Updates</h3>
                <p className="text-muted-foreground">Custom templates make it simple to maintain a professional look on all your posts</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16 bg-card p-12 rounded-2xl border border-border">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Start Growing Your Business Online</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Get a professional social media presence that helps your small business stand out and attract more local customers. 
              Our setup package gives you everything you need to look professional online.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Your Social Media Setup
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

