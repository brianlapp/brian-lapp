
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
      title: "Simple Website Setup",
      price: "$349",
      description: "Perfect for small businesses who need a web presence without the fuss.",
      features: [
        "We set up a professional, lightweight website for you",
        "No WordPress headaches or complicated systems",
        "Domain setup included",
        "Fast, secure hosting",
        "SSL certificate included",
        "Basic 1-3 page site that loads lightning fast",
        "You get a simple site that just works - we handle all the tech"
      ]
    },
    {
      title: "Custom Business Website",
      price: "$2,499",
      description: "A fully personalized website built with speed and simplicity in mind.",
      features: [
        "Custom Design: Unique site that perfectly matches your brand",
        "Professional Content: Well-written copy for all pages",
        "Lightning-Fast Performance: Sites that load in milliseconds, not seconds",
        "Mobile-First Framework: Perfect display on phones, tablets, and desktops",
        "SEO Foundation: Built with search engines in mind from day one",
        "Contact Forms & Maps: Easy ways for customers to reach you",
        "Social Media Integration: Seamless connection to your social platforms",
        '"Set it and forget it": We handle everything - no training needed',
        "Ongoing Support: Simple updates handled by us (first 3 months free)",
        "Security Built-in: Protected against common vulnerabilities and threats",
        "Analytics Setup: Track your visitors and how they use your site",
        "All Technical Management: You focus on your business, we focus on your site",
        "Complete Setup: Includes domain, hosting, SSL, and all technical configurations"
      ]
    }
  ];

  const extras = [
    {
      title: "Website Care Plan",
      price: "$99/month",
      features: [
        "Regular Maintenance: Security updates, performance optimization, and backups",
        "Content Updates: Quick changes to text, images, and info (up to 4 per month)",
        "Technical Monitoring: 24/7 uptime monitoring and issue prevention",
        "Priority Support: Direct access to our team when you need help",
        "Monthly Performance Report: See your site's traffic and engagement stats",
        "SEO Health Check: Ensure your site stays visible in search results",
        "Hands-Off Management: No training or technical skills needed - we handle everything"
      ]
    },
    {
      title: "Google Business Profile Pro Setup",
      price: "$299",
      features: [
        "Complete Business Verification: Official verification of your business with Google",
        "Strategic Profile Optimization: Keyword-rich description, services, and categories",
        "Google Maps Integration: Put your business on the map for local searches",
        "Custom Photo Gallery: Professional arrangement of your business imagery",
        "Review Generation System: Tools to collect and showcase positive customer feedback",
        "Local SEO Boost: Enhanced visibility for \"near me\" and local searches",
        "Mobile Search Optimization: Look great on Google's mobile search results",
        "Analytics Connection: Track how customers find and interact with your listing"
      ]
    },
    {
      title: "Social Media Brand Presence",
      price: "$299",
      features: [
        "Establish your professional identity across platforms",
        "Professional setup and optimization of your Instagram and Facebook profiles",
        "Brand-consistent visuals and messaging across all platforms",
        "Custom templates for ongoing posts to maintain your brand identity"
      ]
    },
    {
      title: "Website Analytics & Insights Package",
      price: "$199",
      features: [
        "Complete Google Analytics 4 Setup: Latest tracking technology for comprehensive data",
        "Custom Dashboard Creation: Easy-to-understand visual reports of your website performance",
        "Goal Tracking Configuration: Monitor form submissions, sales, and key visitor actions",
        "User Behavior Analysis: See how visitors navigate through your site",
        "Traffic Source Tracking: Identify where your visitors are coming from",
        "Mobile vs Desktop Reports: Understand how different users experience your site",
        "Initial Performance Review: Initial review session explaining your data",
        "Future-Proof Setup: Ready for upcoming Google data tracking changes"
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
