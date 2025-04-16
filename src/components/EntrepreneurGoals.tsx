import React from 'react';
import { 
  Users, 
  Store, 
  Factory, 
  LineChart, 
  Network,
  Briefcase,
  Building,
  ArrowRight
} from 'lucide-react';

interface SupportPillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportPillar: React.FC<SupportPillarProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="font-bold text-lg mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
        <button className="mt-3 flex items-center text-green-400 font-medium text-sm hover:text-blue-800 transition-colors" onClick={() => window.location.href = "/LearnMore"}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
interface GoalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const GoalCard: React.FC<GoalCardProps> = ({ icon, title, description, points }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold ml-4 text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <span className="text-green-400 text-sm">✓</span>
            </span>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow-md">
        Join Initiative
      </button>
    </div>
  );
};

const EntrepreneurGoals: React.FC = () => {
  const goals = [
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "1000 Visionary Leaders",
      description: "Identify and nurture purpose-driven entrepreneurs across multiple sectors.",
      points: [
        "Purpose-driven leadership development",
        "Cross-sector expertise building",
        "Mentorship and operational support"
      ]
    },
    {
      icon: <Store className="w-6 h-6 text-green-400" />,
      title: "12,524 Natural Angadis",
      description: "Establish integrated retail and wellness hubs across communities.",
      points: [
        "4:30 AM to 9:30 PM operation",
        "Toxin-free produce retail",
        "Traditional wellness services"
      ]
    },
    {
      icon: <Factory className="w-6 h-6 text-green-400" />,
      title: "Zero-Emission Processing",
      description: "Create sustainable agri-processing and rural industry networks.",
      points: [
        "Solar-powered storage units",
        "Zero-waste processing centers",
        "Decentralized production hubs"
      ]
    },
    {
      icon: <LineChart className="w-6 h-6 text-green-400" />,
      title: "Sustainable Value Chains",
      description: "Build transparent and traceable supply chains from farm to retail.",
      points: [
        "Blockchain-based traceability",
        "Fair pricing models",
        "Direct farmer connections"
      ]
    },
    {
      icon: <Network className="w-6 h-6 text-green-400" />,
      title: "Network Integration",
      description: "Connect entrepreneurs with FPOs and farming communities.",
      points: [
        "Real-time coordination",
        "B2B platform access",
        "Community engagement"
      ]
    }
  ];

  const supportPillars = [
    {
      icon: <Briefcase className="w-6 h-6 text-green-400" />,
      title: "Capacity Building",
      description: "Comprehensive training, business coaching, and leadership mentoring"
    },
    {
      icon: <Building className="w-6 h-6 text-green-400" />,
      title: "Infrastructure Support",
      description: "Access to space, utilities, and shared services for Angadis"
    },
    {
      icon: <LineChart className="w-6 h-6 text-green-400" />,
      title: "Financial Enablement",
      description: "Facilitated access to loans, grants, and investor networks"
    }
  ];

  return (
    <section id="entrepreneurs" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-green-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Entrepreneur Mission
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Building the Future with <span className="text-green-400">Visionary Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            MSI is calling upon 1000 visionary entrepreneurs to become champions of sustainable 
            development, local innovation, and inclusive economic growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 mt-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-200 opacity-20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-blue-300 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Holistic Support Structure
            </h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              We provide comprehensive support to ensure your entrepreneurial journey is successful
              and impactful.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {supportPillars.map((pillar, index) => (
                <SupportPillar key={index} {...pillar} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl">
            Become a Visionary Leader
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Applications open for the 2024 cohort
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurGoals;