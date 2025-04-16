import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Lightbulb, Users } from "lucide-react";

const LearnMore: React.FC = () => {
  const cards = [
    {
      title: "Sustainable Agriculture",
      content:
        "We promote practices that protect the environment, improve soil health, and increase productivity for farmers. Our innovative approaches combine traditional wisdom with modern technology.",
      icon: Leaf,
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Health & Nutrition",
      content:
        "From promoting organic produce to launching health awareness programs, we support holistic well-being. Our initiatives focus on both physical and mental health aspects of community development.",
      icon: Heart,
      color: "from-red-400 to-pink-600",
    },
    {
      title: "Entrepreneur Empowerment",
      content:
        "We foster entrepreneurship in rural areas, helping individuals turn ideas into sustainable businesses. Our mentorship programs provide guidance, resources, and networking opportunities.",
      icon: Lightbulb,
      color: "from-yellow-400 to-amber-600",
    },
    {
      title: "Community Collaboration",
      content:
        "We work with experts, volunteers, and local communities to co-create solutions tailored to their unique challenges. Our participatory approach ensures sustainable and effective outcomes.",
      icon: Users,
      color: "from-blue-400 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent px-4">
            Learn More About MSI
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4"
          >
            At MSI, we believe in transforming agriculture and empowering communities through sustainability, 
            technology, and community-driven initiatives.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-xl 
                         border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r ${card.color}`} />
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${card.color} bg-opacity-10 mb-4`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full 
                           text-white font-semibold shadow-lg hover:shadow-green-500/20 
                           transform hover:-translate-y-1 transition-all duration-300">
            Join Our Mission
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;