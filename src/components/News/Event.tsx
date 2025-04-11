import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, MapPin, ArrowRight, Users, Globe, Tag } from 'lucide-react';

const events = [
  {
    title: 'Agri-Innovators Summit 2025',
    date: 'May 12, 2025',
    location: 'Indore, India',
    description: 'A gathering of visionary entrepreneurs, experts, and investors driving sustainable agriculture.',
    category: 'Conference',
    attendees: '500+',
    isVirtual: false,
    image: 'https://images.unsplash.com/photo-1594394874672-20753dd9267a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'MSI Startup Pitch Night',
    date: 'June 3, 2025',
    location: 'Virtual Event',
    description: 'Pitch your sustainable idea to investors and mentors in a high-energy virtual showcase.',
    category: 'Pitch Event',
    attendees: '200+',
    isVirtual: true,
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Sustainable Tech Expo',
    date: 'July 18–20, 2025',
    location: 'Hyderabad, India',
    description: 'Explore innovations in green tech, health, and environmental solutions with global impact.',
    category: 'Expo',
    attendees: '1000+',
    isVirtual: false,
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1000'
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Event: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-70"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-600 font-semibold text-sm uppercase tracking-wider"
          >
            Join Our Community
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Upcoming <span className="text-green-600">Events</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-gray-600"
          >
            Connect, learn, and grow with the MSI community through our carefully curated events designed for innovation and collaboration.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {event.isVirtual && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    Virtual
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Category Tag */}
                <div className="flex items-center mb-4">
                  <Tag className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-600">{event.category}</span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarClock className="w-4 h-4 mr-2 text-gray-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    {event.attendees} Expected Attendees
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-green-600 font-medium text-sm group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#all-events"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
            >
              View All Events
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <p className="mt-4 text-sm text-gray-500">
            Stay updated with our latest events and announcements
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Event;