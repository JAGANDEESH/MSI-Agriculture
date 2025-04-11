import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowRight, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Organic Farmer, Punjab',
    quote:
      'MSI helped me modernize my farm with sustainable practices. I\'ve tripled my yield and built a community around eco-farming.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    category: 'Agriculture',
  },
  {
    name: 'Ananya Sharma',
    role: 'Green Tech Entrepreneur, Bangalore',
    quote:
      'As a startup founder, I found everything I needed — mentorship, funding access, and a mission-driven network. MSI is a game-changer!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    category: 'Innovation',
  },
  {
    name: 'Dr. Vivek Patel',
    role: 'Environmental Scientist, Delhi',
    quote:
      'Collaborating with MSI gave me the platform to influence real-world sustainability policies. It\'s an ecosystem that truly empowers change.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    category: 'Research',
  },
];

const Testimonial: React.FC = () => {
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
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient & Blur Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-white opacity-80" />
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-green-200 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* SVG Texture Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1463 360"
          fill="none"
        >
          <g clipPath="url(#clip0_132_11)">
            <path d="M1463 0H0v360h1463V0z" fill="url(#pattern-leaf)" />
          </g>
          <defs>
            <pattern
              id="pattern-leaf"
              patternContentUnits="userSpaceOnUse"
              width="200"
              height="200"
            >
              <image
                href="https://www.transparenttextures.com/patterns/green-dust-and-scratches.png"
                width="200"
                height="200"
                preserveAspectRatio="none"
              />
            </pattern>
            <clipPath id="clip0_132_11">
              <rect width="1463" height="360" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Voices of <span className="text-green-600 relative">Impact
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50 -skew-x-12" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover what our community says about their journey with MSI across farming, innovation, and sustainability.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[64px] rounded-tr-2xl -z-0" />
                <Quote className="absolute top-6 right-6 text-green-600/20 w-12 h-12" />

                <span className="relative inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full mb-6">
                  {item.category}
                </span>

                <p className="relative text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-green-100"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-green-400 rounded-full"
                      initial={{ opacity: 0, scale: 1.2 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                    <div className="flex mt-1 space-x-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <span className="relative z-10">Join Our Community</span>
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

export default Testimonial;
