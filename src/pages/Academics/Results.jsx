import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Award } from 'lucide-react';

const toppers = [
  { name: "Aarav Patil", percentage: "98.50%", stream: "Science", rank: "1st in District", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" },
  { name: "Ishita Rao", percentage: "96.20%", stream: "Commerce", rank: "College Topper", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" },
  { name: "Rohan Mehta", percentage: "95.00%", stream: "Science", rank: "PCM Subject Topper", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
  { name: "Sneha Wagh", percentage: "94.50%", stream: "Arts", rank: "College Topper", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
];

const Results = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero Stats */}
      <section className="bg-sv-blue text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-sv-gold rounded-full flex items-center justify-center mx-auto mb-6 text-sv-blue shadow-lg shadow-yellow-500/20">
            <Trophy size={40} />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4">Academic Results 2025</h1>
          <p className="text-xl text-gray-300">Continuing the legacy of 100% Pass Results</p>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid md:grid-cols-4 gap-6">
          {toppers.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative group"
            >
              {/* Rank Badge */}
              <div className="absolute top-0 right-0 bg-sv-gold text-sv-blue text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                {student.rank}
              </div>
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={student.img} 
                  alt={student.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{student.stream} Stream</p>
                
                <div className="bg-sv-blue/5 rounded-xl py-2 px-4 inline-block">
                  <span className="text-2xl font-bold text-sv-maroon">{student.percentage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Graph Section (Simple CSS Visuals) */}
      <section className="container mx-auto px-4 py-12 mb-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-sv-blue mb-4 flex items-center gap-3">
              <TrendingUp className="text-green-500" /> 
              Consistent Growth
            </h2>
            <p className="text-gray-600 mb-6">
              Our students consistently outperform the state average. With a dedicated focus on individual attention, we ensure every student achieves their personal best.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <Award className="text-sv-gold" /> 
                <span className="font-bold text-gray-700">150+</span> 
                <span className="text-gray-500">Distinction Holders</span>
              </li>
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                <Star className="text-sv-gold" /> 
                <span className="font-bold text-gray-700">25+</span> 
                <span className="text-gray-500">Centum (100/100) Scorers</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-6">
              {[
                { label: "Overall Pass Percentage", val: "100%", width: "100%", color: "bg-green-500" },
                { label: "Science Distinctions", val: "85%", width: "85%", color: "bg-cyan-500" },
                { label: "Commerce Distinctions", val: "92%", width: "92%", color: "bg-sv-maroon" },
                { label: "Arts Distinctions", val: "78%", width: "78%", color: "bg-purple-500" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                    <span>{stat.label}</span>
                    <span>{stat.val}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.width }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full rounded-full ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Results;