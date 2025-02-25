
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import PricingCard from "./pricing/components/PricingCard";
import PackageCategory from "./pricing/components/PackageCategory";
import TestimonialCard from "./pricing/components/TestimonialCard";
import { mainPlans, brandingPackages, marketingPackages, businessTools, testimonials, faqs } from "./pricing/data/pricingData";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Transform Your Business Online
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional web design and digital marketing services at transparent prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Core Website Packages */}
          <PackageCategory
            title="Core Website Packages"
            description="Choose the perfect website package for your business needs"
          >
            {mainPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </PackageCategory>

          {/* Testimonials */}
          <div className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Branding & Design */}
          <PackageCategory
            title="Branding & Design"
            description="Build a strong, memorable brand identity"
          >
            {brandingPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </PackageCategory>

          {/* Marketing Essentials */}
          <PackageCategory
            title="Marketing Essentials"
            description="Powerful tools to grow your online presence"
          >
            {marketingPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </PackageCategory>

          {/* Business Tools */}
          <PackageCategory
            title="Business Tools"
            description="Essential tools for professional business operations"
          >
            {businessTools.map((tool, index) => (
              <PricingCard key={index} {...tool} />
            ))}
          </PackageCategory>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your specific requirements and create a tailored package for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Us for a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
