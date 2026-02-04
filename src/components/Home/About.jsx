import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - UPDATED DESIGN */}
         {/* Option 1: The Academic Arch */}
<motion.div 
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
  className="relative h-[520px] flex items-end justify-center"
>
  {/* The Background - Changed to Rounded Rectangle */}
  <div className="absolute bottom-0 w-[90%] h-[95%] bg-sv-blue rounded-3xl border-4 border-sv-gold shadow-2xl overflow-hidden">
     {/* Subtle texture inside */}
     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B8860B_1px,transparent_1px)] [background-size:16px_16px]"></div>
     
     {/* Optional: Add a subtle gradient at the bottom to blend legs/torso if cut abruptly */}
     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sv-blue to-transparent"></div>
  </div>

  {/* The Image - Rising out of the box */}
  <img 
    src="https://res.cloudinary.com/dh4xushgf/image/upload/v1770226723/img_unj9wg.png" 
    alt="Founder" 
    className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
  />

  {/* Name Plate - Floating at the bottom edge */}
  <div className="absolute -bottom-6 z-20 bg-white py-4 px-8 rounded-xl shadow-xl border-t-4 border-sv-maroon text-center min-w-[250px]">
    <p className="font-bold text-sv-blue text-xl">Hon. Kiran R Arote</p>
    <p className="text-xs font-bold text-sv-gold tracking-widest uppercase mt-1">Founder & Chairman</p>
  </div>
</motion.div>

          {/* Text Side (Unchanged) */}
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