import React from 'react';
import { Leaf, Heart, TreePine } from 'lucide-react';

const FocusAreas: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Focus Areas</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <Leaf className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Agriculture</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Organic and regenerative farming</li>
              <li>• Agri-Clinics and e-Agritech platforms</li>
              <li>• Value addition units</li>
              <li>• Agri-tourism and model farms</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-xl">
            <Heart className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Health</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Integrative AYUSH clinics</li>
              <li>• Native vegetable medicine kits</li>
              <li>• Disease reversal programs</li>
              <li>• Post-surgery support</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <TreePine className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Environment</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Galaxy forests and herbal clusters</li>
              <li>• Water body rejuvenation</li>
              <li>• Biodiversity parks</li>
              <li>• Carbon trading platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;