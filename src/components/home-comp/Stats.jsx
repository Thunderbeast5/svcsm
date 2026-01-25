import React from 'react';
import { Users, Award, BookOpen, Building2 } from 'lucide-react';

const stats = [
  { label: 'Years of Excellence', value: '25+', icon: Building2 },
  { label: 'Students Enrolled', value: '5000+', icon: Users },
  { label: 'Expert Faculty', value: '120+', icon: UserCheck }, // Ensure UserCheck is imported or swap icon
  { label: 'Merit Rankers', value: '150+', icon: Award },
];
// Note: If UserCheck isn't defined, replace with Users for now.
import { UserCheck } from 'lucide-react'; 

const Stats = () => {
  return (
    <section className="py-20 bg-sv-blue text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D97706 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-sv-gold mb-4 group-hover:bg-sv-gold group-hover:text-sv-blue transition-colors">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;