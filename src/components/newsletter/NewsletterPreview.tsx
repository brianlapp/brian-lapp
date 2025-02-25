import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const NewsletterPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">Join Our Newsletter</h3>
        <p className="text-gray-600">Stay updated with our latest news and exclusive offers!</p>
      </div>
      <form className="space-y-4">
        <Input
          type="text"
          id="name"
          placeholder="Full Name"
          className="w-full"
          disabled
        />
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full"
          disabled
        />
        <Button className="w-full bg-primary hover:bg-primary/90" disabled>
          Subscribe Now
        </Button>
      </form>
      <p className="text-xs text-center text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};