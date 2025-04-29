import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="py-20 px-6 sm:px-10 bg-green-600 text-white relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-700/50 -mt-20 -mr-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-green-700/30 -mb-40 -ml-40" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-green-300 tracking-widest uppercase">
            Join the movement
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
            Be Part of the Change
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-green-100">
            Dr. Murugesan's vision extends beyond farming—it's a movement towards a 
            sustainable, healthy future. Join us in this transformative journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Get Involved Today</h3>
              <p className="text-green-100 mb-6">
                Whether you're a farmer, industry expert, or simply passionate about 
                sustainable living, there are many ways to contribute to our mission.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Join training programs on organic farming</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Partner with IOFA for community projects</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Support the transition to chemical-free agriculture</span>
                </li>
              </ul>
              <div className="space-x-4">
                <motion.button 
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </motion.button>
                <motion.button 
                  className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-lg transform rotate-3" />
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sustainable farming future" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;