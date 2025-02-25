
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const CallToAction = () => (
  <section className="py-20 bg-primary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Take Your Business to the Next Level?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Let me help you create a digital marketing strategy that works for your business.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          <Mail className="w-5 h-5 mr-2" />
          Get Your Free Strategy Call
        </Button>
      </Link>
    </div>
  </section>
);

export default CallToAction;

