import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, Landmark, Globe2, GraduationCap } from 'lucide-react';

interface StatProps {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}

const Stat: React.FC<StatProps> = ({ icon: Icon, value, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 20;
      const stepTime = duration / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += numericValue / steps;
        if (current > numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, numericValue]);
  
  const displayValue = value.includes('+') ? `${count}+` : count.toString();
  
  return (
    <motion.div
      ref={ref}
      className="text-center px-4 py-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-full -ml-8 -mb-8" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 text-green-700">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-4xl font-bold text-gray-800 mb-2 font-display">
          {displayValue}
        </h3>
        
        <div className="h-1 w-12 bg-green-500 mx-auto my-3" />
        
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { icon: Sprout, value: '25+', label: 'Years in Agriculture', delay: 0 },
    { icon: Landmark, value: '24000+', label: 'Hectares Regenerated', delay: 0.2 },
    { icon: Globe2, value: '85%', label: 'Chemical-Free Food Target', delay: 0.4 },
    { icon: GraduationCap, value: '6+', label: 'Academic Degrees', delay: 0.6 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="py-20 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-700 tracking-widest uppercase">
            Our impact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            The Numbers Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;