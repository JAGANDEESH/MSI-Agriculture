import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, HeartHandshake, Leaf, Star } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    title: "Sustainable Products",
    description: "Access organic, eco-friendly goods directly from local farmers and producers.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-green-500" />,
    title: "Ethical Sourcing",
    description: "Support fair trade practices that empower rural communities and ensure transparency.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-green-500" />,
    title: "Easy Purchase",
    description: "Shop through a seamless and secure platform that brings farms to your fingertips.",
  },
  {
    icon: <Star className="w-6 h-6 text-green-500" />,
    title: "Quality Guaranteed",
    description: "All products meet rigorous quality standards to ensure health and freshness.",
  },
];

const ConsumerZone: React.FC = () => {
  return (
    <section id="consumer-zone" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          Welcome to the Consumer Zone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Discover ethically produced goods, connect with local ecosystems, and become a conscious consumer in a regenerative world.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsumerZone;
