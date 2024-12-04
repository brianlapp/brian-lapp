import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";

const SocialMedia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-6">Social Media Branding & Page Setup</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Your social media presence is often the first impression customers have of your business. A well-branded and cohesive profile can make you stand out and build trust instantly.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What&apos;s Included:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Page Creation or Update</li>
            <li>Branded Visuals</li>
            <li>Custom Templates</li>
            <li>Social Media Guidelines</li>
          </ul>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default SocialMedia;