import React from 'react';
import { motion } from 'framer-motion'; // Added Import
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.png';

const Footer = () => {
  void motion;
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
            <img src={logoIcon} alt="SVICSM" className="w-10 h-10 bg-white rounded-full object-contain p-1" />
            <span className="font-bold text-lg leading-tight">Swami Vivekananda Institute of Commerce, Science &amp; Management</span>
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
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about/svicsm" className="hover:text-white transition-colors">About SVICSM</Link></li>
            <li><Link to="/academics/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
            <li><Link to="/academics/results" className="hover:text-white transition-colors">Results</Link></li>
            <li><Link to="/admissions/process" className="hover:text-white transition-colors">Admissions</Link></li>
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

        {/* Map */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-bold text-lg mb-6 text-sv-gold">Find Us</h4>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="SVICSM Location"
              src="https://www.google.com/maps?q=20.1693189,73.9910487&z=17&output=embed"
              className="w-full h-40"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/place/Swami+Vivekananda+Junior+Inst.+of+Commerce+%26+Science/@20.1693239,73.9884738,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdddb1eda90f145:0x9ea9cb1fb615eed9!8m2!3d20.1693189!4d73.9910487!16s%2Fg%2F11nh4kr_my?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <MapPin size={16} className="text-sv-gold" />
            Open in Google Maps
          </a>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 SVCMS. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/admin/login" className="hover:text-white">Admin Portal</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;