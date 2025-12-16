import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', color: 'hover:text-[#F24E1E]' },
    { name: 'Skills', href: '#skills', color: 'hover:text-[#A259FF]' },
    { name: 'Projects', href: '#projects', color: 'hover:text-[#1ABCFE]' },
    { name: 'Achievements', href: '#achievements', color: 'hover:text-[#0ACF83]' },
    { name: 'Academics', href: '#academics', color: 'hover:text-[#FFC700]' },
    { name: 'Experience', href: '#experience', color: 'hover:text-[#F24E1E]' },
    { name: 'Contact', href: '#contact', color: 'hover:text-[#1ABCFE]' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-1"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-[#F24E1E]">&lt;</span>
            <span className="bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] bg-clip-text text-transparent">Portfolio</span>
            <span className="text-[#0ACF83]">/&gt;</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-semibold text-gray-600 ${item.color} transition-colors relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F24E1E] to-[#A259FF] group-hover:w-full transition-all duration-300`}></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 bg-white border-t border-gray-200"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-4 text-gray-600 ${item.color} hover:bg-gray-100 rounded-lg transition-colors font-medium`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;