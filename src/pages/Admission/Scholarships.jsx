import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO';

const Scholarships = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Scholarships" 
        description="Scholarships and financial aid available at SVICSM. Supporting deserving talent."
        keywords="scholarships, financial aid, merit scholarship, government scholarship, SVICSM"
        url="/admissions/scholarships"
      />
      <section className="bg-gradient-to-r from-sv-maroon to-red-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships & Financial Aid</h1>
          <p className="text-xl text-white/80">Ensuring that talent never lacks opportunity.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg">
            SVCMS is committed to supporting deserving students. We facilitate various State Government scholarships as well as offer our own merit-based waivers.
          </p>
        </div>

        <div className="grid gap-8">
          
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">Government Scholarships</h3>
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">Govt. Funded</span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">
                Available for SC/ST/OBC/VJNT/SBC categories as per Maharashtra State Government rules. Students must have a valid Caste Certificate and Income Certificate.
              </p>
              <a href="#" className="text-sv-maroon font-bold text-sm flex items-center gap-1 hover:underline">
                Visit MahaDBT Portal <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
              <Award size={32} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">Swami Vivekananda Merit Scholarship</h3>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">College Exclusive</span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">
                Awarded to the top 3 rankers of the 10th (SSC) Board exams who take admission at SVCMS.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• 1st Rank: <strong>100% Tuition Fee Waiver</strong></li>
                <li>• 2nd Rank: <strong>50% Tuition Fee Waiver</strong></li>
                <li>• 3rd Rank: <strong>25% Tuition Fee Waiver</strong></li>
              </ul>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 items-start"
          >
            <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">Sports & Cultural Quota</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Talent Based</span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">
                Special financial concessions for students who have represented District/State/National levels in Sports or Cultural activities.
              </p>
              <p className="text-sm text-gray-500 italic">
                *Subject to verification of certificates by the Sports Director.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Scholarships;