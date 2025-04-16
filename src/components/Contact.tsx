// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full blur-2xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Whether you're a farmer, entrepreneur, or investor — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Form + Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-gray-700 font-medium block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium block mb-1">Message</label>
                <textarea
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Email</p>
                <a href="mailto:smurugesan@iofa.co.in" className="text-green-600 hover:underline">smurugesan@iofa.co.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Phone</p>
                <a href="tel:+919444781692" className="text-green-600 hover:underline">+91 94447 81692</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Office</p>
                <p className="text-gray-600">
                  MS International <br />
                  38,28,TVS Flats
 Venkatnarayana Road,
 T.Nagar,<br />
 Chennai - 600017
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
