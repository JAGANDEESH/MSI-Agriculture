import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Leaf, HeartPulse, Sun, Globe, ArrowRight } from "lucide-react";

const products = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Organic Fertilizers",
    description: "Eco-friendly soil enhancers promoting sustainable farming and long-term soil health.",
    bgColor: "bg-green-50",
    hoverBgColor: "hover:bg-green-100",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    title: "Herbal Supplements",
    description: "Natural wellness boosters made with traditional and modern herbal science.",
    bgColor: "bg-red-50",
    hoverBgColor: "hover:bg-red-100",
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    title: "Solar Irrigation Kits",
    description: "Energy-efficient irrigation tools for smallholder and commercial farmers.",
    bgColor: "bg-yellow-50",
    hoverBgColor: "hover:bg-yellow-100",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Eco Packaging",
    description: "Compostable and reusable packaging solutions for sustainable product distribution.",
    bgColor: "bg-blue-50",
    hoverBgColor: "hover:bg-blue-100",
  },
];

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

const Product: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-green-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-600 font-semibold text-sm uppercase tracking-wider"
          >
            Sustainable Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-gray-600"
          >
            MSI brings sustainable, locally-sourced products to the forefront—enhancing agricultural productivity, health, and environmental resilience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group relative p-8 rounded-2xl ${product.bgColor} ${product.hoverBgColor} transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-sm bg-opacity-90`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {product.icon}
              </div>
              <div className="relative">
                <div className="mb-6 inline-block p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>{"/LearnMore"}}
                  className="inline-flex items-center text-sm font-semibold text-gray-900 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
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
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
            Explore More Products
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;