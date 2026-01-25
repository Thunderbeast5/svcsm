import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Shield } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Upholding the highest standards of honesty and ethical behavior in all our endeavors.",
      icon: Shield
    },
    {
      title: "Innovation",
      desc: "Fostering a culture of creativity and critical thinking to solve real-world problems.",
      icon: Lightbulb
    },
    {
      title: "Empathy",
      desc: "Building a supportive community that respects and values every individual.",
      icon: Heart
    },
    {
      title: "Excellence",
      desc: "Striving for perfection in academic, cultural, and sporting activities.",
      icon: Target
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <section className="bg-sv-maroon text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Vision & Mission
          </motion.h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Guided by the philosophy of Swami Vivekananda, we aim to awaken the potential within every student.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-10 grid md:grid-cols-2 gap-8 mb-24">
        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-sv-gold"
        >
          <div className="w-16 h-16 bg-sv-blue/10 rounded-full flex items-center justify-center text-sv-blue mb-6">
            <Target size={32} />
          </div>
          <h2 className="text-3xl font-bold text-sv-blue mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            "To be a global center of learning that nurtures intellectual curiosity, fosters innovation, and builds character, creating responsible citizens who contribute to the nation's growth."
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-sv-blue"
        >
          <div className="w-16 h-16 bg-sv-maroon/10 rounded-full flex items-center justify-center text-sv-maroon mb-6">
            <Lightbulb size={32} />
          </div>
          <h2 className="text-3xl font-bold text-sv-maroon mb-4">Our Mission</h2>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-sv-gold flex-shrink-0" />
              Provide accessible, high-quality education to rural and urban youth.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-sv-gold flex-shrink-0" />
              Bridge the gap between industry requirements and academic curriculum.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-sv-gold flex-shrink-0" />
              Inculcate moral values and social responsibility.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Core Values */}
      <section className="container mx-auto px-4 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sv-blue">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-sv-maroon group-hover:text-white transition-colors mb-6">
                <val.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionMission;