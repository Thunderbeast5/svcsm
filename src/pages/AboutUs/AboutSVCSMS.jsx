import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Trophy, Users, BookOpen, CheckCircle } from 'lucide-react';

const AboutSVCMS = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" 
            alt="College Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sv-blue/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sv-gold font-bold uppercase tracking-widest text-sm block mb-4"
          >
            Since 2005
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About SVCMS
          </motion.h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A premier institution dedicated to academic excellence and holistic development in Nashik.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-sv-blue mb-6">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Swami Vivekananda College of Commerce, Science, and Management (SVCMS) was established with a singular vision: to bring world-class education to the heart of Maharashtra. Over the past two decades, we have evolved from a humble beginning into a center of excellence that shapes the leaders of tomorrow.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Located in the vibrant town of Pimpalgaon Baswant, our campus is a melting pot of culture, innovation, and tradition. We pride ourselves on offering a curriculum that balances rigorous academic standards with practical, real-world application.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "NAAC Accredited", icon: CheckCircle },
                { label: "ISO Certified", icon: CheckCircle },
                { label: "Award Winning", icon: Trophy },
                { label: "Green Campus", icon: Building2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <item.icon className="text-sv-maroon" size={20} />
                  <span className="font-bold text-sv-blue">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sv-gold/10 transform translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
              alt="Campus Life" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSVCMS;