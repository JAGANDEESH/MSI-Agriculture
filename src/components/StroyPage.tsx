import React from 'react';
import { motion } from 'framer-motion';

const StoryPage = () => {
  return (
    <section id="story" className="min-h-screen bg-gradient-to-b from-green-800 to-green-600 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg mb-8">
            MS International began with a vision to revolutionize agricultural practices
            and empower farmers through innovative solutions and sustainable practices.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>
                To transform agriculture through technology and sustainable practices,
                ensuring food security and farmer prosperity.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be the global leader in agricultural innovation and sustainable
                farming solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryPage;