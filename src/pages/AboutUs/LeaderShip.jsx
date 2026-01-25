import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Quote } from 'lucide-react';

const leaders = [
  {
    name: "Dr. Rajesh Patil",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "With over 30 years of experience in education, Dr. Patil founded SVCMS to bridge the educational gap in rural Maharashtra. His vision is to empower students with knowledge that transcends textbooks.",
    quote: "Education is the most powerful weapon which you can use to change the world."
  },
  {
    name: "Mrs. Sunita Deshmukh",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "A distinguished academician with a PhD in Physics, Mrs. Deshmukh leads the academic administration with a focus on research, innovation, and student discipline.",
    quote: "We strive to create an environment where excellence is a habit, not an act."
  }
];

const Leadership = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="bg-sv-blue py-20 text-center relative overflow-hidden">
         {/* Decorative Background Blob */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-sv-gold/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">Leadership</h1>
            <p className="text-xl text-gray-300">The visionaries guiding our path to excellence.</p>
         </div>
      </section>

      <section className="container mx-auto px-4 py-24 space-y-24">
        {leaders.map((leader, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Card */}
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className={`absolute inset-0 bg-sv-maroon rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="relative w-full h-[400px] object-cover rounded-2xl shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold text-sv-blue mb-2">{leader.name}</h2>
              <p className="text-sv-gold font-bold uppercase tracking-widest text-sm mb-6">{leader.role}</p>
              
              <div className="mb-8 relative pl-8 border-l-4 border-gray-200">
                <Quote className="absolute top-0 left-2 text-gray-200 -z-10" size={40} />
                <p className="text-xl italic text-gray-600 font-serif">"{leader.quote}"</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {leader.bio}
              </p>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full hover:bg-sv-blue hover:text-white hover:border-sv-blue transition-all group">
                  <Linkedin size={18} /> <span className="text-sm font-bold">Connect</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full hover:bg-sv-maroon hover:text-white hover:border-sv-maroon transition-all group">
                  <Mail size={18} /> <span className="text-sm font-bold">Email</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Leadership;