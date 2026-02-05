import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "junior",
      title: "Junior Institute",
      subtitle: "11th & 12th (Sci/Com/Arts)",
      desc: "Build a strong foundation for NEET, JEE, CA/CS, and UPSC with our integrated Junior College programs.",
      icon: School,
      accent: "text-cyan-400",
      border: "hover:border-cyan-400",
      bgHover: "group-hover:bg-cyan-400/10",
      link: "/curriculum?type=junior" 
    },
    {
      id: "senior",
      title: "Senior Institute",
      subtitle: "UG Degrees (BBA, BCA, B.Com)",
      desc: "Advance your career with specialized undergraduate degrees focused on Management, Technology, and Commerce.",
      icon: GraduationCap,
      accent: "text-sv-gold",
      border: "hover:border-sv-gold",
      bgHover: "group-hover:bg-sv-gold/10",
      link: "/curriculum?type=senior"
    }
  ];

  return (
    <section className="py-24 bg-sv-blue relative overflow-hidden" id="academics">
      
      {/* Background Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-sv-maroon/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sv-gold/10 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sv-gold font-bold uppercase tracking-widest text-sm mb-3"
          >
            Academic Excellence
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Choose Your Path <span className="text-gray-400">To Success.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Whether you are starting your journey after 10th or looking for professional undergraduate degrees, we have the right path for you.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => navigate(item.link)}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl min-h-[400px] flex flex-col justify-between cursor-pointer transition-all duration-500 ${item.border} hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 rounded-3xl ${item.bgHover}`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  {/* FIX: Removed 'text-white' so the icon uses the accent color always */}
                  <div className={`p-4 rounded-2xl bg-white/10 ${item.accent} group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <item.icon size={40} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-wide mb-6 ${item.accent}`}>
                  {item.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                     <Star size={14} className="text-sv-gold" fill="#D97706" /> View Courses
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