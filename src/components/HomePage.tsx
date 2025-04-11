import React from 'react';
import Hero from '../components/Hero';
import FarmerGoals from '../components/FarmerGoals';
import EntrepreneurGoals from '../components/EntrepreneurGoals';
import CustomerGoals from '../components/CustomerGoals';

import FocusAreas from '../components/FocusAreas';
import ImpactMetrics from '../components/ImpactMetrics';
import PillarSection from '../components/PillarSection';
import { Leaf, Users, Store, Brain, BarChart as ChartBar } from 'lucide-react';
// import FeatureCard from './FeatureCard';


const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FarmerGoals />
      <EntrepreneurGoals />
      <CustomerGoals />
    {/* <FeatureCard/> */}
      <section id="pillars" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Main Business Pillars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PillarSection
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Farmers"
              description="Empowering 6 lakh farmers for regenerative, natural, organic, and toxin-free farming across 6 lakh acres in 5 years."
              points={[
                "Training programs and FPO development",
                "Local Goshalas and seed production",
                "Technology support and cattle integration"
              ]}
            />
            <PillarSection
              icon={<Store className="w-8 h-8 text-blue-600" />}
              title="Entrepreneurs"
              description="Onboarding 1000 visionary entrepreneurs to lead the transformation through Natural Angadis and sustainable value chains."
              points={[
                "12,524 retail + healing hubs",
                "Zero-emission processing",
                "Farm-to-retail traceability"
              ]}
            />
            <PillarSection
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="Customers"
              description="Delivering organic products through an efficient farm-to-home supply chain with extended service hours."
              points={[
                "4:30 AM to 9:30 PM service",
                "Quality control measures",
                "Health-linked loyalty programs"
              ]}
            />
            <PillarSection
              icon={<Brain className="w-8 h-8 text-orange-600" />}
              title="Experts"
              description="Building a network of multidisciplinary experts in agriculture, health, environment, and social enterprise."
              points={[
                "Training and certification",
                "Research and innovation",
                "Quality auditing"
              ]}
            />
            <PillarSection
              icon={<ChartBar className="w-8 h-8 text-red-600" />}
              title="Investors"
              description="Structuring ethical, impact-driven investment models with hybrid funding approaches."
              points={[
                "Social impact focus",
                "Carbon credit monetization",
                "ESG-based returns"
              ]}
            />
          </div>
        </div>
      </section>
      <FocusAreas />
      <ImpactMetrics />
    </main>
  );
};

export default HomePage;
