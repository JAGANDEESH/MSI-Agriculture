// src/components/Blog.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, BookOpen, ArrowRight, User, Clock } from 'lucide-react';
import agritech from '../assets/AgriTech.jpg';
import greeninvo from '../assets/Greeninovo.jpg';
import greenveg from '../assets/greenveg.jpg';
const blogs = [
  {
    title: 'AgriTech Breakthroughs: What Farmers Need to Know in 2025',
    description: 'From precision farming to AI in irrigation — discover the tools transforming Indian agriculture.',
    image: agritech,
    date: 'April 5, 2025',
    author: 'MSI Insights',
    tag: 'Agriculture',
    readTime: '8 min read'
  },
  {
    title: 'Green Startups Leading India\'s Climate Innovation',
    description: 'Explore the most promising eco-entrepreneurs solving sustainability challenges across the nation.',
    image: greeninvo,
    date: 'April 2, 2025',
    author: 'MSI Editorial',
    tag: 'Innovation',
    readTime: '6 min read'
  },
  {
    title: 'Community Health & Organic Living: A Rural Movement',
    description: 'How health education and organic practices are reshaping rural well-being, led by grassroots leaders.',
    image: greenveg,
    date: 'March 28, 2025',
    author: 'Field Reports',
    tag: 'Health',
    readTime: '5 min read'
  },
];

const Blog: React.FC = () => {
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
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zM4 4h4v4H4V4zm8 0h4v4h-4V4zM0 8h4v4H0V8zm8 0h4v4H8V8zm8 0h4v4h-4V8zM4 12h4v4H4v-4zm8 0h4v4h-4v-4zM0 16h4v4H0v-4zm8 0h4v4H8v-4zm8 0h4v4h-4v-4z\' fill=\'%2322c55e\' fill-opacity=\'0.05\'/%3E%3C/svg%3E')] opacity-40" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-200 rounded-full blur-2xl opacity-20 pointer-events-none" />

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
            <BookOpen className="w-4 h-4 mr-2" />
            MSI Knowledge Hub
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insights & <span className="text-green-600 relative">
              Stories
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50 -skew-x-12" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore research, innovations, and inspiring tales from the MSI community.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogs.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white bg-green-600/90 backdrop-blur-sm rounded-full">
                    {post.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-green-600 font-medium text-sm cursor-pointer"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
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
            <span className="relative z-10">Explore All Articles</span>
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
    </section>
  );
};

export default Blog;
