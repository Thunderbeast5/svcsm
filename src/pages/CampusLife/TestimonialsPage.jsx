import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  { name: "Rahul Sharma", role: "Alumni '23", text: "The best two years of my academic life.", rating: 5 },
  { name: "Priya Patil", role: "Student (12th)", text: "Teachers are very supportive and labs are great.", rating: 5 },
  { name: "Amit Verma", role: "Parent", text: "Very disciplined environment. Happy with my son's progress.", rating: 5 },
  { name: "Sneha Gupta", role: "Alumni '22", text: "Helped me crack NEET in first attempt!", rating: 4 },
  { name: "Karan Singh", role: "Student (11th)", text: "Sports facilities are top notch.", rating: 5 },
  { name: "Dr. A. Kulkarni", role: "Guest Lecturer", text: "Impressed by the student quality here.", rating: 5 },
];

const TestimonialsPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="bg-sv-blue py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Voices of SVCMS</h1>
        <p className="text-xl text-white/80">Hear from our students, alumni, and parents.</p>
      </section>

      {/* Review Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex text-sv-gold mb-4">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <Quote className="text-sv-maroon/20 mb-2" size={32} />
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Review Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-sv-maroon text-center">
          <h2 className="text-2xl font-bold text-sv-blue mb-2">Share Your Experience</h2>
          <p className="text-gray-500 mb-8">Are you a student or alumni? Let us know your thoughts.</p>
          
          <form className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-sv-maroon" />
              <input type="text" placeholder="Batch / Role" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-sv-maroon" />
            </div>
            <textarea rows="4" placeholder="Write your review here..." className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-sv-maroon"></textarea>
            <button className="w-full bg-sv-maroon text-white font-bold py-3 rounded-lg hover:bg-red-900 transition-colors">
              Submit Review
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default TestimonialsPage;