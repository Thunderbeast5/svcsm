import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Calculator, Palette, CheckCircle, BookOpen, ArrowRight } from 'lucide-react';

const streams = [
  {
    id: 'science',
    title: 'Science',
    icon: Microscope,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    description: "Designed for aspiring Engineers, Doctors, and Researchers. We focus on conceptual clarity in Physics, Chemistry, and Mathematics/Biology.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Information Technology", "English"],
    careers: ["Engineering (JEE)", "Medical (NEET)", "Research (IISER)", "Architecture", "Pharmacy"]
  },
  {
    id: 'commerce',
    title: 'Commerce',
    icon: Calculator,
    color: 'text-sv-maroon',
    bgColor: 'bg-red-50',
    description: "The foundation for future CA, CS, and Business Leaders. Our curriculum integrates board syllabus with professional exam preparation.",
    subjects: ["Accountancy", "Economics", "Org. of Commerce", "Secretarial Practice", "Mathematics", "English"],
    careers: ["Chartered Accountant (CA)", "Company Secretary (CS)", "Banking & Finance", "BBA/MBA", "Entrepreneurship"]
  },
  {
    id: 'arts',
    title: 'Arts',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    description: "For the creative minds and civil service aspirants. We provide deep insights into social sciences, languages, and humanities.",
    subjects: ["History", "Political Science", "Geography", "Psychology", "Economics", "English Literature"],
    careers: ["Civil Services (UPSC/MPSC)", "Journalism & Media", "Law", "Teaching", "Psychology"]
  }
];

const CoursesCurriculum = () => {
  const [activeTab, setActiveTab] = useState('science');

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-sv-blue py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D97706 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Courses & Curriculum</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive Higher Secondary (11th & 12th) programs tailored for competitive success.
          </p>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {streams.map((stream) => (
            <button
              key={stream.id}
              onClick={() => setActiveTab(stream.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm ${
                activeTab === stream.id 
                  ? 'bg-sv-maroon text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <stream.icon size={20} />
              {stream.title}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          {streams.map((stream) => (
            stream.id === activeTab && (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
              >
                {/* Left: Info */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold mb-6 ${stream.bgColor} ${stream.color}`}>
                    <BookOpen size={18} />
                    {stream.title} Stream
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {stream.description}
                  </p>
                  
                  <h3 className="font-bold text-sv-blue text-xl mb-4">Core Subjects</h3>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {stream.subjects.map((sub, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {sub}
                      </div>
                    ))}
                  </div>

                  <button className="bg-sv-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-sv-maroon transition-colors flex items-center gap-2">
                    Download Syllabus PDF <ArrowRight size={18} />
                  </button>
                </div>

                {/* Right: Career Box */}
                <div className={`${stream.bgColor} rounded-2xl p-8 border border-opacity-50 border-gray-200`}>
                  <h3 className={`text-2xl font-bold mb-6 ${stream.color}`}>Future Career Paths</h3>
                  <ul className="space-y-4">
                    {stream.careers.map((career, i) => (
                      <li key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                        <span className="font-medium text-gray-800">{career}</span>
                        <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${stream.color}`} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 bg-white/50 p-4 rounded-xl text-sm text-gray-600 italic">
                    * We provide dedicated career counseling sessions for 12th-grade students to help them choose the right path.
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default CoursesCurriculum;