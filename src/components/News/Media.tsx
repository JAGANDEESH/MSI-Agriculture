import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Newspaper, ArrowRight, ExternalLink } from 'lucide-react';

const mediaItems = [
  {
    title: 'MSI featured in AgriTech World',
    type: 'Article',
    source: 'AgriTech World',
    link: '#',
    icon: Newspaper,
    color: 'bg-green-50 text-green-600',
    description: `How MSI is helping agri-startups lead India's sustainable farming movement.`,
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Interview with MSI Co-Founder',
    type: 'Video',
    source: 'EcoVision Media',
    link: '#',
    icon: PlayCircle,
    color: 'bg-blue-50 text-blue-600',
    description: 'A powerful conversation on green entrepreneurship, innovation, and the future.',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'MSI recognized by National Sustainability Forum',
    type: 'Recognition',
    source: 'NSF India',
    link: '#',
    icon: Newspaper,
    color: 'bg-yellow-50 text-yellow-600',
    description: 'Awarded for outstanding contributions in integrated sustainable development.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  },
];

const Media: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            MSI In the <span className="text-green-600 relative">Media
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50 -skew-x-12" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            See how MSI is creating waves in the world of sustainability, innovation, and social impact.
          </p>
        </motion.div>

        {/* Media Cards */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {mediaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 ${item.color} p-2 rounded-lg backdrop-blur-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-gray-800">{item.source}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-sm text-gray-600">{item.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <motion.a
                      href={item.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                    >
                      Read More <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-medium shadow-lg hover:bg-green-700 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore All Media</span>
            <motion.span
              className="absolute right-8 flex items-center"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Media;