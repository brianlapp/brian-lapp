import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";

const NewsletterSetup = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-6">Newsletter Setup</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            An email list is one of the most powerful tools your business can have. It keeps you connected with prospective customers, builds trust, and drives repeat business.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What&apos;s Included in Our Newsletter Setup Service:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Email List Integration</li>
            <li>Custom Signup Forms</li>
            <li>Lead Magnets</li>
            <li>Popup and Embedded Forms</li>
            <li>Welcome Email Setup</li>
          </ul>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default NewsletterSetup;