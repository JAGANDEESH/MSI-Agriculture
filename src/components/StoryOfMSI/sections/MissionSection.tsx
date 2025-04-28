import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="mb-16 text-center">
          <motion.div variants={childVariants} className="inline-block">
            <span className="text-sm font-semibold text-green-700 tracking-widest uppercase">
              Our purpose
            </span>
          </motion.div>
          <motion.h2 
            variants={childVariants}
            className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
          >
            A Vision for <span className="text-green-700">Regeneration</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="order-2 md:order-1"
            variants={childVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Transforming Agriculture, Healing Earth</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With over 25 years in agriculture, Dr. Subramaniyan Murugesan's vision is to create a sustainable, 
              toxin-free, and eco-conscious India. His approach combines ancient wisdom with modern science to 
              regenerate land and revitalize communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As President of the Indian Organic Farms Association (IOFA), he leads initiatives that regenerate land, 
              empower farmers, connect communities, and drive responsible agriculture.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-600 my-8">
              His mission transcends farming — it's about restoring ecological balance, promoting health, 
              and building a resilient, prosperous rural economy.
            </blockquote>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            variants={childVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-70 z-0" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full opacity-50 z-0" />
            
            {/* Image container with frame effect */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 md:rotate-2 transition-transform duration-500 hover:rotate-0">
              <div className="absolute inset-0 border-8 border-white rounded-2xl z-20" />
              <img
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dr. Murugesan working in sustainable agriculture"
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;