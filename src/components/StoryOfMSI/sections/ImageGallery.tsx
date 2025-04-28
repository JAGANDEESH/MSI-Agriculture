import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 p-6 text-white z-10">
        <motion.h3 
          className="text-lg font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {alt}
        </motion.h3>
        
        <motion.div 
          className="w-10 h-0.5 bg-green-400 mb-3"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />
      </div>
    </motion.div>
  );
};

const ImageGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const images = [
    {
      src: "https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Sustainable Farming Practices"
    },
    {
      src: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Organic Crop Cultivation"
    },
    {
      src: "https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community Empowerment"
    },
    {
      src: "https://images.pexels.com/photos/12638731/pexels-photo-12638731.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Regenerated Landscapes"
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-700 tracking-widest uppercase">
            Our work
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Projects & Impact
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            A glimpse into Dr. Murugesan's work across India, transforming landscapes,
            empowering communities, and promoting sustainable agriculture practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;