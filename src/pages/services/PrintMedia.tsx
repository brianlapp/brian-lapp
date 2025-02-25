
import Navigation from "../../components/Navigation";
import CallToAction from "../../components/sections/CallToAction";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Palette, Layout, Printer } from "lucide-react";

const PrintMedia = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-muted to-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Print Design That Gets Results
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Need business cards, flyers, or brochures that stand out? I'll help you create professional print materials that make a lasting impression and bring in more customers.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Start Your Project
                  </Button>
                </Link>
              </div>
              <div className="relative">
                {/* Tri-fold Flyer CSS Graphic with improved styling */}
                <div className="relative w-full aspect-[4/3] perspective-1000">
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 transform hover:scale-105 transition-all duration-500 ease-in-out">
                    {/* Left Panel */}
                    <div className="bg-gradient-to-br from-card/90 to-card rounded-lg shadow-lg p-6 transform hover:-rotate-y-6 transition-all duration-300 border border-border/50 backdrop-blur-sm group">
                      <FileText className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <div className="space-y-3">
                        <div className="h-2 bg-muted/60 rounded w-3/4 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="h-2 bg-muted/60 rounded w-1/2 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="mt-6">
                          <div className="h-24 bg-muted/40 rounded mb-3 group-hover:bg-muted/60 transition-colors"></div>
                          <div className="h-2 bg-muted/60 rounded w-2/3 group-hover:bg-muted/80 transition-colors"></div>
                          <div className="h-2 bg-muted/60 rounded w-1/2 mt-2 group-hover:bg-muted/80 transition-colors"></div>
                        </div>
                      </div>
                    </div>
                    {/* Middle Panel */}
                    <div className="bg-gradient-to-br from-card/90 to-card rounded-lg shadow-lg p-6 transform hover:scale-110 transition-all duration-300 border border-border/50 backdrop-blur-sm group z-10">
                      <Layout className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                      <div className="space-y-3">
                        <div className="h-2 bg-muted/60 rounded group-hover:bg-muted/80 transition-colors"></div>
                        <div className="h-2 bg-muted/60 rounded w-2/3 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-20 bg-muted/40 rounded group-hover:bg-muted/60 transition-colors"></div>
                          <div className="h-20 bg-muted/40 rounded group-hover:bg-muted/60 transition-colors"></div>
                        </div>
                        <div className="h-2 bg-muted/60 rounded w-3/4 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="h-2 bg-muted/60 rounded w-1/2 group-hover:bg-muted/80 transition-colors"></div>
                      </div>
                    </div>
                    {/* Right Panel */}
                    <div className="bg-gradient-to-br from-card/90 to-card rounded-lg shadow-lg p-6 transform hover:rotate-y-6 transition-all duration-300 border border-border/50 backdrop-blur-sm group">
                      <Palette className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                      <div className="space-y-3">
                        <div className="h-2 bg-muted/60 rounded w-2/3 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="h-2 bg-muted/60 rounded w-1/2 group-hover:bg-muted/80 transition-colors"></div>
                        <div className="mt-6">
                          <div className="grid grid-rows-3 gap-3">
                            <div className="h-10 bg-muted/40 rounded group-hover:bg-muted/60 transition-colors"></div>
                            <div className="h-10 bg-muted/40 rounded group-hover:bg-muted/60 transition-colors"></div>
                            <div className="h-10 bg-muted/40 rounded group-hover:bg-muted/60 transition-colors"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">How I Can Help</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Custom Design</h3>
                <p className="text-muted-foreground">Personalized designs that match your brand and attract your ideal customers.</p>
              </div>
              <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Brand Consistency</h3>
                <p className="text-muted-foreground">Your print materials will perfectly match your existing brand identity.</p>
              </div>
              <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Effective Layouts</h3>
                <p className="text-muted-foreground">Strategic designs that guide readers and drive them to take action.</p>
              </div>
              <div className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Print Ready</h3>
                <p className="text-muted-foreground">High-quality files optimized for your chosen printing method and material.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Print Materials Matter
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Stand Out Locally</h3>
                  <p className="text-muted-foreground">Professional print materials help you build trust and recognition in your local market.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Drive Store Traffic</h3>
                  <p className="text-muted-foreground">Well-designed flyers and brochures effectively guide customers to your door.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Multi-Purpose Use</h3>
                  <p className="text-muted-foreground">From trade shows to direct mail, your materials work hard in multiple scenarios.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Lasting Impact</h3>
                  <p className="text-muted-foreground">Physical materials create a tangible connection that digital alone can't match.</p>
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

export default PrintMedia;

