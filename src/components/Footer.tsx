import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full z-10">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#111827"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-10 right-0 w-72 h-72 bg-green-600/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -top-10 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white mb-4 relative group">
              MSI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-12"></span>
            </h3>
            <p className="text-sm leading-relaxed opacity-90 hover:opacity-100 transition-opacity">
              Transforming agriculture and empowering communities through sustainable practices
              and innovative solutions that matter.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-400"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/AboutUs" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  About Us
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/farming" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Farmers
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/entrepreneurship" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Entrepreneurs
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/contact" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide relative inline-block">
              Programs
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-400"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/product" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Products
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/ResearchAndDevelopment" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Research And Development
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/Testimonial" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                 Testimonial
                </a>
              </li>
              <li className="transform transition-transform duration-200 hover:translate-x-2">
                <a href="/Support" className="hover:text-green-400 transition flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Supports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-400"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="group">
                <a
                  href="mailto:smurugesan@iofa.co.in"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-green-400 mr-3 transform transition-transform group-hover:scale-110" />
                  <span className="hover:text-green-400 transition">smurugesan@iofa.co.in</span>
                </a>
              </li>
              <li className="group">
                <a
                  href="tel:+919444781692"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-green-400 mr-3 transform transition-transform group-hover:scale-110" />
                  <span className="hover:text-green-400 transition">+91 94447 81692</span>
                </a>
              </li>
              <li className="group">
                <div className="flex items-start p-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 transform transition-transform group-hover:scale-110" />
                  <span>38, 28, TVS Flats<br />Venkatnarayana Road, T. Nagar,<br />Chennai - 600017</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h5 className="text-white text-lg font-semibold mb-4">Subscribe to Our Newsletter</h5>
            <p className="text-sm mb-6 opacity-80">
              Stay updated with our latest initiatives and community impact.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} MSI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-green-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-green-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
