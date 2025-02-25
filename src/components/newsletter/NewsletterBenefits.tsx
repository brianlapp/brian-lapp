
import { Mail, Users, Repeat, DollarSign } from "lucide-react";

export const NewsletterBenefits = () => {
  const benefits = [
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
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="p-6 rounded-lg bg-[#0f172a] border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/20 mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
          <p className="text-gray-400">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
