import React from 'react';
import { motion } from 'framer-motion';
import MSI_Logo from '../assets/Msi_Logo.jpeg';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      {/* Logo Animation */}
      <motion.img
        src={MSI_Logo}
        alt="MSI Logo"
        className="w-24 h-24 rounded-full border-4 border-green-500 shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Optional loading text */}
      <motion.p
        className="mt-6 text-green-600 font-semibold text-lg tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
