import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle, HelpCircle, ChevronDown, AlertCircle } from 'lucide-react';

const AdmissionProcessPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const documents = [
    "Original Marksheet of 10th (SSC) & 2 Photocopies",
    "School Leaving Certificate (LC) / Transfer Certificate",
    "Caste Certificate (if applicable)",
    "Aadhar Card Photocopy",
    "3 Recent Passport Size Photographs",
    "Migration Certificate (for non-Maharashtra board students)",
    "Gap Certificate (if applicable)"
  ];

  // Removed the first cutoff question as requested
  const faqs = [
    { q: "Can I pay the fees in installments?", a: "Yes, we offer a 3-installment plan. 40% at admission, 30% before Diwali, and 30% before final exams." },
    { q: "Is the registration fee refundable?", a: "The ₹100/- registration fee is non-refundable. However, tuition fees have a refund policy if cancelled within 15 days." }
  ];

  // Updated steps to match your specific flow
  const processSteps = [
    { title: "Online Application", desc: "Visit our website and fill out the digital admission form with your personal and academic details.", step: "01" },
    { title: "Form Fees", desc: "Pay the non-refundable registration/form fee of ₹100/- via online payment mode.", step: "02" },
    { title: "Academic Fee", desc: "Pay the academic fees (full or first installment) to provisionally book your seat.", step: "03" },
    { title: "Document Verification", desc: "Visit the college admin office with original documents for physical verification.", step: "04" },
    { title: "Admission Confirmation", desc: "Once verified, you will receive your official admission confirmation letter.", step: "05" }
  ];

  return (
    <div className="pt-5 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-sv-maroon py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admission Process</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your journey to excellence starts here. Follow these simple steps to secure your seat.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column: Detailed Steps */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-sv-blue mb-8">Step-by-Step Guide</h2>
            {/* Added 'pb-8' to allow the last line to connect properly if needed, though hidden for last item */}
            <div className="space-y-8 relative before:absolute before:left-8 before:top-2 before:bottom-10 before:w-0.5 before:bg-gray-200">
              {processSteps.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-sv-gold flex items-center justify-center font-bold text-xl text-sv-maroon flex-shrink-0 z-10 shadow-sm">
                    {item.step}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-bold text-sv-blue mb-6 flex items-center gap-2">
              <HelpCircle className="text-sv-gold" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    {faq.q}
                    <ChevronDown className={`transform transition-transform ${activeAccordion === idx ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === idx && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: 'auto' }} 
                        exit={{ height: 0 }} 
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-gray-600 text-sm border-t border-gray-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (Docs Only - Prospectus Removed) */}
        <div className="space-y-8">
          
          {/* Document Checklist Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-sv-blue sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="text-sv-blue" /> Required Documents
            </h3>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-yellow-50 p-3 rounded-lg flex gap-2 text-xs text-yellow-800 border border-yellow-200">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>Original L.C. will be retained by the college. Please keep scanned copies for yourself.</span>
            </div>
          </div>

          {/* Prospectus Section Removed Here */}

        </div>

      </section>
    </div>
  );
};

export default AdmissionProcessPage;