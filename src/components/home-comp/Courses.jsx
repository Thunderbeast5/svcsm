import React from 'react';
import { Microscope, Calculator, Palette, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Science",
    desc: "Physics, Chemistry, Math, Biology, and IT.",
    icon: Microscope,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Commerce",
    desc: "Accountancy, Economics, OCM, and SP.",
    icon: Calculator,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Arts & Humanities",
    desc: "History, Geography, Political Science, and Languages.",
    icon: Palette,
    color: "bg-purple-50 text-purple-600"
  }
];

const Courses = () => {
  return (
    <section className="py-24 bg-gray-50" id="academics">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sv-gold font-bold uppercase tracking-widest text-sm">Academics</span>
          <h2 className="text-4xl font-bold text-sv-blue mt-2">Study at SVCMS</h2>
          <p className="text-gray-600 mt-4">Comprehensive curriculum designed to prepare students for competitive exams like JEE, NEET, and CA Foundation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${course.color} group-hover:scale-110 transition-transform`}>
                <course.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{course.desc}</p>
              
              <a href="#" className="inline-flex items-center gap-2 text-sv-maroon font-bold group-hover:gap-3 transition-all">
                View Curriculum <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;