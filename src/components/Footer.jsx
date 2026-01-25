import React from 'react';
import { motion } from 'framer-motion'; // Added Import
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sv-blue text-white pt-20 pb-10 border-t-4 border-sv-gold">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
        
        {/* Brand Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sv-maroon font-bold text-xl">SV</div>
            <span className="font-bold text-lg leading-tight">Swami Vivekananda <br/> College</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering students with knowledge, skills, and values to lead the future.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sv-gold hover:text-sv-blue transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Quick Links */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-bold text-lg mb-6 text-sv-gold">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {['Admissions', 'Student Portal', 'Exam Results', 'Alumni Network', 'Careers'].map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-bold text-lg mb-6 text-sv-gold">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-sv-gold mt-1 shrink-0" />
              <span>Pimpalgaon Baswant, <br/>Nashik, Maharashtra - 422209</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sv-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sv-gold shrink-0" />
              <span>info@svcms.edu.in</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-bold text-lg mb-6 text-sv-gold">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get admission updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm w-full focus:outline-none focus:border-sv-gold text-white" 
            />
            <button className="bg-sv-maroon px-4 py-2 rounded text-sm font-bold hover:bg-red-900 transition-colors">
              Join
            </button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 SVCMS. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;