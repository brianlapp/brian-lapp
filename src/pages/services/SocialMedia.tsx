import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";
import { Check } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-6">Social Media Branding & Page Setup</h1>
        <p className="text-lg text-gray-600 mb-12">
          Your social media presence is often the first impression customers have of your business. A well-branded and cohesive profile can make you stand out and build trust instantly. At SureSites, we create professional, branded social media pages tailored to your business, whether you're starting from scratch or refreshing your current profiles.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What's Included in Our Social Media Branding Service:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Page Creation or Update</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Setting up new pages on key platforms (Facebook, Instagram, LinkedIn, etc.) or enhancing your existing profiles with optimized descriptions, logos, and visuals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ensuring your contact information, business hours, and other details are accurate and accessible.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
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

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Templates</h3>
              <p className="text-gray-600 mb-4">
                A selection of branded social media post templates designed for easy use. These templates ensure your posts are consistent, professional, and on-brand every time you publish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Social Media Guidelines</h3>
              <p className="text-gray-600 mb-4">
                A simple guide to help you maintain your branding and tone across posts, ensuring consistency and professionalism as you grow your online presence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Social Media Branding Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">First Impressions Count</h3>
              <p className="text-gray-600">
                Professionally branded pages give your business credibility and help you make a strong first impression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
              <p className="text-gray-600">
                Consistent visuals and messaging make your business memorable and build trust with your audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Improved Engagement</h3>
              <p className="text-gray-600">
                A cohesive, attractive profile encourages users to follow, like, and engage with your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Streamlined Content Creation</h3>
              <p className="text-gray-600">
                With custom templates, posting becomes faster and easier, freeing you to focus on running your business.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Social with Confidence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We'll ensure your social media pages reflect your brand and set you up for success in the digital space. Whether you need new pages or a refresh, we're here to help.
          </p>
        </section>
      </main>
      <CallToAction />
    </div>
  );
};

export default SocialMedia;