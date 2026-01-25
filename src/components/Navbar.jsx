import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, GraduationCap, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Data Structure
  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'About Us', 
      href: '#about',
      subLinks: [
        { name: 'About SVCMS', href: '#about-svcms' },
        { name: 'Vision & Mission', href: '#vision' },
        { name: 'Leadership', href: '#leadership' },
      ]
    },
    { 
      name: 'Academics', 
      href: '#academics',
      subLinks: [
        { name: 'Courses & Curriculum', href: '#courses' },
        { name: 'Faculty', href: '#faculty' },
        { name: 'Results & Achievements', href: '#results' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '#admissions',
      subLinks: [
        { name: 'Admission Process', href: '#process' },
        { name: 'Fee Structure', href: '#fees' },
        { name: 'Scholarships', href: '#scholarships' },
      ]
    },
    { 
      name: 'Campus Life', 
      href: '#campus',
      subLinks: [
        { name: 'Activities & Events', href: '#activities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
      ]
    },
  ];

  const handleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* HEADER CONTAINER 
        We use 'fixed' to keep it at the top.
        The top bar slides up (negative margin) when scrolled.
      */}
      <header className="fixed w-full z-50 transition-all duration-300 shadow-sm">
        
        {/* TOP BAR (Contact Info) */}
        <div 
          className={`bg-sv-maroon text-white text-xs overflow-hidden transition-all duration-300 ${
            isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
          }`}
        >
          <div className="w-full pl-0 pr-4 md:pr-8 h-full flex justify-between items-center">
            <span className="hidden md:flex items-center gap-2 pl-4">
              {/* <MapPin size={14} className="text-white" />  */}
              Empowering Future Leaders at SVCMS
            </span>
            <div className="flex justify-between w-full md:w-auto gap-6">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-white" /> +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-white" /> admission@svcms.edu.in
              </span>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="w-full pl-4 pr-4 md:pr-8">
            <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2'}`}>
              
              {/* LEFT: BIG LOGO */}
              <div className="flex-shrink-0">
                <img 
                  src="/public/images/logo-name.png" 
                  alt="SVCMS Logo" 
                  // Bigger logo size
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-14 md:h-20' : 'h-16 md:h-24'
                  }`} 
                />
              </div>

              {/* CENTER: DESKTOP NAVIGATION */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setHoveredDropdown(item.name)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-1 text-sv-blue hover:text-sv-maroon font-bold text-sm uppercase tracking-wide py-4"
                    >
                      {item.name}
                      {item.subLinks && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                    </a>

                    {/* Desktop Dropdown Menu */}
                    {item.subLinks && (
                      <AnimatePresence>
                        {hoveredDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0, 
                              scaleY: 1,
                              transition: {
                                duration: 0.3,
                                ease: [0.4, 0.0, 0.2, 1],
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: -10, 
                              scaleY: 0.8,
                              transition: {
                                duration: 0.2,
                                ease: [0.4, 0.0, 1, 1]
                              }
                            }}
                            className="absolute top-full left-0 bg-white shadow-2xl border-t-4 border-sv-maroon rounded-b-xl w-64 overflow-hidden origin-top"
                            style={{
                              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                          >
                            {item.subLinks.map((subLink, index) => (
                              <motion.a
                                key={subLink.name}
                                href={subLink.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ 
                                  opacity: 1, 
                                  x: 0,
                                  transition: {
                                    delay: index * 0.05,
                                    duration: 0.3,
                                    ease: [0.4, 0.0, 0.2, 1]
                                  }
                                }}
                                whileHover={{ 
                                  x: 8,
                                  backgroundColor: 'rgba(249, 250, 251, 1)',
                                  transition: { duration: 0.2 }
                                }}
                                className="block px-5 py-3.5 text-sm text-gray-700 hover:text-sv-maroon border-b border-gray-100 last:border-0 transition-colors relative group"
                              >
                                <span className="relative z-10">{subLink.name}</span>
                                <motion.div 
                                  className="absolute left-0 top-0 h-full w-1 bg-sv-gold"
                                  initial={{ scaleY: 0 }}
                                  whileHover={{ scaleY: 1 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ originY: 0.5 }}
                                />
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* RIGHT: CTA & MOBILE TOGGLE */}
              <div className="flex items-center gap-4">
                {/* Desktop CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex bg-sv-maroon hover:bg-red-900 text-white px-6 py-3 rounded-full font-bold text-sm shadow-md items-center gap-2 transition-all"
                >
                  <GraduationCap size={18} />
                  Apply Now
                </motion.button>

                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden text-sv-blue p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white fixed top-[80px] left-0 w-full overflow-y-auto pb-32 border-t shadow-inner"
              style={{ maxHeight: 'calc(100vh - 80px)' }} // Prevent scrolling past viewport
            >
              <div className="flex flex-col p-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    <div 
                      className="flex justify-between items-center py-4 pr-2"
                      onClick={() => item.subLinks ? handleMobileDropdown(item.name) : setIsMobileMenuOpen(false)}
                    >
                      <a 
                        href={item.href} 
                        className="text-lg font-bold text-sv-blue"
                      >
                        {item.name}
                      </a>
                      {item.subLinks && (
                        <button onClick={(e) => {
                          e.preventDefault();
                          handleMobileDropdown(item.name);
                        }}>
                          <ChevronDown 
                            size={20} 
                            className={`text-sv-gold transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu Accordion */}
                    <AnimatePresence>
                      {item.subLinks && activeMobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto', 
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.4,
                                ease: [0.4, 0.0, 0.2, 1]
                              },
                              opacity: {
                                duration: 0.3,
                                delay: 0.1
                              }
                            }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: [0.4, 0.0, 1, 1]
                              },
                              opacity: {
                                duration: 0.2
                              }
                            }
                          }}
                          className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-2 shadow-inner"
                        >
                          {item.subLinks.map((subLink, index) => (
                            <motion.a
                              key={subLink.name}
                              href={subLink.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: 1, 
                                x: 0,
                                transition: {
                                  delay: index * 0.05,
                                  duration: 0.3
                                }
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="block px-4 py-3.5 text-gray-600 hover:text-sv-maroon hover:bg-white/60 text-sm font-medium pl-6 border-l-4 border-transparent hover:border-sv-gold transition-all relative group"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                <motion.span
                                  className="w-1.5 h-1.5 rounded-full bg-sv-gold opacity-0 group-hover:opacity-100"
                                  initial={{ scale: 0 }}
                                  whileHover={{ scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                />
                                {subLink.name}
                              </span>
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-6">
                  <button className="w-full bg-sv-maroon text-white py-4 rounded-xl font-bold text-lg shadow-lg flex justify-center items-center gap-2">
                    <GraduationCap size={24} />
                    Apply Online
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* SPACER
        Because the header is 'fixed', we need a div behind it to push content down.
        Adjust height based on your header's total height.
      */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-[88px]' : 'h-[120px] md:h-[136px]'}`}></div>
    </>
  );
};

export default Navbar;