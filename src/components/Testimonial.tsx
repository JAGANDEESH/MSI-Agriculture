import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import ceoimg from '../assets/MSICEO.png';

const Testimonial: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-white overflow-hidden">
      {/* Background blur + gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-white opacity-80" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-200 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            A Message from Our <span className="text-green-600 relative inline-block">
              Visionary Leader
              <span className="absolute bottom-1 left-0 w-full h-1 bg-green-200/60 -skew-x-12 z-[-1]" />
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Inspiring sustainable futures with wisdom, compassion, and action.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-md px-6 md:px-12 py-12 text-left"
        >
          <Quote className="absolute top-6 right-6 text-green-500/10 w-12 h-12" />

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-10 relative z-10">
            “Intent of well-being at all planes of human life form as a community is our only desire. Our core principles being compassion, gratitude, and selfless help, we have carved out the niche plans of what is needed for sustained growth...<br /><br />
            I strongly believe that <span className="font-semibold text-green-700">‘We do not inherit the Earth from our ancestors; we borrow it from our children.’</span> Hence, we must leave it as sustainable as possible for them to cherish.”
          </p>

          {/* CEO Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={ceoimg}
                alt="S.MURUGESAN"
                className="w-20 h-20 rounded-full object-cover border-2 border-green-100"
              />
              <motion.div
                className="absolute inset-0 border-2 border-green-400 rounded-full"
                initial={{ opacity: 0, scale: 1.2 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-base md:text-lg font-semibold text-gray-900">S.MURUGESAN</h4>
              <p className="text-sm text-gray-500"> President, Indian Organic Farms Association</p>
              <div className="flex justify-center sm:justify-start mt-1 space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
