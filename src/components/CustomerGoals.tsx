import React from 'react';
import { Truck, Clock, ShieldCheck, Award, Box, Cog as Yoga, Recycle, QrCode, Users } from 'lucide-react';

interface InnovationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
      <div className="bg-green-100 p-2 rounded-lg">
        {icon}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
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
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
              <span className="text-green-600 text-sm">✓</span>
            </span>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CustomerGoals: React.FC = () => {
  const goals = [
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Farm-to-Home Supply Chain",
      description: "Direct delivery of certified organic and regenerative produce to customers.",
      points: [
        "Fresh fruits and vegetables",
        "Traditional grains and A2 dairy",
        "Cold-pressed oils and herbal products"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "17-Hour Accessibility",
      description: "Extended service hours from 4:30 AM to 9:30 PM for maximum convenience.",
      points: [
        "Round-the-clock food access",
        "Integrated wellness services",
        "Mobile delivery solutions"
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "Quality & Transparency",
      description: "Ensuring highest standards through rigorous testing and traceability.",
      points: [
        "Community-run testing labs",
        "Affordable pricing models",
        "Digital product tracking"
      ]
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Wellness Rewards",
      description: "Innovative loyalty program linking purchases to health outcomes.",
      points: [
        "MSI Health Points system",
        "Wellness session rewards",
        "Eco-friendly incentives"
      ]
    }
  ];

  const innovations = [
    {
      icon: <Box className="w-6 h-6 text-green-600" />,
      title: "Subscription Boxes",
      description: "Personalized food and health packages based on seasonal availability and individual needs"
    },
    {
      icon: <Yoga className="w-6 h-6 text-green-600" />,
      title: "Wellness Add-ons",
      description: "Integrated yoga, diet consultation, and naturopathy services"
    },
    {
      icon: <Recycle className="w-6 h-6 text-green-600" />,
      title: "Zero-Waste Packaging",
      description: "Sustainable packaging with container return and recycling program"
    },
    {
      icon: <QrCode className="w-6 h-6 text-green-600" />,
      title: "Digital Traceability",
      description: "Complete transparency from farm to table through QR code scanning"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Family Health Integration",
      description: "Comprehensive wellness tracking linked to household consumption patterns"
    }
  ];

  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Mission Goals for Customers</h2>
          <p className="text-xl text-gray-600">
            MSI places the customer at the center of a regenerative ecosystem — not just as buyers, 
            but as partners in health, sustainability, and community upliftment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Customer-Centric Innovations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <InnovationCard key={index} {...innovation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerGoals;