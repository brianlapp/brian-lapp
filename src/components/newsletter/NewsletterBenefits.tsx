
import { Mail, Users, Repeat, Mail as MailIcon } from "lucide-react";

export const NewsletterBenefits = () => {
  const benefits = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Direct Connection",
      description: "Reach your audience directly in their inbox, no algorithms in the way."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Build Relationships",
      description: "Turn subscribers into loyal customers through consistent engagement."
    },
    {
      icon: <Repeat className="w-8 h-8 text-primary" />,
      title: "Stay Top of Mind",
      description: "Regular updates keep your business in customers' thoughts."
    },
    {
      icon: <MailIcon className="w-8 h-8 text-primary" />,
      title: "Measurable Results",
      description: "Track opens, clicks, and engagement to improve your strategy."
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

