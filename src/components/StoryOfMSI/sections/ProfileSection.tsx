import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfileSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const expertiseAreas = [
    'Bio inoculums, soil health management, structured water technology',
    'Multifunctional agroforestry, therapeutic forestry, and medicinal plants',
    'Post-harvest technology, farm design, seed production, and organic manure systems',
    'Digital farming models, Smart Organic Value Chains aligned with UN-SDGs',
    'Training and capacity building for sustainable communities'
  ];

  const contributions = [
    'Regenerated over 24,000 hectares of degraded land for community farming',
    'Developed over 6,000+ acres using traditional Indian farming with scientific validation',
    'Revived 2,000 irrigation tanks through Integrated Tank Development Projects',
    'Prepared Farmers Producer Organizations, Self-Help Groups, and Rural Cooperatives',
    'Enabled transition of large inorganic farms into organic, eco-conscious farms'
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 px-6 sm:px-10 overflow-hidden"
    >
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="text-sm font-semibold text-green-700 tracking-widest uppercase">
            Expertise & accomplishments
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Profile & Expertise
          </h2>
        </motion.div>

        <motion.div 
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-16 relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-40 z-0" />
          <div className="absolute -bottom-14 -left-14 w-48 h-48 bg-blue-100 rounded-full opacity-40 z-0" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Dr. Subramaniyan Murugesan</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="font-medium">President, IOFA (Indian Organic Farms Association)</p>
                  <p>Former Senior Officer, NDDB & NWDB (Government of India)</p>
                </div>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium text-sm">
                <span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                25+ Years Experience
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Dr. Murugesan's extensive 25-year journey includes agriculture, land restoration, 
                integrated medicine, ecology & environment conservation, market research, training, 
                financial systems (FAS, MIS, HRIS), traditional Siddha medicine manufacturing, and 
                sustainable food production from Moringa, Palms, Millets, and Native Rice varieties.
              </p>
              <p>
                He is a recognized international consultant for permaculture, biological organic farming, 
                biodynamic farming, and preventive health care. He is also an expert in CSR/ISR project 
                design across 12 sectors.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <span className="w-10 h-10 mr-3 rounded-full bg-green-200 flex items-center justify-center text-green-800">
                1
              </span>
              Key Expertise Areas
            </h3>
            <ul className="space-y-4">
              {expertiseAreas.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <span className="w-10 h-10 mr-3 rounded-full bg-blue-200 flex items-center justify-center text-blue-800">
                2
              </span>
              Major Contributions
            </h3>
            <ul className="space-y-4">
              {contributions.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p 
          className="text-center text-xl text-green-800 font-medium mt-16"
          variants={itemVariants}
        >
          Dr. Murugesan's vision is to connect Indian farmers globally, ensuring sustainable practices, 
          ethical markets, and a healthy planet for future generations.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProfileSection;