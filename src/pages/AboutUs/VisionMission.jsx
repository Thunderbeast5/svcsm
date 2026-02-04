import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Quote, Compass } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      title: "Student-Centric Approach",
      desc: "We focus on the holistic development of students, placing their growth and success at the center of everything we do.",
      icon: Users
    },
    {
      title: "Innovative Solutions",
      desc: "Strengthening the teaching-learning process through innovative practices to stimulate scientific enquiry.",
      icon: Lightbulb
    },
    {
      title: "Exceptional Quality",
      desc: "Practicing quality pedagogy and providing state-of-the-art infrastructure for a better educational environment.",
      icon: Award
    },
    {
      title: "Dedication",
      desc: "A dedicated team committed to exceeding expectations and imparting training in entrepreneurial life skills.",
      icon: Target
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-5">
      {/* Hero Section */}
      <section className="bg-sv-blue relative overflow-hidden text-white py-32">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-sv-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-sv-maroon rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1 rounded-full border border-sv-gold/30 bg-sv-gold/10 text-sv-gold text-sm font-semibold tracking-wider uppercase"
          >
            Our Philosophy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            "Arise, awake, and stop not <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sv-gold to-orange-400">
              till the goal is reached.
            </span>"
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 font-light"
          >
            — Swami Vivekananda
          </motion.p>
        </div>
      </section>

      {/* Main Vision & Mission Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* VISION CARD - TITLE/LOGO IN CORNERS, TEXT CENTERED */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border-t-8 border-sv-gold relative min-h-[450px] flex flex-col"
          >
            {/* Top Section: Title Left, Icon Right */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <h2 className="text-3xl font-bold text-sv-blue uppercase tracking-wide">Our Vision</h2>
                <div className="w-12 h-12 bg-sv-gold/10 rounded-full flex items-center justify-center text-sv-gold">
                    <Target size={24} />
                </div>
            </div>

            {/* Middle Section: Perfectly Centered Text */}
            <div className="flex-grow flex items-center justify-center p-8 mt-12">
                <p className="text-gray-600 text-2xl font-serif text-center leading-relaxed italic">
                    "To be recognised as a premier educational institution that practices quality pedagogy, encourages innovation and research while instilling values and providing a vibrant environment for the holistic development of students into valuable global citizens."
                </p>
            </div>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border-t-8 border-sv-maroon relative min-h-[450px] flex flex-col"
          >
             {/* Matching Header Style */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <h2 className="text-3xl font-bold text-sv-maroon uppercase tracking-wide">Our Mission</h2>
                <div className="w-12 h-12 bg-sv-maroon/10 rounded-full flex items-center justify-center text-sv-maroon">
                    <Lightbulb size={24} />
                </div>
            </div>

            {/* Content Pushed Down to Match */}
            <div className="flex-grow flex items-center p-8 mt-12">
                <ul className="space-y-6 w-full">
                    {[
                        { title: "Academics", text: "Stimulate the spirit of scientific enquiry and discovery through innovative teaching practices." },
                        { title: "Infrastructure", text: "Foster a better educational environment with state-of-the-art infrastructure." },
                        { title: "Employability", text: "Impart training in entrepreneurial and life skills for enhancing career readiness." }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start border-l-4 border-gray-100 pl-4 hover:border-sv-maroon transition-colors">
                            <div>
                                <span className="font-bold text-sv-blue block text-lg">{item.title}</span>
                                <span className="text-gray-600 leading-relaxed">{item.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>

        </div>
      </section>
      {/* <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
             <Quote className="text-sv-gold w-12 h-12 mx-auto mb-6 opacity-40" />
             <h2 className="text-2xl md:text-3xl font-serif text-gray-700 leading-relaxed italic">
                "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea... This is the way to success."
             </h2>
        </div>
      </section> */}

      {/* Core Values / Why SVICS */}
      <section className="container mx-auto px-4 pb-12 pt-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sv-blue">Why Choose SVICS?</h2>
          <div className="w-24 h-1 bg-sv-gold mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-sv-blue/5 rounded-2xl flex items-center justify-center text-sv-blue group-hover:bg-sv-blue group-hover:text-white transition-all duration-300 mb-6">
                <val.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionMission;