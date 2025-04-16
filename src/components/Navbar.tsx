import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Search, LogIn } from 'lucide-react';
import MSI_Logo from '../assets/Msi_Logo.jpeg';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navLinks = [
  { label: 'Story of MSI', href: '/Story_of_msi' },
  {
    label: 'Services',
    dropdown: [
      { label: 'Farming', href: '/farming' },
      { label: 'Entrepreneurship', href: '/entrepreneurship' },
      { label: 'Consumer Zone', href: '/ConsumerZone' },
      { label: 'Experts Innovation', href: '/ExportsInnovations' },
      { label: 'Business Funding', href: '/BusinessFunding' },
    ],
  },
  { label: 'Products', href: '/Product' },
  { label: 'Research & Development', href: '/ResearchAndDevelopment' },
  {
    label: 'News Letters',
    dropdown: [
      { label: 'Events', href: '/event' },
      { label: 'Media', href: '/media' },
    ],
  },
  { label: 'Testimonial', href: '/testimonial' },
  { label: 'Blog', href: '/blog' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  const navbarBackground = isHome ? (isScrolled ? 'bg-white shadow-lg' : 'bg-transparent') : 'bg-white shadow-lg';
  const textColor = isHome ? (isScrolled ? 'text-gray-800' : 'text-white') : 'text-gray-800';

  const isActive = (path: string) => location.pathname.toLowerCase() === path.toLowerCase();

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${navbarBackground}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="/"
              className="flex items-center mr-16 space-x-3 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={MSI_Logo}
                alt="MSI Logo"
                className={`w-12 h-12 transition-all duration-300 rounded-full ${
                  isHome && !isScrolled ? 'border-2 border-white' : 'border-2 border-green-500'
                }`}
              />
              <span
                className={`text-2xl font-bold whitespace-nowrap ${
                  isHome && !isScrolled ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span className="text-green-600 ">MS</span> International
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        isHome && !isScrolled
                          ? 'text-white hover:bg-white/20'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-3 text-sm whitespace-nowrap ${
                                isActive(item.href)
                                  ? 'bg-green-50 text-green-600'
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                      isHome && !isScrolled
                        ? 'text-white hover:bg-white/20'
                        : isActive(link.href)
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
              {/* Optional: Profile & Search Icons */}
              <button className={`p-2 ${textColor}`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className={`p-2 ${textColor}`} aria-label="Login">
                <LogIn className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md ${textColor}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            <div className="space-y-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full py-3 text-gray-800 font-medium whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <motion.span animate={{ rotate: mobileDropdown === link.label ? 90 : 0 }}>
                        <ChevronRight className="h-5 w-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-gray-600 hover:text-green-600 whitespace-nowrap"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block py-3 border-b border-gray-100 whitespace-nowrap ${
                      isActive(link.href) ? 'text-green-600 font-semibold' : 'text-gray-800'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            <div className="mt-6 space-y-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 whitespace-nowrap"
              >
                Contact Us
              </a>
              <div className="flex items-center space-x-4">
                <button onClick={() => setShowSearch(!showSearch)} className="text-gray-700 hover:text-green-600">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-gray-700 hover:text-green-600">
                  <LogIn className="w-5 h-5" />
                </button>
              </div>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative w-full bg-white border border-gray-200 shadow-lg p-4 rounded z-50"
                >
                  <form action="/search" method="get">
                    <input
                      type="text"
                      name="q"
                      placeholder="Search Here..."
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 truncate"
                    />
                    <button
                      type="submit"
                      className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 flex items-center justify-center"
                    >
                      <Search className="w-4 h-4 mr-1" />
                      Search
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
