import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Life', href: '#campus' },
  ];

  return (
    <>
      {/* Top Bar for Contact Info - Optional but professional */}
      <div className="bg-sv-maroon text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center hidden md:flex">
        <span>Empowering Future Leaders at SVCMS</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> +91 98765 43210</span>
          <span>admission@svcms.edu.in</span>
        </div>
      </div>

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white py-4' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
             {/* Replace with your actual image path */}
            <img src="/public/images/logo-name.png" alt="SVCMS Logo" className="h-12 md:h-18" />
            {/* <div className={`flex flex-col ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
              <span className="font-bold text-sv-blue text-lg leading-tight tracking-tight">
                SWAMI VIVEKANANDA
              </span>
              <span className="text-xs text-sv-maroon font-semibold tracking-widest">
                COMMERCE & SCIENCE MANAGEMENT
              </span>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-sv-maroon font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sv-maroon hover:bg-red-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md flex items-center gap-2"
            >
              <GraduationCap size={16} />
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sv-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-800 font-medium hover:text-sv-maroon pl-2 border-l-4 border-transparent hover:border-sv-gold transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full bg-sv-maroon text-white py-3 rounded-lg font-bold mt-2">
                  Apply Online
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;