import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileText, Save, Download, CheckCircle } from 'lucide-react';
import JuniorPDF from '../../components/PDF/JuniorPDF'; // Import the PDF component created above

const AdmissionForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-sv-blue">Online Admission Form</h1>
          <p className="mt-2 text-gray-600">Fill your details below to generate your official admission application.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-sv-maroon px-8 py-4 flex items-center justify-between">
            <span className="text-white font-bold flex items-center gap-2">
              <FileText size={20} /> Academic Year 2026-27
            </span>
            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">Junior College</span>
          </div>

          <div className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Section 1: Course Selection */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Course Selection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Standard</label>
                      <select {...register("standard", { required: true })} className="w-full p-3 border rounded-lg bg-gray-50">
                        <option value="11th">11th Standard</option>
                        <option value="12th">12th Standard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stream</label>
                      <select {...register("stream", { required: true })} className="w-full p-3 border rounded-lg bg-gray-50">
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Personal Details */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input {...register("lastName", { required: true })} placeholder="Last Name" className="p-3 border rounded-lg" />
                    <input {...register("firstName", { required: true })} placeholder="First Name" className="p-3 border rounded-lg" />
                    <input {...register("middleName")} placeholder="Middle Name" className="p-3 border rounded-lg" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                     <input {...register("motherName", { required: true })} placeholder="Mother's Name" className="p-3 border rounded-lg" />
                     <input type="date" {...register("dob", { required: true })} className="p-3 border rounded-lg" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <select {...register("gender")} className="p-3 border rounded-lg">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <select {...register("category")} className="p-3 border rounded-lg">
                      <option value="">Select Category</option>
                      <option value="Open">OPEN</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="NT">NT</option>
                    </select>
                  </div>
                </div>

                {/* Section 3: Contact & Previous School */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Contact & Academic Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input {...register("mobile", { required: true })} placeholder="Mobile Number" className="p-3 border rounded-lg" />
                    <input {...register("email", { required: true })} placeholder="Email Address" className="p-3 border rounded-lg" />
                  </div>
                  <textarea {...register("address", { required: true })} placeholder="Full Permanent Address" className="w-full p-3 border rounded-lg mt-4 h-24"></textarea>
                  
                  <h4 className="font-bold text-gray-600 mt-6 mb-2">10th (SSC) Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input {...register("sscBoard")} placeholder="Board Name" className="p-3 border rounded-lg" />
                    <input {...register("sscYear")} placeholder="Passing Year" className="p-3 border rounded-lg" />
                    <input {...register("sscPercentage")} placeholder="Percentage" className="p-3 border rounded-lg" />
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button type="submit" className="bg-sv-blue hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-all">
                    <Save size={18} /> Generate Admission Form
                  </button>
                </div>

              </form>
            ) : (
              // SUCCESS STATE: DOWNLOAD BUTTON
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Generated Successfully!</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Your details have been processed. Click the button below to download your official PDF application. Print this and submit it to the college office.
                </p>
                
                <PDFDownloadLink 
                  document={<JuniorPDF data={formData} />} 
                  fileName={`Admission_Form_${formData.firstName}_${formData.lastName}.pdf`}
                  className="inline-flex items-center gap-2 bg-sv-maroon hover:bg-red-900 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all"
                >
                  {({ loading }) => (
                    loading ? 'Generating PDF...' : <><Download size={20} /> Download PDF Now</>
                  )}
                </PDFDownloadLink>

                <div className="mt-6">
                  <button onClick={() => setIsSubmitted(false)} className="text-gray-500 underline hover:text-gray-800">
                    Edit Details
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

export default AdmissionForm;