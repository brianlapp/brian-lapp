
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
      title: "Quick-Launch Website Package",
      price: "$349",
      description: "Perfect for businesses who need a professional web presence - fast.",
      features: [
        "Professional 1-3 Page Website: About, Services, Contact",
        "Lightning-Fast Performance: Loads in milliseconds",
        "Mobile-First Design: Looks great on all devices",
        "Domain Name Setup: Your .ca or .com address",
        "Premium Hosting: Fast, reliable, and secure",
        "SSL Security: Protected connection for visitors",
        "Basic Contact Form: Easy way for customers to reach you",
        "No WordPress complexity",
        "No technical skills needed",
        "No hidden costs",
        "No ongoing maintenance required",
        "Simple, clean design that just works",
        "48-hour turnaround with your content",
        "We handle all the technical setup",
        "Optional add-ons available: Google Business Profile, Analytics, SEO, Maps"
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
      title: "Professional Business Email System",
      price: "$249",
      features: [
        "Complete Gmail Workspace Setup: Professional email with your domain name",
        "Multiple Email Addresses: Create up to 5 custom addresses (@yourbusiness.ca)",
        "Mobile Device Configuration: Setup on your phones and tablets",
        "Email Signature Design: Professional branded signature for your team",
        "Spam Protection: Advanced filters and security measures",
        "Calendar & Contact Integration: Sync across all your devices",
        "Email Migration: Transfer existing emails to your new system",
        "15-Minute Tutorial: Quick training on using your new email system",
        "30 Days Initial Support Included",
        "Optional Monthly Support ($29/mo): User management, backups, priority support, security monitoring"
      ]
    },
    {
      title: "Email Marketing Launch Package",
      price: "$999",
      features: [
        "Strategic Platform Selection: Choose the right tool for your needs (Mailchimp, etc.)",
        "Brand Integration: Custom-designed email templates matching your website",
        "Subscriber List Setup: Proper segmentation and organization",
        "Welcome Email Sequence: 3-email nurture series for new subscribers",
        "Lead Magnet Setup: One free downloadable to attract subscribers",
        "Website Integration: Newsletter signup forms and pop-ups",
        "CASL Compliance: Legal requirements and privacy policy setup",
        "3 Custom Email Templates: Newsletter, Promotion, and Announcement styles",
        "Mobile-Responsive Design: Perfect display on all devices",
        "Reusable Content Blocks: Easy drag-and-drop sections",
        "A/B Testing Setup: Tools to optimize your email performance"
      ]
    },
    {
      title: "Social Media Brand Launch Package",
      price: "$299",
      features: [
        "Strategic Profile Optimization: Professional setup of Instagram and Facebook business accounts",
        "Brand Identity Implementation: Cohesive visual presence across all platforms",
        "Custom Cover Images & Profile Pictures: Designed specifically for each platform's dimensions",
        "Bio & About Section Copywriting: Compelling, keyword-rich descriptions that convert",
        "Content Calendar Starter Kit: Initial content plan with key posting dates",
        "3 Custom Post Templates: Branded templates you can easily customize for future posts",
        "Hashtag Strategy Guide: Platform-specific hashtag recommendations to reach your audience",
        "Cross-Platform Linking: Proper connection between your website and social profiles",
        "15-Minute Strategy Call: Quick training on how to maintain your new professional presence"
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
      title: "Brand Identity Package",
      price: "$749",
      features: [
        "Brand Discovery Session: Deep dive into your vision and values",
        "Market Research: Analysis of competitors and industry trends",
        "5 Initial Logo Concepts: Unique design directions to choose from",
        "2 Revision Rounds: Fine-tune your chosen design",
        "Web-ready files (PNG, JPG), Print-ready files (PDF, AI, EPS)",
        "Social media optimized sizes and website favicon",
        "Color Palette: Primary and secondary colors with codes",
        "Typography Selection: Font pairs for your brand",
        "Usage Guidelines: Rules for logo placement and spacing",
        "Brand Voice: Personality and tone recommendations",
        "Business Card Design: Simple layout with your new logo",
        "Email Signature Design: Professional branded signature",
        "Social Media Profile Images: Properly sized for each platform",
        "30-Day Support: Minor tweaks and file formats as needed"
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
