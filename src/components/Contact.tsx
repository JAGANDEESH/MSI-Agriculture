// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-300 rounded-full blur-2xl opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're a farmer, entrepreneur, or investor — we'd love to hear from you.
          </p>
          <p className="mt-6 text-green-800 font-semibold text-lg leading-relaxed">
            Reach us online — anytime, anywhere. Book your appointment with our experts now for valuable insights toward a sustainable lifestyle!
          </p>
        </motion.div>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-green-100"
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-green-100">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-1">Email</h5>
                <a href="mailto:msinternational.operations@gmail.com" className="text-green-600 hover:underline">
                msinternational.operations@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-green-100">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-1">Phone</h5>
                <a href="tel:+919444781692" className="text-green-600 hover:underline">
                  +91 94447 81692
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-full bg-green-100">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-1">Office</h5>
                <p className="text-gray-600 leading-relaxed">
                M.S. International <br />
                13A, kamarajar Street, <br />
                Vinayagam ,<br />
                Chennai - 600099
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
