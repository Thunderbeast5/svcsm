import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Building2, Users, GraduationCap, Award } from 'lucide-react';

const statsData = [
  { 
    id: 1, 
    label: "Years of Excellence", 
    value: 20, 
    suffix: "+", 
    icon: Building2,
    desc: "Established Legacy"
  },
  { 
    id: 2, 
    label: "Students Enrolled", 
    value: 5000, 
    suffix: "+", 
    icon: Users,
    desc: "Trust of Parents"
  },
  { 
    id: 3, 
    label: "Expert Faculty", 
    value: 50, 
    suffix: "+", 
    icon: GraduationCap,
    desc: "PhD & Masters Holders"
  },
  { 
    id: 4, 
    label: "State Toppers", 
    value: 150, 
    suffix: "+", 
    icon: Award,
    desc: "Consistent Results"
  },
];

// Helper Component for the Number Animation
const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  // Update text content directly for performance
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString(); // Adds commas (e.g. 5,000)
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const Stats = () => {
  return (
    // REMOVED: "border-b border-gray-100" to fix the thin line issue
    <section className="py-20 bg-white relative"> 
      
      {/* Optional: Add a subtle gradient top separator if you want a soft transition instead of a hard line */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, idx) => (
            <div key={stat.id} className="relative group">
              {/* Divider Line (Mobile only) */}
              <div className="md:hidden absolute right-[-1rem] top-10 bottom-10 w-[1px] bg-gray-100 last:hidden"></div>
              
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="mb-4 relative">
                  <div className="w-16 h-16 rounded-2xl bg-sv-blue/5 text-sv-blue flex items-center justify-center group-hover:bg-sv-maroon group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-sm">
                    <stat.icon size={30} />
                  </div>
                  {/* Small decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-sv-gold rounded-full border-2 border-white"></div>
                </div>
                
                {/* Number Counter */}
                <div className="text-4xl md:text-5xl font-bold text-sv-blue mb-2 flex items-baseline tracking-tight">
                  <Counter value={stat.value} />
                  <span className="text-sv-maroon text-3xl ml-1">{stat.suffix}</span>
                </div>
                
                {/* Labels */}
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;