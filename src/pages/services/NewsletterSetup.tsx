
import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Mail, List } from "lucide-react";
import { NewsletterPreview } from "../../components/newsletter/NewsletterPreview";
import { NewsletterBenefits } from "../../components/newsletter/NewsletterBenefits";

const NewsletterSetup = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* Split Hero Section */}
        <section className="relative pt-24 pb-16 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Email Newsletter Setup & Strategy
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  Want to stay connected with your customers? I'll help you set up an effective email newsletter that builds relationships and drives sales. Every newsletter is carefully crafted to match your brand's voice.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Mail className="w-5 h-5 mr-2" />
                    Start Your Newsletter Today
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <NewsletterPreview />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Start an Email Newsletter?</h2>
            <NewsletterBenefits />
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Building Your Email List</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 rounded-lg bg-black/50 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Targeted Lead Magnets</h3>
                    <p className="text-gray-400">I'll help you create valuable resources your audience wants, encouraging them to subscribe.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 rounded-lg bg-black/50 border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/20 flex items-center justify-center flex-shrink-0">
                    <List className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Strategic Content Plan</h3>
                    <p className="text-gray-400">Together, we'll develop a content strategy that keeps subscribers engaged and coming back.</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Ready to Grow Your List?</h3>
                <p className="text-gray-400 mb-8">
                  I'll help you build and maintain an email list that creates real connections with your customers.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Let's Discuss Your Newsletter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
    </div>
  );
};

export default NewsletterSetup;

