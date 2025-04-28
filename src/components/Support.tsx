import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle, Users, ArrowRight, Phone, Mail, Shield } from 'lucide-react';

const supportOptions = [
  {
    title: 'Help Center',
    description: 'Find answers to common questions about MSI services, onboarding, and support tools.',
    icon: HelpCircle,
    bg: 'bg-green-50',
    link: '#',
    stats: '2,000+ Articles'
  },
  {
    title: 'Live Support',
    description: 'Need direct help? Chat with our team or request a callback from an MSI support expert.',
    icon: MessageCircle,
    bg: 'bg-blue-50',
    link: '#',
    stats: '24/7 Support'
  },
  {
    title: 'Community Forum',
    description: 'Engage with other users, share insights, and explore solutions from the MSI ecosystem.',
    icon: Users,
    bg: 'bg-yellow-50',
    link: '#',
    stats: '50K+ Members'
  },
];

const contactChannels = [
  {
    icon: Phone,
    text: '+91 94447 81692',
    bg: 'bg-green-100/50'
  },
  {
    icon: Mail,
    text: 'smurugesan@iofa.co.in',
    bg: 'bg-blue-100/50'
  },
  {
    icon: Shield,
    text: 'Priority Support',
    bg: 'bg-yellow-100/50'
  }
];

const Support: React.FC = () => {
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
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* SVG Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent" />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zM4 4h4v4H4V4zm8 0h4v4h-4V4zM0 8h4v4H0V8zm8 0h4v4H8V8zm8 0h4v4h-4V8zM4 12h4v4H4v-4zm8 0h4v4h-4v-4zM0 16h4v4H0v-4zm8 0h4v4H8v-4zm8 0h4v4h-4v-4z' fill='%2322c55e' fill-opacity='0.05'/%3E%3C/svg%3E")`
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-200 rounded-full blur-2xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            24/7 Support
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Need Help?{' '}
            <span className="text-green-600 relative inline-block">
              We're Here
              <span className="absolute bottom-0 left-0 w-full h-2 bg-green-200/50 -skew-x-12" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our support channels to get answers, connect with our team, or chat with the community.
          </p>
        </motion.div>

        {/* Contact Channels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {contactChannels.map((channel, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-center px-6 py-3 rounded-full ${channel.bg} backdrop-blur-sm`}
            >
              <channel.icon className="w-5 h-5 text-gray-700 mr-2" />
              <span className="text-sm font-medium text-gray-800">{channel.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${option.bg} mb-6`}>
                <option.icon className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                {option.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">{option.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{option.stats}</span>
                <motion.a
                  href={option.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-green-600 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
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
            <span className="relative z-10">Contact MSI Support</span>
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

export default Support;
