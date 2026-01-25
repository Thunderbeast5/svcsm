import React from 'react';
import Navbar from './components/Navbar';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />

      {/* Hero Section Preview */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay - Dark SV Blue with transparency */}
        <div className="absolute inset-0 bg-sv-blue/90 z-10"></div>
        
        {/* Background Image (Placeholder) */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-sv-gold/20 border border-sv-gold text-sv-gold text-sm font-semibold mb-6 uppercase tracking-wider">
            Admissions Open for 2026-27
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Shape Your Future at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Swami Vivekananda College
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience world-class education with a focus on holistic development, 
            cutting-edge facilities, and expert mentorship.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-sv-maroon hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
              Start Application <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-sv-blue text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </header>

      {/* Content Spacer */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">More sections (About, Stats, Gallery) go here...</p>
      </section>
    </div>
  );
}

export default App;