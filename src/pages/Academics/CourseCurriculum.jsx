import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  Microscope, Calculator, Palette, Briefcase, Code, Landmark, 
  BookOpen, Users, GraduationCap, Star, ArrowRight, Sparkles, Download 
} from 'lucide-react';

// Data for Junior College (11th & 12th)
const juniorStreams = [
  {
    id: 'science',
    title: 'Science',
    subtitle: "MHT-CET / IIT / MEDICAL",
    icon: Microscope,
    theme: 'blue', 
    description: "A direct pathway to your favored career. We stimulate the spirit of scientific enquiry and discovery, supporting successful transition to further studies like NEET & JEE.", 
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Geography", "IT"],
    careers: ["Engineering (IIT-JEE)", "Medical (NEET)", "Research", "Architecture", "Pharmacy"],
    intake: "120 Seats",
    eligibility: "SSC (Min 60%)"
  },
  {
    id: 'commerce',
    title: 'Commerce',
    subtitle: "CA / CS / CMA / CFP",
    icon: Calculator,
    theme: 'orange',
    description: "The foundational step for professional finance careers. Our application-oriented syllabus equips you with qualifying abilities for CA, CS, and business management.",
    subjects: ["Accountancy", "Economics", "Secretarial Practice", "Org. of Commerce", "English", "Mathematics"],
    careers: ["Chartered Accountant", "Company Secretary", "Banking & Finance", "Entrepreneurship", "CMA"],
    intake: "120 Seats",
    eligibility: "SSC (Min 50%)"
  },
  {
    id: 'arts',
    title: 'Arts',
    subtitle: "Public Services (UPSC/MPSC)",
    icon: Palette,
    theme: 'rose',
    description: "A multidisciplinary course providing deep insights into humanities and social sciences. Designed specifically for students aiming for Civil Services (UPSC/MPSC).",
    subjects: ["History", "Political Science", "Geography", "Economics", "English", "Marathi"],
    careers: ["Civil Services (IAS/IPS)", "Public Admin", "Journalism", "Law", "Social Work"],
    intake: "120 Seats",
    eligibility: "SSC (Min 40%)"
  }
];

// Data for Senior College (UG Degrees)
const seniorStreams = [
  {
    id: 'bba',
    title: 'BBA',
    subtitle: "Bachelor of Business Administration",
    icon: Briefcase,
    theme: 'indigo',
    description: "Hones critical skills in leadership, entrepreneurship & strategic thinking. Includes immersive industry visits, impactful internships & live projects.",
    subjects: ["Financial Mgmt", "Human Resource Mgmt", "Marketing Mgmt", "Business Law", "Entrepreneurship"],
    careers: ["Corporate Manager", "HR Specialist", "Marketing Executive", "Entrepreneur", "Business Analyst"],
    duration: "4 Years",
    intake: "50 Seats",
    eligibility: "12th (Min 50%)"
  },
  {
    id: 'bca',
    title: 'BCA',
    subtitle: "Bachelor of Computer Application",
    icon: Code,
    theme: 'violet',
    description: "Creates high-caliber solution architects. The main objective is to make students industry-ready for becoming system analysts, software engineers, and programmers.",
    subjects: ["Java / Python / C++", "Web Development", "Database Mgmt", "Networking", "System Analysis"],
    careers: ["Software Developer", "System Analyst", "Web Designer", "Database Admin", "IT Consultant"],
    duration: "4 Years",
    intake: "Contact Institute",
    eligibility: "12th Science/Comm"
  },
  {
    id: 'bcom',
    title: 'B.Com',
    subtitle: "Bachelor of Commerce",
    icon: Calculator,
    theme: 'emerald',
    description: "An extensive application-oriented syllabus providing a strong foundation in core business disciplines like accounting, taxation, financial management and auditing.",
    subjects: ["Cost Accounting", "Banking & Finance", "Marketing", "Business Economics", "Taxation"],
    careers: ["Accountant", "Tax Consultant", "Bank Officer", "Financial Analyst", "Auditor"],
    duration: "3 Years",
    intake: "50 Seats",
    eligibility: "12th (Min 50%)"
  },
  {
    id: 'ba',
    title: 'B.A.',
    subtitle: "Bachelor of Arts",
    icon: Landmark,
    theme: 'amber',
    description: "Designed to prepare students for careers in government and public policy. Responds to the need for professionals equipped to tackle today's complex societal challenges.",
    subjects: ["Public Admin", "Political Science", "Economics", "History", "Geography"],
    careers: ["Civil Services", "Public Policy", "Social Research", "NGO Management", "Teaching"],
    duration: "3 Years",
    intake: "Contact Institute",
    eligibility: "12th Arts/Any"
  }
];

const CoursesCurriculum = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('junior');
  const [activeTab, setActiveTab] = useState(juniorStreams[0].id);

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

  const currentStreams = activeSection === 'junior' ? juniorStreams : seniorStreams;
  const activeData = currentStreams.find(s => s.id === activeTab);

  // Helper for dynamic colors
  const getThemeColor = (theme, type = 'text') => {
    const colors = {
      blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', gradient: 'from-blue-500 to-cyan-500' },
      orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', gradient: 'from-orange-500 to-red-500' },
      rose: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', gradient: 'from-rose-500 to-pink-500' },
      indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200', gradient: 'from-indigo-500 to-purple-500' },
      violet: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', gradient: 'from-violet-500 to-fuchsia-500' },
      emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-500' },
      amber: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', gradient: 'from-amber-500 to-orange-500' },
    };
    return colors[theme]?.[type] || '';
  };

  // --- DOWNLOAD HANDLER ---
  const handleDownload = () => {
    // 1. Determine which file to download based on the section
    // Assuming you placed "COM-SCI.pdf" and "BBA.pdf" in a "brochures" folder inside "public"
    const fileUrl = activeSection === 'junior' 
      ? '/brochures/COM-SCI.pdf' 
      : '/brochures/BBA.pdf';
    
    const fileName = activeSection === 'junior' 
      ? 'SVICS_Junior_College_Brochure.pdf' 
      : 'SVICS_Degree_College_Brochure.pdf';

    // 2. Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-5 font-sans selection:bg-sv-gold selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-sv-blue text-white py-14 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sv-gold/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-3"
          >
             <span className="py-1 px-3 border border-sv-gold/50 rounded-full text-sv-gold text-xs font-bold uppercase tracking-widest bg-sv-gold/10 backdrop-blur-sm">
                Academic Excellence
             </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Curriculum & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sv-gold to-orange-300">Courses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Meticulously designed programs that bridge the gap between academic theory and professional success.
          </motion.p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="container mx-auto px-4 py-16  -mt-13 relative z-20">
        
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-2xl shadow-sv-blue/10 inline-flex items-center gap-2 border border-white/50 backdrop-blur-xl">
            {['junior', 'senior'].map((level) => (
              <button
                key={level}
                onClick={() => { setActiveSection(level); setActiveTab(level === 'junior' ? juniorStreams[0].id : seniorStreams[0].id); }}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === level 
                    ? 'bg-sv-blue text-white shadow-lg transform scale-105' 
                    : 'text-gray-500 hover:text-sv-blue hover:bg-gray-50'
                }`}
              >
                {level === 'junior' ? 'Junior Institute' : 'Senior Institute'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Navigation */}
          <div className="lg:col-span-3 space-y-3">
             {currentStreams.map((stream) => (
               <motion.button
                 key={stream.id}
                 onClick={() => setActiveTab(stream.id)}
                 whileHover={{ x: 5 }}
                 className={`w-full text-left p-5 rounded-xl transition-all duration-300 border flex items-center gap-4 group ${
                   activeTab === stream.id
                     ? `bg-white border-${getThemeColor(stream.theme, 'border').split('-')[1]}-200 shadow-xl shadow-gray-200/50 ring-1 ring-${getThemeColor(stream.theme, 'border').split('-')[1]}-500/20`
                     : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md'
                 }`}
               >
                 <div className={`p-3 rounded-lg ${activeTab === stream.id ? `bg-gradient-to-br ${getThemeColor(stream.theme, 'gradient')} text-white` : 'bg-gray-100 text-gray-400 group-hover:text-sv-blue'}`}>
                    <stream.icon size={20} />
                 </div>
                 <div>
                    <div className={`font-bold text-lg ${activeTab === stream.id ? 'text-gray-900' : 'text-gray-600'}`}>
                        {stream.title}
                    </div>
                    {activeTab === stream.id && (
                        <div className={`text-xs font-semibold ${getThemeColor(stream.theme, 'text')} mt-1`}>
                            View Details
                        </div>
                    )}
                 </div>
               </motion.button>
             ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {activeData && (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                    {/* Top Row: Info & Stats */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Description Card */}
                        <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${getThemeColor(activeData.theme, 'gradient')}`}></div>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${getThemeColor(activeData.theme, 'text')}`}>
                                        Program Overview
                                    </div>
                                    <h2 className="text-4xl font-bold text-sv-blue mb-2">{activeData.title}</h2>
                                    <p className="text-gray-400 font-medium">{activeData.subtitle}</p>
                                </div>
                                <div className={`p-4 rounded-2xl bg-gray-50 text-gray-300 group-hover:${getThemeColor(activeData.theme, 'text')} group-hover:bg-white group-hover:shadow-lg transition-all duration-500`}>
                                    <activeData.icon size={48} strokeWidth={1.5} />
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {activeData.description}
                            </p>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center space-y-6">
                            <div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                                    <Users size={14} /> Intake
                                </div>
                                <div className="text-3xl font-bold text-sv-blue">{activeData.intake}</div>
                            </div>
                            <div className="w-full h-px bg-gray-100"></div>
                            <div>
                                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                                    <GraduationCap size={14} /> Eligibility
                                </div>
                                <div className="text-2xl font-bold text-sv-blue">{activeData.eligibility}</div>
                            </div>
                            {activeData.duration && (
                                <>
                                <div className="w-full h-px bg-gray-100"></div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                                        <BookOpen size={14} /> Duration
                                    </div>
                                    <div className="text-xl font-bold text-gray-700">{activeData.duration}</div>
                                </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Bottom Row: Subjects & Careers */}
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* Subjects Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Sparkles className="text-sv-gold" size={20} />
                                Core Subjects
                             </h3>
                             <div className="flex flex-wrap gap-3">
                                {activeData.subjects.map((sub, i) => (
                                    <span 
                                        key={i} 
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors hover:shadow-md cursor-default ${getThemeColor(activeData.theme, 'bg')} ${getThemeColor(activeData.theme, 'text')} ${getThemeColor(activeData.theme, 'border')}`}
                                    >
                                        {sub}
                                    </span>
                                ))}
                             </div>
                        </div>

                        {/* Career Path Card with DOWNLOAD BUTTON */}
                        <div className="bg-sv-blue text-white rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                             
                             <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                <Star className="text-sv-gold" size={20} />
                                Career Opportunities
                             </h3>
                             
                             <ul className="space-y-4 relative z-10 flex-grow">
                                {activeData.careers.map((career, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200 group">
                                        <div className={`w-2 h-2 rounded-full ${activeData.theme === 'orange' ? 'bg-orange-400' : 'bg-sv-gold'} group-hover:scale-150 transition-transform`}></div>
                                        <span className="group-hover:text-white transition-colors">{career}</span>
                                    </li>
                                ))}
                             </ul>

                             {/* Functional Download Button */}
                             <button 
                                onClick={handleDownload}
                                className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group cursor-pointer relative z-20"
                             >
                                <Download size={18} />
                                <span>Download Brochure</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                             </button>
                        </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesCurriculum;