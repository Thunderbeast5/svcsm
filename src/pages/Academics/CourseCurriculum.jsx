import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Microscope, Calculator, Palette, Briefcase, Code, Landmark, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

// Data for Junior College (11th & 12th)
const juniorStreams = [
  {
    id: 'science',
    title: 'Science',
    icon: Microscope,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    description: "Designed for aspiring Engineers, Doctors, and Researchers. We focus on conceptual clarity in Physics, Chemistry, and Mathematics/Biology.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Information Technology", "English"],
    careers: ["Engineering (JEE)", "Medical (NEET)", "Research (IISER)", "Pharmacy", "Architecture"]
  },
  {
    id: 'commerce',
    title: 'Commerce',
    icon: Calculator,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
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
    description: "For creative minds and civil service aspirants. We provide deep insights into social sciences, languages, and humanities.",
    subjects: ["History", "Political Science", "Geography", "Psychology", "Economics", "English Literature"],
    careers: ["Civil Services (UPSC/MPSC)", "Journalism & Media", "Law", "Teaching", "Public Policy"]
  }
];

// Data for Senior College (UG Degrees) - Extracted from your BBA/BCA/BCom PDFs
const seniorStreams = [
  {
    id: 'bba',
    title: 'BBA',
    subtitle: "Bachelor of Business Admin",
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: "A 4-year degree honing critical skills in leadership, entrepreneurship & strategic thinking. Specializations in Finance, HR, and Marketing.",
    subjects: ["Principles of Management", "Marketing Management", "Financial Management", "Human Resource Mgmt", "Business Law", "Entrepreneurship"],
    careers: ["Corporate Management", "HR Manager", "Marketing Executive", "Entrepreneurship", "MBA Foundation"]
  },
  {
    id: 'bca',
    title: 'BCA',
    subtitle: "Bachelor of Computer Apps",
    icon: Code,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    description: "Creates high-caliber solution architects and innovators. Focus on making students industry-ready for software development and system analysis.",
    subjects: ["C / C++ / Java / Python", "Database Management", "Web Development", "Operating Systems", "Software Engineering", "Computer Networks"],
    careers: ["Software Developer", "System Analyst", "Web Designer", "Database Administrator", "IT Consultant"]
  },
  {
    id: 'bcom',
    title: 'B.Com',
    subtitle: "Bachelor of Commerce",
    icon: Calculator,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description: "An application-oriented syllabus equipping you for business and finance careers. Strong foundation in Accounting, Taxation, and Auditing.",
    subjects: ["Financial Accounting", "Cost Accounting", "Business Economics", "Company Law", "Banking & Finance", "Taxation"],
    careers: ["Accountant", "Tax Consultant", "Banking Officer", "Financial Analyst", "Stock Market"]
  },
  {
    id: 'ba',
    title: 'B.A.',
    subtitle: "Bachelor of Arts",
    icon: Landmark,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    description: "A multidisciplinary course designed for careers in government, public administration, and public policy.",
    subjects: ["Political Science", "History", "Economics", "English / Marathi", "Geography", "Public Administration"],
    careers: ["Civil Services (IAS/IPS)", "Social Work (NGO)", "Journalism", "Public Relations", "Policy Analyst"]
  }
];

const CoursesCurriculum = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('junior'); // 'junior' or 'senior'
  const [activeTab, setActiveTab] = useState(juniorStreams[0].id);

  // Handle URL params to switch view automatically (e.g., from Home page click)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type === 'senior') {
      setActiveSection('senior');
      setActiveTab(seniorStreams[0].id);
    } else {
      setActiveSection('junior');
      setActiveTab(juniorStreams[0].id);
    }
  }, [location]);

  // Determine which data to show
  const currentStreams = activeSection === 'junior' ? juniorStreams : seniorStreams;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-sv-blue py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D97706 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Courses & Curriculum</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive programs tailored for your academic and professional growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        
        {/* Toggle Switch (Junior vs Senior) */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-md inline-flex">
            <button
              onClick={() => { setActiveSection('junior'); setActiveTab(juniorStreams[0].id); }}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeSection === 'junior' ? 'bg-sv-maroon text-white shadow-sm' : 'text-gray-500 hover:text-sv-maroon'}`}
            >
              Junior College (11th-12th)
            </button>
            <button
              onClick={() => { setActiveSection('senior'); setActiveTab(seniorStreams[0].id); }}
              className={`px-8 py-3 rounded-full font-bold transition-all ${activeSection === 'senior' ? 'bg-sv-maroon text-white shadow-sm' : 'text-gray-500 hover:text-sv-maroon'}`}
            >
              Senior College (UG Degrees)
            </button>
          </div>
        </div>

        {/* Tab Navigation (Horizontal Scrollable on mobile) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {currentStreams.map((stream) => (
            <button
              key={stream.id}
              onClick={() => setActiveTab(stream.id)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-sm border ${
                activeTab === stream.id 
                  ? `bg-white ${stream.color} border-${stream.color} shadow-md ring-2 ring-offset-2 ring-${stream.color.split('-')[1]}-100` 
                  : 'bg-white text-gray-500 border-transparent hover:bg-gray-50'
              }`}
            >
              <stream.icon size={20} />
              <div className="text-left">
                <div className="leading-none">{stream.title}</div>
                {stream.subtitle && <div className="text-xs font-normal opacity-70 mt-1">{stream.subtitle}</div>}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Content Card */}
        <AnimatePresence mode="wait">
          {currentStreams.map((stream) => (
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
                    {activeSection === 'junior' ? 'Stream Overview' : 'Degree Program'}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {stream.title} <span className="font-light text-gray-400">Curriculum</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {stream.description}
                  </p>
                  
                  <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                     Key Subjects / Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {stream.subjects.map((sub, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <CheckCircle size={16} className={`${stream.color.replace('text-', 'text-opacity-80 ')} flex-shrink-0`} />
                        <span className="text-sm font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-sv-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-sv-maroon transition-colors flex items-center gap-2">
                    Download Syllabus <ArrowRight size={18} />
                  </button>
                </div>

                {/* Right: Career Box */}
                <div className={`${stream.bgColor} rounded-3xl p-8 border border-opacity-50 border-gray-200 flex flex-col`}>
                  <h3 className={`text-2xl font-bold mb-6 ${stream.color}`}>Future Career Paths</h3>
                  <div className="space-y-3 flex-grow">
                    {stream.careers.map((career, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-all"
                      >
                        <span className="font-medium text-gray-800">{career}</span>
                        <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${stream.color}`} />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-black/5">
                    <p className="text-sm text-gray-600 italic">
                      * {activeSection === 'junior' 
                          ? "We provide dedicated career counseling for 12th-grade students." 
                          : "Includes internship opportunities and industry visits."}
                    </p>
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