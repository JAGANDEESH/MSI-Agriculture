import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={ref} className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-16 md:mb-0`}>
      <motion.div 
        className={`w-full md:w-5/12 ${isLeft ? 'text-right md:pr-10' : 'md:pl-10'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 * index }}
      >
        <div className={`p-6 rounded-lg shadow-md bg-white ${isLeft ? 'ml-auto mr-0' : 'mr-auto ml-0'} max-w-sm border-t-4 border-green-600`}>
          <span className="text-sm font-semibold text-green-700">{year}</span>
          <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      <div className="hidden md:block w-2/12 relative">
        <div className="h-full w-1 bg-green-200 absolute left-1/2 transform -translate-x-1/2"></div>
        <motion.div 
          className="w-5 h-5 rounded-full bg-green-600 border-4 border-white shadow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 * index }}
        />
      </div>

      <div className="hidden md:block w-5/12"></div>
    </div>
  );
};

const JourneySection: React.FC = () => {
  const timelineEvents = [
    {
      year: 'Early Career',
      title: 'National Dairy Development Board',
      description: 'Led large-scale land regeneration projects, reviving over 24,000 hectares of degraded land.'
    },
    {
      year: '2000s',
      title: 'Biological Organic Farming',
      description: 'Became an international consultant, blending traditional wisdom with modern techniques.'
    },
    {
      year: '2010s',
      title: 'President of IOFA',
      description: 'Pioneered digital transformation in Indian agriculture, introducing precision organic farming.'
    },
    {
      year: 'Present',
      title: 'Sustainable Development',
      description: 'Working towards making India a fully organic nation by 2030, aligned with UN\'s SDGs.'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 px-6 sm:px-10 bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-700 tracking-widest uppercase">
            A journey of impact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Dr. Murugesan's Journey
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            From regenerating degraded land to pioneering sustainable agriculture models,
            follow the transformative journey spanning over 25 years.
          </p>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-sm font-semibold text-green-700">{event.year}</span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;