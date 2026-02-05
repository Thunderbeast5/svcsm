import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, GraduationCap, Loader } from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const testimonialsCol = useMemo(() => collection(db, 'testimonials'), []);

  const staticTestimonials = [
    {
      id: 'static-1',
      name: "Aditya Deshmukh",
      role: "Alumni (2023 Batch)",
      currentStatus: "Software Engineer at Infosys",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
      quote: "The mentorship I received at SVCMS was life-changing. The faculty didn't just teach us coding; they taught us how to think like engineers. The placement support was exceptional.",
      rating: 5,
      showOnHome: true
    },
    {
      id: 'static-2',
      name: "Mrs. Anjali Patil",
      role: "Parent of HSC Student",
      currentStatus: "Mother of Riya (Science Stream)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
      quote: "I was worried about my daughter's safety and discipline, but SVCMS has proved to be the best choice. The campus environment is very secure, and the teachers are personally invested in every child's growth.",
      rating: 5,
      showOnHome: true
    },
    {
      id: 'static-3',
      name: "Rahul Mehta",
      role: "Commerce Student",
      currentStatus: "CA Intermediate Qualifier",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
      quote: "The specialized coaching for CA Foundation integrated with the college curriculum helped me clear my exams in the first attempt. The library resources are top-notch!",
      rating: 5,
      showOnHome: true
    }
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
        try {
            // Fetch only those marked as showOnHome
            const q = query(
                testimonialsCol, 
                where("showOnHome", "==", true),
            );
            
            const snap = await getDocs(q);
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));

             // Sort manually
            data.sort((a, b) => {
                const tA = a.createdAt?.toMillis?.() || 0;
                const tB = b.createdAt?.toMillis?.() || 0;
                return tB - tA;
            });
            
            if (data.length > 0) {
                setTestimonials(data);
            } else {
                setTestimonials(staticTestimonials);
            }
        } catch (e) {
            console.error("Failed to fetch home testimonials", e);
            setTestimonials(staticTestimonials);
        } finally {
            setIsLoading(false);
        }
    };

    fetchTestimonials();
  }, [testimonialsCol]);

  // Auto-slide logic
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (isLoading) return null; // Or a skeleton loader
  if (testimonials.length === 0) return null; // Hide section if no approved home testimonials

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decoration (Subtle Grey/Blue) */}
      <div className="absolute top-10 left-10 opacity-[0.03]">
        <Quote size={200} className="text-sv-blue" />
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sv-blue/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sv-gold font-bold uppercase tracking-widest text-sm">Success Stories</span>
          <h2 className="text-4xl font-bold text-sv-blue mt-2">What Our Family Says</h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 border-t-4 border-t-sv-maroon"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    
                    {/* Image Section */}
                    <div className="flex-shrink-0 text-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-100 p-1 mb-4 mx-auto shadow-sm">
                        <img 
                            src={current.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(current.name)}&background=random`} 
                            alt={current.name} 
                            className="w-full h-full object-cover rounded-full"
                        />
                        </div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1 bg-gray-50 text-sv-blue px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                        <GraduationCap size={12} /> {current.role}
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="text-center md:text-left flex-1">
                        <div className="flex justify-center md:justify-start gap-1 text-sv-gold mb-4">
                        {[...Array(current.rating || 5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6 font-serif">
                        "{current.quote}"
                        </p>
                        
                        <div>
                        <h4 className="text-xl font-bold text-sv-blue">
                            {current.name}
                        </h4>
                        <p className="text-sv-maroon font-semibold text-sm">
                            {current.currentStatus}
                        </p>
                        </div>
                    </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls - Darker buttons for visibility on white */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
                <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-sv-maroon hover:text-white text-gray-600 flex items-center justify-center transition-all shadow-sm group"
                >
                <ChevronLeft className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-sv-maroon hover:text-white text-gray-600 flex items-center justify-center transition-all shadow-sm group"
                >
                <ChevronRight className="group-hover:scale-110 transition-transform" />
                </button>
            </div>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
             <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-sv-maroon' : 'bg-gray-300'
                    }`}
                />
                ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;