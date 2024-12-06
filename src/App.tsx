import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ServicesShowcase from "./pages/ServicesShowcase";
import BrandingAndLogo from "./pages/services/BrandingAndLogo";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import EmailSetup from "./pages/services/EmailSetup";
import NewsletterSetup from "./pages/services/NewsletterSetup";
import SocialMedia from "./pages/services/SocialMedia";
import PrintMedia from "./pages/services/PrintMedia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/branding-and-logo" element={<BrandingAndLogo />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/email-setup" element={<EmailSetup />} />
          <Route path="/services/newsletter-setup" element={<NewsletterSetup />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/print-media" element={<PrintMedia />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;