import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const quotes = [
  {
    text: "Our mission is Earth Care, People Care, Fair Share — building a sustainable future, one farm, one family at a time.",
    author: "Dr. S. Murugesan"
  },
  {
    text: "The health of soil, plant, animal and man is one and indivisible. We must return to the wisdom of our ancestors while embracing modern science.",
    author: "Dr. S. Murugesan"
  },
  {
    text: "Sustainable agriculture isn't just about growing crops; it's about growing communities and healing our relationship with the Earth.",
    author: "Dr. S. Murugesan"
  }
];

const QuoteCarousel: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  const handleDotClick = (index: number) => {
    setCurrentQuote(index);
  };

  return (
    <section 
      ref={ref}
      className="py-20 px-6 sm:px-10 bg-green-900 text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-800 rounded-full opacity-50 -mt-40 -mr-40" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-green-800 rounded-full opacity-70 -mb-20 -ml-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-10">
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-green-400"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        
        <div className="h-56 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                {quotes[currentQuote].text}
              </p>
              <p className="text-green-300 font-medium">— {quotes[currentQuote].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentQuote === index ? 'bg-green-400 w-8' : 'bg-green-600'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;