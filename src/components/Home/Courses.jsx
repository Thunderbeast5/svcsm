import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Calculator, Palette, ArrowRight, BookOpen, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: "01",
      title: "Science Stream",
      subtitle: "Medical & Engineering",
      desc: "Comprehensive preparation for NEET, JEE, and CET with state-of-the-art labs and expert mentorship.",
      icon: Microscope,
      accent: "text-cyan-400", // Bright neon blue for dark mode
      border: "hover:border-cyan-400",
      bgHover: "group-hover:bg-cyan-400/10"
    },
    {
      id: "02",
      title: "Commerce Stream",
      subtitle: "Finance & Management",
      desc: "Practical training in Accounting, Economics, and Business Studies focused on CA/CS foundations.",
      icon: Calculator,
      accent: "text-sv-gold", // Your brand gold
      border: "hover:border-sv-gold",
      bgHover: "group-hover:bg-sv-gold/10"
    },
    {
      id: "03",
      title: "Arts & Humanities",
      subtitle: "Creative & Competitive",
      desc: "In-depth study of History, Political Science, and Languages geared towards MPSC/UPSC aspirants.",
      icon: Palette,
      accent: "text-pink-400", // Soft neon pink
      border: "hover:border-pink-400",
      bgHover: "group-hover:bg-pink-400/10"
    }
  ];

  return (
    <section className="py-24 bg-sv-blue relative overflow-hidden" id="academics">
      
      {/* --- ANIMATED BACKGROUND BLOBS --- */}
      {/* Top Right Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-sv-maroon/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"
      />

      {/* Bottom Left Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sv-gold/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sv-gold font-bold uppercase tracking-widest text-sm mb-3"
            >
              <span className="w-12 h-[2px] bg-sv-gold"></span>
              Academic Excellence
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Choose Your Path <br/>
              <span className="text-gray-400">To Success.</span>
            </h2>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-sv-blue transition-all duration-300"
          >
            <BookOpen size={18} /> Download Prospectus
          </motion.button>
        </div>

        {/* --- COURSE CARDS --- */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl h-[420px] flex flex-col justify-between transition-all duration-500 ${course.border} hover:-translate-y-2`}
            >
              {/* Hover Glow Effect Layer */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 rounded-3xl ${course.bgHover}`} />

              {/* Card Content Top */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  {/* Icon Box */}
                  <div className={`p-4 rounded-2xl bg-white/10 text-white ${course.accent} group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <course.icon size={32} />
                  </div>
                  {/* Watermark Number */}
                  <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-serif">
                    {course.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                  {course.title}
                </h3>
                <p className={`text-sm font-medium mb-6 ${course.accent}`}>
                  {course.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {course.desc}
                </p>
              </div>

              {/* Card Content Bottom (Footer) */}
              <div className="relative z-10 pt-8 border-t border-white/10 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-semibold group-hover:opacity-100 transition-opacity flex items-center gap-2">
                     <Star size={14} className="text-sv-gold" fill="#D97706" /> Top Rated Faculty
                  </span>
                  <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-sv-blue transition-all duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;