import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail } from 'lucide-react';

const facultyMembers = [
  {
    name: "Dr. Suresh Patil",
    dept: "Science",
    subject: "Physics",
    qual: "M.Sc, Ph.D, B.Ed",
    exp: "15 Years",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Mrs. Priya Sharma",
    dept: "Science",
    subject: "Biology",
    qual: "M.Sc (Botany), SET",
    exp: "10 Years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    name: "Mr. Amit Verma",
    dept: "Commerce",
    subject: "Accountancy",
    qual: "M.Com, CA Inter",
    exp: "8 Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Ms. Neha Gupta",
    dept: "Commerce",
    subject: "Economics",
    qual: "MA (Economics), B.Ed",
    exp: "12 Years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "Mr. Rajan Kulkarni",
    dept: "Arts",
    subject: "History",
    qual: "MA (History), NET/SET",
    exp: "20 Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mrs. Kavita Joshi",
    dept: "Languages",
    subject: "English",
    qual: "MA (English Lit)",
    exp: "6 Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  }
];

const Faculty = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="bg-sv-maroon py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
          <p className="text-xl text-white/80">Meet the mentors shaping the future.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((prof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-sv-maroon to-sv-gold"></div>
              <div className="p-6 flex items-start gap-4">
                <img 
                  src={prof.image} 
                  alt={prof.name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 group-hover:border-sv-gold transition-colors"
                />
                <div>
                  <h3 className="font-bold text-lg text-sv-blue group-hover:text-sv-maroon transition-colors">{prof.name}</h3>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mt-1 font-medium">
                    {prof.dept} Dept.
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{prof.subject}</p>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-1">Qualification</p>
                    <p className="font-medium text-gray-700 flex items-center gap-1">
                      <GraduationCap size={14} className="text-sv-maroon" /> {prof.qual}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-1">Experience</p>
                    <p className="font-medium text-gray-700">{prof.exp}</p>
                  </div>
                </div>
                
                <button className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-sv-blue hover:text-white hover:border-sv-blue transition-all">
                  <Mail size={16} /> Contact Faculty
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;