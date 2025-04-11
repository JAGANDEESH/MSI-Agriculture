import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Users, Heart, TrendingUp } from 'lucide-react';

const StoryOfMSI: React.FC = () => {
  const stats = [
    { icon: Sprout, value: '6L+', label: 'Empowered Farmers' },
    { icon: Users, value: '12K+', label: 'Natural Angadis' },
    { icon: Heart, value: '100%', label: 'Organic Products' },
    { icon: TrendingUp, value: '15+', label: 'Years of Impact' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/90" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Story of <span className="text-green-400">MS International</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            A journey of transformation, sustainability, and positive impact
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            {...fadeInUp}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MS International was born from a bold vision: to create a sustainable, 
                ethical, and impact-driven ecosystem where agriculture, health, 
                environment, and economy work together in harmony.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800"
                alt="Sustainable farming"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <motion.p {...fadeInUp}>
              What started as a grassroots initiative with a small group of visionaries 
              has evolved into a comprehensive movement involving farmers, entrepreneurs, 
              consumers, experts, and investors — all working toward a shared mission 
              of regenerative development.
            </motion.p>

            <motion.p {...fadeInUp}>
              With the challenges of toxic farming, disconnected markets, and 
              environmental decline, MSI set out to redefine the way we grow, 
              consume, heal, and invest. By empowering over 6 lakh farmers, 
              launching 12,000+ Natural Angadis, and building a transparent 
              farm-to-home supply chain, MSI is changing lives from the soil up.
            </motion.p>

            <motion.p {...fadeInUp}>
              We blend traditional wisdom with modern innovation, enabling holistic 
              wellbeing and self-reliance for rural and urban communities alike. 
              Whether it's the zero-emission processing units or health-linked 
              loyalty programs, every initiative is rooted in values of sustainability, 
              trust, and social upliftment.
            </motion.p>

            <motion.p 
              {...fadeInUp}
              className="text-xl font-semibold text-green-700 text-center mt-12"
            >
              MSI is not just a company — it's a movement. A family. A collective 
              path forward to heal people and the planet while building conscious 
              prosperity for generations to come.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryOfMSI;