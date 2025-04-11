import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import consumer from '../assets/Consumer.png';
import expert from '../assets/Expert.png';
import business from '../assets/Business(1).jpg';
const headlines = [
  "Transforming Agriculture for a Sustainable Future",
  "Empowering Farmers with Modern Technology",
  "Growing Together for a Better Tomorrow",
  "Building Resilient Food Systems",
  "Connecting Farmers to Global Markets",
  "Innovating for Climate-Smart Agriculture",
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",
consumer,
  expert,
  business,
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) return;
  
    const timer = setInterval(() => {
      handleSlideChange(1); // Next slide
    }, 7000
  );
  
    return () => clearInterval(timer); // Cleanup
  }, [currentSlide, isHovered]);

  const handleSlideChange = (dir: number) => {
    setDirection(dir);
    setCurrentSlide((prev) =>
      dir === 1 ? (prev + 1) % backgroundImages.length : (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      zIndex: 0,
    }),
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 30,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="relative h-screen overflow-hidden pt-16 md:pt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Backgrounds */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          <img
            src={backgroundImages[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-center">

  

          {/* Headline */}
          <AnimatePresence mode="wait">
          <motion.h1
  key={`headline-${currentSlide}`}
  variants={textVariants}
  initial="enter"
  animate="center"
  exit="exit"
  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight sm:leading-snug md:leading-snug  bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent bg-clip-text drop-shadow-lg"
>
  {headlines[currentSlide]}
</motion.h1>


          </AnimatePresence>

          {/* Subtext */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtext-${currentSlide}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-lg md:text-xl text-gray-100 mb-8 drop-shadow-md"
            >
              Empowering farmers, entrepreneurs, and communities through regenerative agriculture
              and sustainable business practices.
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg"
            >
              Join Our Mission <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium border border-white/20 backdrop-blur-md"
            >
              Learn More
            </a>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleSlideChange(-1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-3">
              {backgroundImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === idx
                      ? "bg-white scale-[1.4]"
                      : "bg-white/50 hover:bg-white/70"
                  } transition-all duration-300`}
                />
              ))}
            </div>
            <button
              onClick={() => handleSlideChange(1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-20">
        <motion.div
          key={`progress-${currentSlide}`}
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
        />
      </div> */}
    </div>
  );
};

export default Hero;
