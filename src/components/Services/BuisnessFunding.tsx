import React from 'react';
import { motion } from 'framer-motion';
import { HandCoins, Banknote, PiggyBank, ShieldCheck } from 'lucide-react';

const fundingOptions = [
  {
    icon: <HandCoins className="w-6 h-6 text-green-600" />,
    title: "Micro & Macro Funding",
    description: "Flexible financial solutions for both grassroots initiatives and scalable businesses.",
  },
  {
    icon: <Banknote className="w-6 h-6 text-green-600" />,
    title: "Impact Investment",
    description: "We connect investors with high-impact projects that promote sustainability and growth.",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-green-600" />,
    title: "Startup Incubation",
    description: "Seed funding and mentorship for agritech, health, and environmental startups.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Transparent Grants",
    description: "Backed by robust tracking systems and regular impact reports for full accountability.",
  },
];

const BusinessFunding: React.FC = () => {
  return (
    <section id="business-funding" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          Business & Funding Support
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          We empower changemakers with funding strategies tailored for rural development, eco-enterprises, and regenerative business models.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fundingOptions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFunding;
