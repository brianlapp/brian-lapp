import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";

const BusinessCards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-6">Business Card Design & Fulfillment</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            A well-designed business card is more than a piece of paper—it&apos;s a lasting impression. We create business cards that not only look great but also get kept.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer:</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Custom Card Design</li>
            <li>Premium Fulfillment Options</li>
            <li>Brand Consistency</li>
            <li>High-Quality Printing</li>
          </ul>
        </div>
      </main>
      <CallToAction />
    </div>
  );
};

export default BusinessCards;