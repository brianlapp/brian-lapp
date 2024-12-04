import Navigation from "@/components/Navigation";
import CallToAction from "@/components/sections/CallToAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Users, Repeat, DollarSign, Database, Gift } from "lucide-react";

const NewsletterSetup = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Split Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Newsletter Setup & Email List Building
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  An email list is one of the most powerful tools your business can have. It keeps you connected with prospective customers, builds trust, and drives repeat business.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Building Your List Today
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Newsletter Preview Mock */}
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <div className="mb-6">
                    <div className="w-32 h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="w-3/4 h-6 bg-gray-100 rounded mb-2"></div>
                    <div className="w-2/3 h-6 bg-gray-100 rounded"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded"></div>
                      <div>
                        <div className="w-40 h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="w-32 h-4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="w-full h-10 bg-primary/20 rounded"></div>
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
            <h2 className="text-3xl font-bold text-center mb-12">What's Included in Our Newsletter Setup Service</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mail className="w-10 h-10 text-primary" />,
                  title: "Email List Integration",
                  description: "We'll set up a system that collects and organizes email addresses effectively."
                },
                {
                  icon: <Users className="w-10 h-10 text-primary" />,
                  title: "Custom Signup Forms",
                  description: "Attractive, easy-to-use forms for your website and social media platforms."
                },
                {
                  icon: <Gift className="w-10 h-10 text-primary" />,
                  title: "Lead Magnets",
                  description: "Strategic offerings to incentivize customers to join your list."
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Benefits of Building an Email List</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Mail className="w-8 h-8 text-primary" />,
                  title: "Direct Communication",
                  description: "Connect directly with your audience, bypassing algorithms."
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Increased Engagement",
                  description: "Keep customers informed and interested in your offerings."
                },
                {
                  icon: <Repeat className="w-8 h-8 text-primary" />,
                  title: "Customer Retention",
                  description: "Nurture relationships for repeat business."
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-primary" />,
                  title: "Cost-Effective",
                  description: "Best ROI compared to other marketing channels."
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Prompting Users to Register</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Offers</h3>
                    <p className="text-gray-600">Special discounts and promotions for subscribers only.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Resources</h3>
                    <p className="text-gray-600">Valuable lead magnets like guides, checklists, and tutorials.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Ready to Start Growing Your List?</h3>
                <p className="text-gray-600 mb-8">
                  Let us help you build a powerful email list that turns prospects into loyal customers.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
    </div>
  );
};

export default NewsletterSetup;