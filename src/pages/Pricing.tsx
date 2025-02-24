
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Sparkles, Zap, CircleDollarSign, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features,
  isPopular,
  recommendedAddons = []
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  recommendedAddons?: { title: string; price: string }[];
}) => (
  <Card className={`flex flex-col h-full transition-all hover:shadow-lg ${isPopular ? 'border-primary shadow-lg relative' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
      </div>
    )}
    <CardHeader className={`${isPopular ? 'pt-8' : ''}`}>
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
      {recommendedAddons.length > 0 && (
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Recommended Add-ons:</h4>
          <ul className="space-y-1">
            {recommendedAddons.map((addon, index) => (
              <li key={index} className="text-sm flex justify-between">
                <span>{addon.title}</span>
                <span className="text-primary font-medium">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </CardContent>
    <CardFooter>
      <Link to="/contact" className="w-full">
        <Button className="w-full">Get Started</Button>
      </Link>
    </CardFooter>
  </Card>
);

const PackageCategory = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </div>
);

const TestimonialCard = ({
  quote,
  author,
  company
}: {
  quote: string;
  author: string;
  company: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <p className="text-gray-600 italic mb-4">{quote}</p>
    <div className="flex items-center gap-2">
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const Pricing = () => {
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');

  const mainPlans = [
    {
      title: "Custom Business Website",
      price: "$2,499",
      description: "A fully personalized website built with speed and simplicity in mind.",
      features: [
        "Custom Design: Unique site that perfectly matches your brand",
        "Professional Content: Well-written copy for all pages",
        "Lightning-Fast Performance: Sites that load in milliseconds",
        "Mobile-First Framework: Perfect display on all devices",
        "SEO Foundation: Built with search engines in mind",
        "Contact Forms & Maps: Easy ways for customers to reach you",
        "Social Media Integration: Connect to your platforms",
        '"Set it and forget it": We handle everything',
        "Ongoing Support: First 3 months free",
        "Security Built-in: Protected against threats",
        "Analytics Setup: Track your visitors",
        "All Technical Management: Focus on your business",
        "Complete Setup: Domain, hosting, SSL included"
      ],
      isPopular: true,
      recommendedAddons: [
        { title: "Website Care Plan", price: "$99/mo" },
        { title: "Google Business Profile", price: "$299" }
      ]
    },
    {
      title: "Quick-Launch Website Package",
      price: "$349",
      description: "Perfect for businesses who need a professional web presence - fast.",
      features: [
        "Professional 1-3 Page Website",
        "Lightning-Fast Performance",
        "Mobile-First Design",
        "Domain Name Setup",
        "Premium Hosting",
        "SSL Security",
        "Basic Contact Form",
        "No WordPress complexity",
        "No technical skills needed",
        "No hidden costs",
        "48-hour turnaround",
        "Complete technical setup"
      ],
      recommendedAddons: [
        { title: "Google Analytics Setup", price: "$199" },
        { title: "Social Media Brand Launch", price: "$299" }
      ]
    },
    {
      title: "Website Care Plan",
      price: "$99/month",
      description: "Keep your website secure, updated, and performing at its best.",
      features: [
        "Regular Maintenance & Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Content Updates (4/month)",
        "Technical Support",
        "Monthly Performance Reports",
        "SEO Health Monitoring"
      ]
    }
  ];

  const brandingPackages = [
    {
      title: "Brand Identity Package",
      price: "$749",
      description: "Complete brand identity design for your business.",
      features: [
        "Brand Discovery Session",
        "5 Logo Concepts",
        "Color Palette & Typography",
        "Brand Guidelines",
        "Business Card Design",
        "Social Media Assets",
        "Print & Web Files"
      ]
    },
    {
      title: "Social Media Brand Launch Package",
      price: "$299",
      description: "Professional setup of your social media presence.",
      features: [
        "Profile Optimization",
        "Custom Cover Images",
        "Bio & Content Strategy",
        "Post Templates",
        "Hashtag Strategy",
        "Cross-Platform Linking"
      ]
    }
  ];

  const marketingPackages = [
    {
      title: "Email Marketing Launch Package",
      price: "$999",
      features: [
        "Platform Selection & Setup",
        "Custom Email Templates",
        "Welcome Sequence",
        "Lead Magnet Setup",
        "List Management",
        "Analytics Integration"
      ]
    },
    {
      title: "Google Business Profile Pro Setup",
      price: "$299",
      features: [
        "Business Verification",
        "Profile Optimization",
        "Photo Gallery Setup",
        "Review Generation System",
        "Local SEO Enhancement",
        "Analytics Integration"
      ]
    }
  ];

  const businessTools = [
    {
      title: "Professional Business Email",
      price: "$249",
      description: "Professional email setup with your domain.",
      features: [
        "Custom Email Addresses",
        "Gmail Workspace Setup",
        "Mobile Configuration",
        "Calendar & Contacts",
        "Email Migration",
        "Security Setup"
      ]
    },
    {
      title: "Website Analytics & Insights",
      price: "$199",
      description: "Complete analytics setup and reporting.",
      features: [
        "Google Analytics 4 Setup",
        "Custom Dashboard",
        "Goal Tracking",
        "User Behavior Analysis",
        "Traffic Source Tracking",
        "Regular Reporting"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The process was incredibly smooth and the results exceeded our expectations. Our new website has already brought in new customers!",
      author: "Sarah Johnson",
      company: "Bloom Floral Design"
    },
    {
      quote: "Professional, responsive, and delivered exactly what we needed. The website care plan gives us peace of mind.",
      author: "Michael Chen",
      company: "Pacific Coast Properties"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Quick-Launch websites can be ready in 48 hours with your content. Custom websites typically take 2-3 weeks from start to finish."
    },
    {
      question: "Do I need technical skills to maintain the website?",
      answer: "No technical skills required! We handle all the technical aspects, updates, and maintenance for you."
    },
    {
      question: "What's included in the Website Care Plan?",
      answer: "Regular updates, security monitoring, content changes (up to 4 per month), performance optimization, and priority support."
    }
  ];

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
              <Button variant="outline" size="lg" onClick={() => setCurrency(currency === 'CAD' ? 'USD' : 'CAD')}>
                <CircleDollarSign className="mr-2" />
                Switch to {currency === 'CAD' ? 'USD' : 'CAD'}
              </Button>
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

