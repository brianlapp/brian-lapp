import { Globe, Megaphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Website Development",
    description: "Custom-built, responsive websites that convert visitors into customers.",
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: "Social Media Marketing",
    description: "Strategic social media management to build your brand and engage your audience.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
    title: "SEO & Analytics",
    description: "Data-driven SEO strategies to improve your visibility and track success.",
  },
];

const Services = () => (
  <section className="py-20 bg-white" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Marketing Solutions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything your small business needs to succeed online, all in one place.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;