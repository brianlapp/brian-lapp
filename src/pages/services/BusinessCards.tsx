import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { UserRound, Palette, Printer, Layout } from "lucide-react";

const BusinessCards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Business Card Design & Fulfillment
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  A well-designed business card is more than a piece of paper—it's a lasting impression. We create business cards that not only look great but also get kept.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Design
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-xl transform perspective-1000 group hover:rotate-y-180 transition-transform duration-1000 cursor-pointer h-64">
                  <div className="absolute inset-0 backface-hidden">
                    {/* Front of card */}
                    <div className="p-6 flex items-center justify-between h-full">
                      <div className="text-center flex-1">
                        <UserRound className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                        <p className="text-gray-600">Marketing Director</p>
                      </div>
                      <div className="border-l border-gray-200 h-full flex items-center pl-6">
                        <UserRound className="w-24 h-24 text-primary/20" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    {/* Back of card */}
                    <div className="p-6 flex flex-col justify-center h-full bg-primary text-white rounded-lg">
                      <div className="text-center">
                        <p className="font-medium">123-456-7890</p>
                        <p className="text-sm">john@example.com</p>
                        <p className="text-sm mt-2">www.example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UserRound className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">Eye-catching business cards that reflect your brand.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Branded Consistency</h3>
                <p className="text-gray-600">Perfect alignment with your overall brand identity.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Winning Layouts</h3>
                <p className="text-gray-600">Designs focused on driving action and results.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Printing</h3>
                <p className="text-gray-600">Various paper finishes and sizes to suit your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Business Cards Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Tangible Impact</h3>
                  <p className="text-gray-600">A professional business card makes a lasting impression.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Networking</h3>
                  <p className="text-gray-600">An essential tool for networking events and meetings.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Versatility</h3>
                  <p className="text-gray-600">Use them for introductions, trade shows, and more.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Engagement</h3>
                  <p className="text-gray-600">Well-designed cards can spark conversations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <CallToAction />
    </div>
  );
};

export default BusinessCards;
