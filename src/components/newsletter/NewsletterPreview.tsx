
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const NewsletterPreview = () => {
  return (
    <div className="bg-[#0f172a] rounded-lg shadow-xl p-8 border border-white/10">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-2 text-white">Get Expert Tips</h3>
        <p className="text-gray-400">Stay updated with the latest digital marketing strategies!</p>
      </div>
      <form className="space-y-4">
        <Input
          type="text"
          id="name"
          placeholder="Full Name"
          className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          disabled
        />
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          disabled
        />
        <Button className="w-full bg-primary hover:bg-primary/90 text-white" disabled>
          Subscribe Now
        </Button>
      </form>
      <p className="text-xs text-center text-gray-500 mt-4">
        Your privacy is important. Unsubscribe anytime.
      </p>
    </div>
  );
};

