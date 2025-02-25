
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Check } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  recommendedAddons?: { title: string; price: string }[];
};

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features,
  isPopular,
  recommendedAddons = []
}: PricingCardProps) => (
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

export default PricingCard;
