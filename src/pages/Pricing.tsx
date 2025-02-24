
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
}) => (
  <Card className="flex flex-col h-full transition-all hover:shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription className="text-xl font-semibold text-primary">{price}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Link to="/contact" className="w-full">
        <Button className="w-full">Get Started</Button>
      </Link>
    </CardFooter>
  </Card>
);

const ExtraServiceCard = ({ 
  title, 
  price, 
  features 
}: { 
  title: string;
  price: string;
  features: string[];
}) => (
  <Card className="transition-all hover:shadow-lg">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-lg font-semibold text-primary">{price}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Pricing = () => {
  const mainPlans = [
    {
      title: "Bare-Bones Website",
      price: "$349",
      description: "Perfect for DIY enthusiasts.",
      features: [
        "Build your own drag-and-drop website",
        "Choose from thousands of website templates",
        "We handle domain setup",
        "We handle hosting setup",
        "SSL certificate installation",
        "Receive login details and documentation"
      ]
    },
    {
      title: "Custom Website",
      price: "$2,499",
      description: "A fully personalized website built from scratch.",
      features: [
        "Custom Website Design: Not a template—a unique site tailored to your brand",
        "Written Content Creation: Professionally crafted copy for all pages",
        "Graphics and Images: Custom graphics and licensed stock images",
        "Responsive Design: Optimized for mobile, tablet, and desktop",
        "Fast-Loading Pages: Performance-optimized for quick loading",
        "Navigation and User Experience (UX): Intuitive layout for seamless browsing",
        "Contact Forms: Functional and user-friendly forms",
        "Map Integration: Showcase your business location with Google Maps",
        "Secure Hosting and SSL: Ensures safe and reliable web access",
        "Social Media Integration: Links and feeds from your social platforms",
        "Analytics Setup: Google Analytics installation for performance tracking"
      ]
    }
  ];

  const extras = [
    {
      title: "Google Business Setup",
      price: "$299",
      features: [
        "Boost your visibility on Google",
        "Get your business listed on Google Maps",
        "Make it easy for customers to find you",
        "Help gather reviews from satisfied clients"
      ]
    },
    {
      title: "Social Media Pages Setup",
      price: "$299",
      features: [
        "Establish a professional presence on social platforms",
        "Create and optimize Instagram and Facebook pages",
        "Keep your network updated with branded profiles",
        "Ready-to-use templates included"
      ]
    },
    {
      title: "Google Analytics Setup",
      price: "$199",
      features: [
        "Track your website's performance",
        "Setup and integration of Google Analytics",
        "Monitor traffic, engagement, and conversions"
      ]
    },
    {
      title: "Professional Email Setup",
      price: "$249",
      features: [
        "Get your branded email address",
        "Create your professional email (info@yourbusiness.ca)",
        "Hosted through Gmail, the world's best email system"
      ]
    },
    {
      title: "Email Marketing System",
      price: "$999",
      features: [
        "Build and manage an email marketing platform",
        "Complete setup of a self-managed system",
        "Includes branding, welcome email, and template",
        "Three 30-minute training sessions included"
      ]
    },
    {
      title: "Logo Design",
      price: "$749",
      features: [
        "Create a memorable brand identity",
        "Explore logo styles together",
        "Receive five initial logo concepts",
        "Finalize with two revisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600">Choose the perfect package for your business needs</p>
          </div>

          {/* Main Plans */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mainPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Extras Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extras.map((extra, index) => (
                <ExtraServiceCard key={index} {...extra} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Looking for a Custom Package?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We can tailor our services to meet your specific business needs.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us for a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
