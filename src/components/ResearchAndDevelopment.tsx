import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Leaf, Package, FlaskRound as Flask, ArrowRight, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const ResearchAndDevelopment: React.FC = () => {
  const researchAreas = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'AgriTech Solutions',
      desc: 'Smart farming innovations for soil health, crop productivity, and sustainable irrigation.',
      stats: '40+ Projects',
      link: '#agritech'
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: 'Sustainable Packaging',
      desc: 'Eco-friendly materials and supply chain strategies reducing plastic and waste.',
      stats: '25+ Partners',
      link: '#packaging'
    },
    {
      icon: <Flask className="w-8 h-8 text-purple-600" />,
      title: 'Bio-based Research',
      desc: 'Exploring plant-based solutions for nutrition, medicine, and climate resilience.',
      stats: '15+ Patents',
      link: '#bio-research'
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.15),rgba(255,255,255,0)_50%)]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2070')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Microscope className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Innovation Hub</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Research & Development
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              At MS International, we believe innovation drives sustainable growth. Our R&D division is committed to finding smart, eco-friendly solutions across agriculture, health, environment, and business.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {area.icon}
                </div>
                
                <div className="relative">
                  <div className="mb-6 inline-block p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300">
                    {area.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">
                      {area.stats}
                    </span>
                    
                    <motion.a
                      href={area.link}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-sm font-semibold text-gray-900 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#publications"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              View Research Publications
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndDevelopment;