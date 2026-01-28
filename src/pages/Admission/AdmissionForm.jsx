import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileText, Save, Download, CheckCircle, RefreshCcw } from 'lucide-react';
import JuniorAdmissionPDF from '../../components/PDF/JuniorAdmissionPDF'; 

const JuniorAdmissionForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Watch stream to conditionally show 11th details if needed
  const selectedStandard = watch("standard");

  const onSubmit = (data) => {
    // Generate a random App No for the PDF
    data.appNo = `SV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sv-blue">Junior College Admission 2026-27</h1>
          <p className="text-gray-600">Complete the form below to download your official application PDF.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          
          {/* Header Strip */}
          <div className="bg-sv-maroon px-6 py-4 flex justify-between items-center text-white">
            <span className="font-bold text-lg flex items-center gap-2">
              <FileText /> New Application
            </span>
            <span className="text-sm opacity-90">Step 1 of 2</span>
          </div>

          <div className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* --- 1. Course Selection --- */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 text-sv-blue">Course Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Standard *</label>
                      <select {...register("standard", { required: true })} className="w-full p-2 border rounded bg-gray-50">
                        <option value="11th">11th Standard</option>
                        <option value="12th">12th Standard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Stream *</label>
                      <select {...register("stream", { required: true })} className="w-full p-2 border rounded bg-gray-50">
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* --- 2. Student Personal Info --- */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 text-sv-blue">Student Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input {...register("lastName", { required: true })} placeholder="Last Name (Surname) *" className="p-2 border rounded" />
                    <input {...register("firstName", { required: true })} placeholder="First Name (Own) *" className="p-2 border rounded" />
                    <input {...register("middleName", { required: true })} placeholder="Father's Name *" className="p-2 border rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="text-xs text-gray-500">Full Name in Devnagari (Marathi/Hindi)</label>
                    <input {...register("nameDevnagari")} placeholder="देवनागरी मध्ये नाव" className="w-full p-2 border rounded" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input {...register("motherName", { required: true })} placeholder="Mother's Name *" className="p-2 border rounded" />
                    <div className="flex flex-col">
                       <label className="text-xs text-gray-500">Date of Birth *</label>
                       <input type="date" {...register("dob", { required: true })} className="p-2 border rounded" />
                    </div>
                    <input {...register("birthPlace", { required: true })} placeholder="Place of Birth *" className="p-2 border rounded" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <select {...register("gender", { required: true })} className="p-2 border rounded">
                      <option value="">Gender *</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <select {...register("category", { required: true })} className="p-2 border rounded">
                      <option value="">Category *</option>
                      <option value="Open">OPEN</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="OBC">OBC</option>
                      <option value="NT">NT</option>
                      <option value="SBC">SBC</option>
                    </select>
                    <input {...register("casteName")} placeholder="Specific Caste Name" className="p-2 border rounded" />
                  </div>
                </section>

                {/* --- 3. Contact & Address --- */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 text-sv-blue">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <textarea {...register("permanentAddress", { required: true })} placeholder="Permanent Address *" className="p-2 border rounded h-20"></textarea>
                     <textarea {...register("localAddress")} placeholder="Local/Correspondence Address (if different)" className="p-2 border rounded h-20"></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input {...register("studentMobile", { required: true })} placeholder="Student Mobile Number *" className="p-2 border rounded" />
                    <input {...register("email", { required: true })} placeholder="Email ID *" className="p-2 border rounded" />
                  </div>
                </section>

                {/* --- 4. Parent Info --- */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 text-sv-blue">Parent / Guardian Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input {...register("fatherName", { required: true })} placeholder="Father/Guardian Full Name *" className="p-2 border rounded" />
                    <input {...register("parentOccupation")} placeholder="Occupation" className="p-2 border rounded" />
                    <input {...register("parentMobile", { required: true })} placeholder="Parent Mobile Number *" className="p-2 border rounded" />
                    <input {...register("officeAddress")} placeholder="Office Address (Optional)" className="p-2 border rounded" />
                  </div>
                </section>

                {/* --- 5. Academic History --- */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4 text-sv-blue">Previous Education</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-sm mb-2">10th (SSC) Details *</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input {...register("sscBoard", { required: true })} placeholder="Board Name (e.g. Maharashtra)" className="p-2 border rounded" />
                      <input {...register("sscYear", { required: true })} placeholder="Year of Passing" className="p-2 border rounded" />
                      <input {...register("sscMarks", { required: true })} placeholder="Percentage / Marks" className="p-2 border rounded" />
                    </div>
                    
                    {/* Only show 11th details if applying for 12th */}
                    {selectedStandard === '12th' && (
                      <>
                        <h4 className="font-bold text-sm mb-2 mt-4">11th Details (For 12th Admission)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input {...register("fyjcBoard")} placeholder="College Name" className="p-2 border rounded" />
                          <input {...register("fyjcYear")} placeholder="Year of Passing" className="p-2 border rounded" />
                          <input {...register("fyjcMarks")} placeholder="Percentage / Marks" className="p-2 border rounded" />
                        </div>
                      </>
                    )}
                  </div>
                </section>

                {/* --- 6. Declaration Check --- */}
                <section className="bg-yellow-50 p-4 rounded border border-yellow-200">
                   <div className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1 w-5 h-5" />
                      <p className="text-sm text-gray-700">
                        I hereby declare that I have read the rules and regulations of the college regarding discipline, attendance (75% compulsory), and fees. The information provided above is true to the best of my knowledge.
                      </p>
                   </div>
                </section>

                <div className="flex justify-center pt-4">
                  <button type="submit" className="bg-sv-maroon hover:bg-red-900 text-white text-lg px-10 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all">
                    <Save /> Generate Application PDF
                  </button>
                </div>

              </form>
            ) : (
              // --- RESULT VIEW ---
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Ready!</h2>
                <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                   Your admission form for <strong>{formData.standard} ({formData.stream})</strong> has been generated with all required declarations.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                   <PDFDownloadLink 
                     document={<JuniorAdmissionPDF data={formData} />} 
                     fileName={`SV_Admission_${formData.firstName}_${formData.lastName}.pdf`}
                     className="flex items-center gap-2 bg-sv-blue hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold shadow-xl transition-all"
                   >
                     {({ loading }) => (
                       loading ? 'Generating...' : <><Download size={20} /> Download Official Form</>
                     )}
                   </PDFDownloadLink>

                   <button 
                     onClick={() => setIsSubmitted(false)} 
                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-6 py-4 font-semibold"
                   >
                     <RefreshCcw size={18} /> Fill Another Form
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuniorAdmissionForm;