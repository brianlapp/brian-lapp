
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section className="py-20 bg-primary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Let's work together to grow your business with proven digital marketing strategies.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          Get Your Free Digital Marketing Analysis
        </Button>
      </Link>
    </div>
  </section>
);

export default CallToAction;

