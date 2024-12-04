import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";

const PrintMedia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-6">Print Media Design</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Print materials like flyers, brochures, and posters are still powerful tools for getting the word out about your business. We create compelling, professional designs that will capture attention and drive action.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Custom Flyer & Brochure Design</li>
            <li>Branded Consistency</li>
            <li>Winning Layouts</li>
            <li>High-Quality Printing</li>
          </ul>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default PrintMedia;