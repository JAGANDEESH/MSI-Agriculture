import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Rocket,
  Wallet,
  PenTool as Tools,
  Network,
} from 'lucide-react';
// import organicFields from '../assets/organic-fields.jpg';
const entrepreneurFeatures = [
  {
    title: 'Startup Mentorship',
    description: 'Get personalized guidance from industry experts to scale your idea effectively.',
    icon: Rocket,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Access to Funding',
    description: 'Connect with investors aligned with your sustainable mission and growth plans.',
    icon: Wallet,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Business Tools',
    description: 'Leverage powerful tools and resources to streamline your operations and strategy.',
    icon: Tools,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Networking Events',
    description: 'Join exclusive events to collaborate and co-create with like-minded innovators.',
    icon: Network,
    color: 'bg-orange-50 text-orange-600',
  },
];

const stats = [
  { value: '500+', label: 'Startups Launched' },
  { value: '50M+', label: 'Funding Secured' },
  { value: '200+', label: 'Expert Mentors' },
  { value: '95%', label: 'Success Rate' },
];

const Entrepreneur: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
  <img
    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2340&q=80"
    alt="Entrepreneur background"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
</div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              Empowering Future Leaders
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Vision Into <span className="text-green-600">Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Join a vibrant ecosystem that nurtures innovation, sustainability, and success.
              MSI is your trusted partner in transforming groundbreaking ideas into impactful ventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-600 text-white rounded-full font-medium flex items-center space-x-2 shadow-lg hover:bg-green-700 transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium flex items-center space-x-2 hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-md"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {entrepreneurFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className={`relative group transition-all duration-300 ${
                    hoveredFeature === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`${feature.color} p-3 rounded-xl inline-block mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                      className="absolute bottom-4 right-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-medium shadow-lg hover:bg-green-700 transition-all duration-300"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Entrepreneur;
