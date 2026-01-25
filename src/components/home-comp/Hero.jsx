import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="SVCMS Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sv-blue/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-sv-blue via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-sv-gold/20 border border-sv-gold text-sv-gold text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
            Admissions Open for 2026-27
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sv-gold to-yellow-200">
              Education & Character
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join Swami Vivekananda College to experience a curriculum that blends academic rigor with moral leadership.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-sv-maroon hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-red-900/40 flex items-center gap-2 group">
              Start Application 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
              <Download size={20} /> Download Brochure
            </button>
          </div>
        </motion.div>
      </div>

      {/* News Ticker Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-sv-maroon/90 backdrop-blur-md border-t border-white/10 py-3 z-20 overflow-hidden">
        <div className="flex items-center container mx-auto px-4">
          <span className="bg-sv-gold text-sv-blue text-xs font-bold px-2 py-1 rounded mr-4 flex-shrink-0 uppercase">
            Latest News
          </span>
          <div className="whitespace-nowrap overflow-hidden w-full relative">
            <motion.div 
              className="inline-block text-white/90 text-sm font-medium"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              HSC Board Exam Schedule Released  •  Guest Lecture by Dr. Patil on 25th Jan  •  Annual Sports Day Registration Open  •  Scholarship Applications due by Feb 1st
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;