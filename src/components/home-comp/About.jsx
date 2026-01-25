import React from 'react';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-sv-gold/20 rounded-2xl transform rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
              alt="Founder" 
              className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg border-l-4 border-sv-maroon">
              <p className="font-bold text-sv-blue text-lg">Hon. Founder Name</p>
              <p className="text-sm text-gray-500">Founder & Chairman</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-sv-maroon font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Fostering Innovation & <br/>Traditional Values</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              "At SVCMS, we believe education is not just about filling a bucket, but lighting a fire. Our vision is to create a generation of leaders who are academically brilliant and morally sound."
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-sv-blue/10 rounded-full flex items-center justify-center text-sv-blue">
                  <Quote size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Mission</h4>
                  <p className="text-sm text-gray-600">To provide accessible, high-quality education that empowers rural youth.</p>
                </div>
              </div>
            </div>

            <button className="text-sv-maroon font-bold border-b-2 border-sv-maroon hover:text-red-900 pb-1 transition-colors">
              Read Full Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;