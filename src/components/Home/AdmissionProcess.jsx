import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, GraduationCap, FileCheck, School, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Online Application",
      desc: "Fill out the digital application form on our portal.",
      icon: FileText,
      position: "top"
    },
    {
      id: 2,
      title: "Form Fees",
      desc: "Pay the non-refundable form fee of ₹100/-.",
      icon: CreditCard,
      position: "bottom"
    },
    {
      id: 3,
      title: "Academic Fee",
      desc: "Pay the academic fees to provisionally book your seat.",
      icon: GraduationCap,
      position: "top"
    },
    {
      id: 4,
      title: "Document Verification",
      desc: "Submit original documents for physical verification at the institute.",
      icon: FileCheck,
      position: "bottom"
    },
    {
      id: 5,
      title: "Admission Confirmation",
      desc: "Receive your final admission confirmation letter.",
      icon: School,
      position: "top"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id="admissions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sv-maroon mb-4">Admission Process</h2>
          <p className="text-lg text-gray-700 font-medium">
            Start your journey with us in 5 simple steps. <br />
            <span className="text-sv-blue">Share Your Details And Apply Now!</span>
          </p>
        </div>

        {/* Desktop Process Flow (Hidden on Mobile) */}
        <div className="hidden lg:block relative h-[400px]">
          {/* Curved Connector Line (SVG) */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path 
              d="M 150 150 C 250 150, 250 300, 350 300 C 450 300, 450 150, 600 150 C 750 150, 750 300, 850 300 C 950 300, 950 150, 1050 150" 
              fill="none" 
              stroke="#CBD5E1" 
              strokeWidth="2" 
              strokeDasharray="8 8"
            />
          </svg>

          <div className="grid grid-cols-5 gap-4 relative z-10 h-full">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col items-center text-center ${step.position === 'bottom' ? 'mt-auto' : 'mb-auto'}`}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 border-4 border-white hover:border-sv-maroon transition-colors duration-300 group">
                  <step.icon size={40} className="text-gray-800 group-hover:text-sv-maroon transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-sv-blue mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Flow (Visible only on Mobile) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full bg-sv-maroon/10 flex items-center justify-center mb-4 text-sv-maroon">
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-sv-blue mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
              {index !== steps.length - 1 && <ArrowRight className="text-gray-300 mt-6 rotate-90" />}
            </div>
          ))}
        </div>

        {/* CTA Button */}
       <div className="text-center mt-16">
          <Link to="/admissions/process">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sv-maroon text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-red-900/20 hover:bg-red-900 transition-colors"
            >
              Apply Now
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;