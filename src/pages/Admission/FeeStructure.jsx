import React from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard, Landmark } from 'lucide-react';

const feeData = [
  {
    stream: "Science",
    total: "₹ 35,000",
    color: "bg-cyan-600",
    features: [
      "Tuition Fee",
      "Laboratory Charges (Physics/Chem/Bio)",
      "Library Access",
      "Internal Exam Fee",
      "IT Lab Access"
    ]
  },
  {
    stream: "Commerce",
    total: "₹ 22,000",
    color: "bg-sv-maroon",
    recommended: true,
    features: [
      "Tuition Fee",
      "Computer Lab Charges",
      "Library Access",
      "Internal Exam Fee",
      "Guest Lectures"
    ]
  },
  {
    stream: "Arts",
    total: "₹ 18,000",
    color: "bg-purple-600",
    features: [
      "Tuition Fee",
      "Library Access",
      "Internal Exam Fee",
      "Cultural Activities",
      "Sports Fund"
    ]
  }
];

const FeeStructure = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-sv-blue py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fee Structure</h1>
          <p className="text-xl text-white/80">Transparent & Affordable Education</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {feeData.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col ${plan.recommended ? 'transform md:-translate-y-4 md:border-sv-maroon md:border-2' : ''}`}
            >
              {plan.recommended && (
                <div className="bg-sv-maroon text-white text-center text-xs font-bold py-1 uppercase tracking-widest">Most Popular</div>
              )}
              
              <div className={`p-8 text-center ${plan.recommended ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-gray-600 uppercase tracking-wide mb-4">{plan.stream}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.total}</div>
                <p className="text-gray-400 text-sm">per academic year</p>
              </div>

              <div className="p-8 bg-gray-50 flex-1 border-t border-gray-100">
                <ul className="space-y-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                      <div className={`mt-0.5 w-5 h-5 rounded-full ${plan.color} flex items-center justify-center text-white flex-shrink-0`}>
                        <Check size={12} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 bg-gray-50">
                <button className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${plan.color}`}>
                  Select {plan.stream}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bank Details */}
        {/* <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 p-6 text-white flex items-center gap-4">
            <Landmark size={32} className="text-sv-gold" />
            <div>
              <h3 className="text-xl font-bold">Bank Details for Online Transfer</h3>
              <p className="text-white/60 text-sm">Please mention student name in transaction remarks.</p>
            </div>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Account Name</span>
                <span className="font-bold text-gray-900">SVCMS College Trust</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Bank Name</span>
                <span className="font-bold text-gray-900">State Bank of India</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Account Number</span>
                <span className="font-bold text-gray-900">1234 5678 9012</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">IFSC Code</span>
                <span className="font-bold text-gray-900">SBIN0001234</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <CreditCard className="text-sv-blue" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Installment Facility</h4>
              <p className="text-sm text-gray-600">
                We allow payment in 3 installments (40% - 30% - 30%). Late fees of ₹500 applicable if missed.
              </p>
            </div>
          </div>
        </div> */}

      </section>
    </div>
  );
};

export default FeeStructure;