import React from 'react';
import { TrendingUp, Users, TreePine, Heart, DollarSign } from 'lucide-react';

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <div className="text-4xl font-bold mb-2">6L</div>
            <div className="text-gray-400">Acres Converted</div>
          </div>
          
          <div>
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <div className="text-4xl font-bold mb-2">6L</div>
            <div className="text-gray-400">Farmers Empowered</div>
          </div>
          
          <div>
            <TreePine className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <div className="text-4xl font-bold mb-2">12K+</div>
            <div className="text-gray-400">Natural Angadis</div>
          </div>
          
          <div>
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
            <div className="text-4xl font-bold mb-2">1M+</div>
            <div className="text-gray-400">Lives Impacted</div>
          </div>
          
          <div>
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-400">Income Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;