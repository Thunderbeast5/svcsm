import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react'; // Added ArrowRight for the link
import { Link } from 'react-router-dom'; // 1. Import Link

const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-sv-gold/20 rounded-2xl transform rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
              alt="Founder" 
              className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg border-l-4 border-sv-maroon"
            >
              <p className="font-bold text-sv-blue text-lg">Hon. Founder Name</p>
              <p className="text-sm text-gray-500">Founder & Chairman</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-sv-maroon font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Fostering Innovation & <br/>Traditional Values</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              "At SVCMS, we believe education is not just about filling a bucket, but lighting a fire. Our vision is to create a generation of leaders who are academically brilliant and morally sound."
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8"
            >
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-sv-blue/10 rounded-full flex items-center justify-center text-sv-blue">
                  <Quote size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Mission</h4>
                  <p className="text-sm text-gray-600">To provide accessible, high-quality education that empowers rural youth.</p>
                </div>
              </div>
            </motion.div>

            {/* 2. REPLACED BUTTON WITH LINK */}
            <Link 
              to="/about/vision" 
              className="inline-flex items-center gap-2 text-sv-maroon font-bold border-b-2 border-sv-maroon hover:text-red-900 hover:border-red-900 pb-1 transition-all group"
            >
              Read Full Message 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;