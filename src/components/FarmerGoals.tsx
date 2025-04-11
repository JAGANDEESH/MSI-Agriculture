import React from 'react';
import {
  Users,
  Sprout,
  GraduationCap,
  Building2,
  HomeIcon,
  Package,
  Leaf
} from 'lucide-react';
import empower from '../assets/empower.jpg';
import organicFields from '../assets/organic-fields.jpg';
import training from '../assets/training.png';
import fpo from '../assets/fpo.webp';
import Healthy from '../assets/Healthy.jpg';
import agriculture from '../assets/agriculture-infrastructure-fund.jpg'; 

import kits from '../assets/kits.png';
interface GoalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  image?: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ icon, title, description, points, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {image && (
        <div className="overflow-hidden rounded-lg mb-4 h-40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold ml-3 text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mt-auto">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
              <span className="text-green-600 text-xs">✓</span>
            </span>
            <span className="text-gray-700 text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FarmerGoals: React.FC = () => {
  const goals = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Empower 6 Lakh Farmers",
      description: "Transform conventional farming through sustainable practices and community-driven agriculture.",
      points: [
        "Identify and onboard farmers across diverse agro-climatic zones",
        "Introduce regenerative and natural farming methods",
        "Facilitate peer-to-peer mentorship"
      ],
      image: empower
    },
    {
      icon: <Sprout className="w-6 h-6 text-green-600" />,
      title: "Cultivate 6 Lakh Organic Acres",
      description: "Convert existing chemical farms into certified organic zones within 5 years.",
      points: [
        "Phased conversion to organic farming",
        "Cluster-based land transformation",
        "Ensure compliance with organic standards"
      ],
      image: organicFields
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      title: "Training Programs (TOT)",
      description: "Comprehensive training programs for knowledge transfer and skill development.",
      points: [
        "Natural farming and soil rejuvenation techniques",
        "Water conservation and crop rotation",
        "Multi-lingual video-based training"
      ],
      image: training
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-600" />,
      title: "Establish FPOs",
      description: "Organize farmers into Producer Organizations for collective growth and empowerment.",
      points: [
        "Collective bargaining power",
        "Access to credit and government schemes",
        "Leadership development"
      ],
      image: fpo
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-green-600" />,
      title: "Village Infrastructure",
      description: "Build essential infrastructure to support sustainable farming practices.",
      points: [
        "Goshalas in every union",
        "Local seed production units",
        "Community nurseries"
      ],
      image: agriculture
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: "Farmer Enablement Kits",
      description: "Provide comprehensive support through customized farming kits and tools.",
      points: [
        "Natural farming input kits",
        "Solar pumps and irrigation systems",
        "Mobile advisory support"
      ],
      image: kits
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Soil Health Revival",
      description: "Promote integrated farming approaches for soil regeneration.",
      points: [
        "Mixed cropping and livestock integration",
        "Biofertilizer production training",
        "Zero-budget natural farming"
      ],
      image: Healthy
    }
  ];

  return (
    <section id="farmers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Mission Goals for Farmers</h2>
          <p className="text-xl text-gray-600">
            MSI envisions a future where every farmer becomes a steward of the soil, 
            a leader of sustainability, and a champion of community-driven agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <GoalCard key={`goal-${index}`} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerGoals;