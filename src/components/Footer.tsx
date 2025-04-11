import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MSI</h3>
            <p className="mb-4">
              Transforming agriculture and empowering communities through sustainable practices
              and innovative solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-green-400">About Us</a></li>
              <li><a href="#farmers" className="hover:text-green-400">Farmers</a></li>
              <li><a href="#entrepreneurs" className="hover:text-green-400">Entrepreneurs</a></li>
              <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">Farmer Training</a></li>
              <li><a href="#" className="hover:text-green-400">Natural Angadis</a></li>
              <li><a href="#" className="hover:text-green-400">Health Initiatives</a></li>
              <li><a href="#" className="hover:text-green-400">Environmental Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contact@msi.org" className="hover:text-green-400">
                  contact@msi.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919876543210" className="hover:text-green-400">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>123 Sustainable Way,<br />Green City, 560001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2025 MSI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;