import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ceoimg from '../../../assets/MSICEO.png';
const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Separate movement for CEO image

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y, 
          scale 
        }}
      >
        <img
          src="https://images.pexels.com/photos/2397530/pexels-photo-2397530.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sustainable agriculture landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/90" />
      </motion.div>

      {/* Hero content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-center justify-between"
        style={{ opacity }}
      >
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <motion.h5
            className="text-green-300 font-medium tracking-widest mb-4 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VISIONARY • LEADER • INNOVATOR
          </motion.h5>
          
          <motion.h1 
  className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 text-transparent bg-clip-text"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  The Story of{" "}
  <span className="relative">
    <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 text-transparent bg-clip-text">
      Dr. S. Murugesan
    </span>
    <motion.span 
      className="absolute -bottom-2 left-0 w-full h-1 bg-green-400/60"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  </span>
</motion.h1>

          
          <motion.p 
            className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A lifelong journey dedicated to reviving agriculture, 
            healing Earth, and empowering communities through sustainable practices
          </motion.p>
        </div>

        {/* Right Side CEO Image */}
        <motion.div 
          className="relative flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
          style={{ y: imageY }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
            <img 
              src={ceoimg}
              alt="Dr. S. Murugesan" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <p className="text-sm font-light mb-2 text-green-300">SCROLL TO DISCOVER</p>
          <div className="w-6 h-10 border-2 border-green-300 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-green-300"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HeroSection;
