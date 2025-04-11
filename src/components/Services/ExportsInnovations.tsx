import React from 'react';
import { motion } from 'framer-motion';
import { Globe, PackageCheck, Radar, Rocket } from 'lucide-react';

const exportsData = [
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Global Outreach",
    description: "Connecting innovative agricultural products to international markets with transparency and efficiency.",
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-blue-600" />,
    title: "Quality Assurance",
    description: "Every export meets strict quality and sustainability standards certified by global bodies.",
  },
  {
    icon: <Radar className="w-6 h-6 text-blue-600" />,
    title: "Tech-Enabled Logistics",
    description: "Using smart tracking systems to ensure real-time updates and smooth delivery worldwide.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Startup Innovations",
    description: "Enabling entrepreneurs to scale their agri-tech and bio-based innovations across borders.",
  },
];

const ExportsInnovations: React.FC = () => {
  return (
    <section id="exports-innovations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          Exports & Innovations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Bridging innovation and sustainability through export-ready solutions that elevate rural potential to global platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exportsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
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

export default ExportsInnovations;
