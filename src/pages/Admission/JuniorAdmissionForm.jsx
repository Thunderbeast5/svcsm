import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileText, Save, Download, CheckCircle, RefreshCcw, Upload } from 'lucide-react';
import JuniorAdmissionPDF from '../../components/PDF/JuniorAdmissionPDF'; 

const JuniorAdmissionForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset, setValue } = useForm();
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Watch standard to conditionally show fields
  const selectedStandard = watch("standard");
  const selectedCourse = watch("course");

  const onSubmit = (data) => {
    // Generate Application Number
    data.appNo = `SV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Add photo if uploaded
    if (photoPreview) {
      data.photoData = photoPreview;
    }
    
    setFormData(data);
    setIsSubmitted(true);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData(null);
    setPhotoFile(null);
    setPhotoPreview(null);
    reset();
  };

  // Helper component for individual digit boxes
  const DigitBoxes = ({ name, count, label }) => {
    return (
      <div>
        <label className="block text-sm font-bold mb-2 text-gray-700">{label} *</label>
        <div className="flex gap-2">
          {[...Array(count)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              {...register(`${name}${i}`, { 
                required: `${label} digit ${i+1} required`,
                pattern: { value: /^[0-9]$/, message: "Only digits" }
              })}
              className="w-10 h-12 text-center border-2 border-gray-300 rounded-lg text-lg font-bold focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              onInput={(e) => {
                if (e.target.value && i < count - 1) {
                  const nextInput = e.target.parentElement.children[i + 1];
                  if (nextInput) nextInput.focus();
                }
              }}
            />
          ))}
        </div>
        {errors[`${name}0`] && <p className="text-red-600 text-xs mt-1">All digits required</p>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Swami Vivekananda Junior Institute
          </h1>
          <p className="text-lg text-gray-700">Arts, Commerce & Science, Pimpalgaon Baswant</p>
          <p className="text-md text-gray-600">Admission Form: 2026-27</p>
          <p className="text-sm text-red-700 font-semibold mt-2">Form Fees: Rs. 100/-</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
          
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-red-800 to-red-900 px-8 py-5 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <FileText size={28} />
              <div>
                <span className="font-bold text-xl">Junior College Admission Form</span>
                <p className="text-sm text-red-100">Academic Year 2026-27</p>
              </div>
            </div>
            <span className="text-sm bg-white/20 px-4 py-2 rounded-full">Official Application</span>
          </div>

          <div className="p-8 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                
                {/* Course Selection - Checkbox Style */}
                <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Course Selection
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Standard Selection */}
                    <div>
                      <label className="block text-sm font-bold mb-3 text-gray-700">Standard *</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="11th"
                            {...register("standard", { required: "Please select a standard" })}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">11th</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="12th"
                            {...register("standard", { required: "Please select a standard" })}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">12th</span>
                        </label>
                      </div>
                      {errors.standard && <p className="text-red-600 text-xs mt-1">{errors.standard.message}</p>}
                    </div>

                    {/* Board Selection */}
                    <div>
                      <label className="block text-sm font-bold mb-3 text-gray-700">Board/Exam *</label>
                      <div className="flex gap-6 flex-wrap">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="State Board"
                            {...register("boardStateBoard")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">State Board</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="CET"
                            {...register("boardCET")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">CET</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="JEE"
                            {...register("boardJEE")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">JEE</span>
                        </label>
                      </div>
                    </div>

                    {/* Stream Selection */}
                    <div>
                      <label className="block text-sm font-bold mb-3 text-gray-700">Stream *</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="Arts"
                            {...register("streamArts")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">Arts</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="Commerce"
                            {...register("streamCommerce")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">Commerce</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            value="Science"
                            {...register("streamScience")}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-gray-800 font-medium">Science</span>
                        </label>
                      </div>
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Upload Photo</label>
                      <div className="flex gap-4 items-center">
                        <div className="relative">
                          <input 
                            type="file" 
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden" 
                            id="photo-upload"
                          />
                          <label 
                            htmlFor="photo-upload" 
                            className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-all"
                          >
                            <Upload size={18} />
                            <span className="text-sm">{photoFile ? photoFile.name : 'Choose Photo'}</span>
                          </label>
                        </div>
                        {photoPreview && (
                          <img src={photoPreview} alt="Preview" className="w-20 h-24 object-cover border-2 border-gray-300 rounded" />
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Personal Information - Section 1 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Surname *</label>
                      <input 
                        type="text" 
                        {...register("surname", { required: "Surname is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg uppercase focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="SURNAME"
                      />
                      {errors.surname && <p className="text-red-600 text-xs mt-1">{errors.surname.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Middle Name *</label>
                      <input 
                        type="text" 
                        {...register("middleName", { required: "Middle name is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg uppercase focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="MIDDLE NAME"
                      />
                      {errors.middleName && <p className="text-red-600 text-xs mt-1">{errors.middleName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Father's Name *</label>
                      <input 
                        type="text" 
                        {...register("fathersName", { required: "Father's name is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg uppercase focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="FATHER'S NAME"
                      />
                      {errors.fathersName && <p className="text-red-600 text-xs mt-1">{errors.fathersName.message}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold mb-2 text-gray-700">Name in Devanagari (नाव देवनागरी लिपीत) *</label>
                    <input 
                      type="text" 
                      {...register("nameDevanagari", { required: "Name in Devanagari is required" })}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="देवनागरी लिपीत नाव"
                    />
                    {errors.nameDevanagari && <p className="text-red-600 text-xs mt-1">{errors.nameDevanagari.message}</p>}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold mb-2 text-gray-700">Mother's Name *</label>
                    <input 
                      type="text" 
                      {...register("motherName", { required: "Mother's name is required" })}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="Mother's Full Name"
                    />
                    {errors.motherName && <p className="text-red-600 text-xs mt-1">{errors.motherName.message}</p>}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold mb-3 text-gray-700">Gender *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Male"
                          {...register("gender", { required: "Please select gender" })}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-gray-800 font-medium">Male</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Female"
                          {...register("gender", { required: "Please select gender" })}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <span className="text-gray-800 font-medium">Female</span>
                      </label>
                    </div>
                    {errors.gender && <p className="text-red-600 text-xs mt-1">{errors.gender.message}</p>}
                  </div>
                </section>

                {/* Father and Guardian Information - Section 2 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Father & Guardian Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Full Name of Father *</label>
                      <input 
                        type="text" 
                        {...register("fullNameFather", { required: "Father's full name is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Father's Full Name"
                      />
                      {errors.fullNameFather && <p className="text-red-600 text-xs mt-1">{errors.fullNameFather.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Full Name of Guardian (For non-localities)</label>
                      <input 
                        type="text" 
                        {...register("guardianName")}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Guardian's Full Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Relationship of Guardian with Candidate</label>
                      <input 
                        type="text" 
                        {...register("guardianRelation")}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="e.g., Uncle, Aunt, Brother"
                      />
                    </div>
                  </div>
                </section>

                {/* Address Information - Section 3 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    Address & Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Permanent Address *</label>
                      <textarea 
                        {...register("permanentAddress", { required: "Permanent address is required" })}
                        rows="3"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Complete Address with Village/City, Taluka, District, State, PIN"
                      />
                      {errors.permanentAddress && <p className="text-red-600 text-xs mt-1">{errors.permanentAddress.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Occupation & Designation</label>
                        <input 
                          type="text" 
                          {...register("occupation")}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="Occupation & Designation"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Office Address</label>
                        <input 
                          type="text" 
                          {...register("officeAddress")}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="Office Address"
                        />
                      </div>
                    </div>

                    {/* Parent/Guardian Mobile with digit boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <DigitBoxes name="parentMobile" count={10} label="Parent/Guardian Mobile No." />
                      <DigitBoxes name="candidateMobile" count={10} label="Candidate Mobile No." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Telephone No. (With STD Code)</label>
                        <input 
                          type="text" 
                          {...register("telephone")}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="STD-Telephone"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">E-Mail ID</label>
                        <input 
                          type="email" 
                          {...register("email")}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Full Address of Correspondence</label>
                      <textarea 
                        {...register("correspondenceAddress")}
                        rows="2"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Correspondence Address (if different from permanent address)"
                      />
                    </div>
                  </div>
                </section>

                {/* Birth Details - Section 5 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                    Birth Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DigitBoxes name="birthDate" count={2} label="Date" />
                    <DigitBoxes name="birthMonth" count={2} label="Month" />
                    <DigitBoxes name="birthYear" count={4} label="Year" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Place of Birth *</label>
                      <input 
                        type="text" 
                        {...register("birthPlace", { required: "Place of birth is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="City/Village"
                      />
                      {errors.birthPlace && <p className="text-red-600 text-xs mt-1">{errors.birthPlace.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">State *</label>
                      <input 
                        type="text" 
                        {...register("birthState", { required: "State is required" })}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="State"
                      />
                      {errors.birthState && <p className="text-red-600 text-xs mt-1">{errors.birthState.message}</p>}
                    </div>
                  </div>
                </section>

                {/* Caste Category - Section 6 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Caste Category
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="SC"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">SC</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="ST"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">ST</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="DT-VJ"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">DT-VJ</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="NT-B"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">NT-B</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="NT-C"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">NT-C</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="NT-D"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">NT-D</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="OBC"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">OBC</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="SBC"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">SBC</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="OPEN"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">OPEN</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        value="General"
                        {...register("caste")}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <span className="text-gray-800 font-medium">General</span>
                    </label>
                  </div>
                </section>

                {/* Previous Year Details - Section 7 */}
                <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                    Previous Year Academic Details
                  </h3>
                  
                  {/* 10th Standard Details - Always show */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Standard X (10th) Details *</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Art/Com/Sci</label>
                        <select 
                          {...register("sscStream")}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        >
                          <option value="">Select</option>
                          <option value="Arts">Arts</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Science">Science</option>
                          <option value="General">General</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Year of Passing *</label>
                        <input 
                          type="text" 
                          {...register("sscYear", { required: "Year is required" })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="YYYY"
                        />
                        {errors.sscYear && <p className="text-red-600 text-xs mt-1">{errors.sscYear.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Marks Obtained *</label>
                        <input 
                          type="text" 
                          {...register("sscMarksObtained", { required: "Marks required" })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="e.g., 450"
                        />
                        {errors.sscMarksObtained && <p className="text-red-600 text-xs mt-1">{errors.sscMarksObtained.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Total Marks *</label>
                        <input 
                          type="text" 
                          {...register("sscTotalMarks", { required: "Total marks required" })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="e.g., 600"
                        />
                        {errors.sscTotalMarks && <p className="text-red-600 text-xs mt-1">{errors.sscTotalMarks.message}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Percentage *</label>
                        <input 
                          type="text" 
                          {...register("sscPercentage", { required: "Percentage required" })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="e.g., 75.00%"
                        />
                        {errors.sscPercentage && <p className="text-red-600 text-xs mt-1">{errors.sscPercentage.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Board *</label>
                        <input 
                          type="text" 
                          {...register("sscBoard", { required: "Board required" })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          placeholder="e.g., Maharashtra State Board"
                        />
                        {errors.sscBoard && <p className="text-red-600 text-xs mt-1">{errors.sscBoard.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* 11th Standard Details - Show only if applying for 12th */}
                  {selectedStandard === "12th" && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Standard XI (11th) Details *</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Art/Com/Sci</label>
                          <select 
                            {...register("hscStream")}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          >
                            <option value="">Select</option>
                            <option value="Arts">Arts</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Science">Science</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Year of Passing *</label>
                          <input 
                            type="text" 
                            {...register("hscYear", { required: selectedStandard === "12th" ? "Year is required" : false })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="YYYY"
                          />
                          {errors.hscYear && <p className="text-red-600 text-xs mt-1">{errors.hscYear.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Marks Obtained *</label>
                          <input 
                            type="text" 
                            {...register("hscMarksObtained", { required: selectedStandard === "12th" ? "Marks required" : false })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="e.g., 450"
                          />
                          {errors.hscMarksObtained && <p className="text-red-600 text-xs mt-1">{errors.hscMarksObtained.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Total Marks *</label>
                          <input 
                            type="text" 
                            {...register("hscTotalMarks", { required: selectedStandard === "12th" ? "Total marks required" : false })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="e.g., 600"
                          />
                          {errors.hscTotalMarks && <p className="text-red-600 text-xs mt-1">{errors.hscTotalMarks.message}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Percentage *</label>
                          <input 
                            type="text" 
                            {...register("hscPercentage", { required: selectedStandard === "12th" ? "Percentage required" : false })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="e.g., 75.00%"
                          />
                          {errors.hscPercentage && <p className="text-red-600 text-xs mt-1">{errors.hscPercentage.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2 text-gray-700">Board *</label>
                          <input 
                            type="text" 
                            {...register("hscBoard", { required: selectedStandard === "12th" ? "Board required" : false })}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="e.g., Maharashtra State Board"
                          />
                          {errors.hscBoard && <p className="text-red-600 text-xs mt-1">{errors.hscBoard.message}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* Documents Required Section */}
                <section className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
                  <h3 className="text-lg font-bold text-yellow-900 mb-4">📄 Documents Required at Time of Admission</h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("docLeavingCert")}
                        className="mt-1 w-5 h-5 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>1.</strong> School/College Leaving Certificate (Duly counter-signed by Principal/College Authorities) - Original + 2 Xerox Copies
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("docMigration")}
                        className="mt-1 w-5 h-5 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>2.</strong> Migration Certificate (If necessary) - Original + 2 Xerox Copies
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("docMarksheet")}
                        className="mt-1 w-5 h-5 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>3.</strong> Previous Year Marksheet (SSC/11th) - Original + 2 Xerox Copies
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("docAadhar")}
                        className="mt-1 w-5 h-5 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">
                        <strong>4.</strong> Aadhar Card - Original + 2 Xerox Copies
                      </span>
                    </label>
                  </div>
                  <div className="mt-5 pt-4 border-t-2 border-yellow-200">
                    <p className="text-xs text-gray-600 italic">
                      I hereby agree that, I have attached copies of only mentioned documents to my application and understand that my application will be approved on the basis of above documents supplied by me at the time of submitting this application.
                    </p>
                  </div>
                </section>

                {/* Declaration Section */}
                <section className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                  <h3 className="text-lg font-bold text-red-900 mb-4 text-center underline">
                    DECLARATION TO BE SIGNED BY THE CANDIDATE & PARENT/GUARDIAN AT THE TIME OF ADMISSION
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 max-h-80 overflow-y-auto pr-2">
                    <p className="font-semibold">I hereby declare and agree that:</p>
                    <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                      <li>I have read the Rules of Admission for the year 2026-27 and I have consulted my father/guardian and after understanding these rules, I have filled in the application form.</li>
                      <li>The information given by me in this application is true to the best of my knowledge.</li>
                      <li>I have not been debarred from appearing at any examination held by any Government or Statutory examination authority in India.</li>
                      <li>I fully understand that I will be offered admission strictly on the basis of my merit and availability of seat.</li>
                      <li>I hereby abide by all the Rules, Acts and Laws enforced by Government/College Principal/College Authorities of the Institute from time to time and I also hereby give an undertaking that as long as I am student of the College, I will do nothing either inside or outside the college/Institute/Society against the existing rules, Acts. I am fully aware that this may result into disciplinary action against me as per the Rules, Act and Laws.</li>
                      <li>The Institute will deal strictly with students who organize, assist or lead in strikes or any way found guilty of serious breach of discipline in or outside the College campus.</li>
                      <li>I fully understand that the Principal/Management of the college will have full right to expel me from College for my infringement of the rules and conduct and discipline as per the understanding given above or involvement in any illegal activities.</li>
                      <li>I know that my ward will not be permitted to appear for his/her college/university examination if he/she fails to satisfy the college authorities on any of the following counts:
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>At least 75% attendance at lectures and practical</li>
                          <li>Attendance and performance at the college examination/tutorials</li>
                          <li>Good and disciplined behaviour in the college premises</li>
                          <li>Obedience of the instruction of teachers, staff and other college authorities</li>
                          <li>Payment of college fees as prescribed and on time</li>
                        </ul>
                      </li>
                      <li>I have noted that it may not be possible for the college authorities to inform me about the progress of my ward from time to time. I shall therefore keep myself in touch with my ward and the teachers concerned about his/her attendance of lectures, practical and tutorials.</li>
                      <li>I am aware that in any case my ward desires to leave the college for any reason, I shall inform the college authorities in writing so as to enable him/her to cancel the admission. (only within 15 days)</li>
                      <li>I hold myself responsible for full payment of the fees at the time of the admission. In case any dues are not cleared within the stipulated time declared/notified by the head of the institution, the college can take the necessary action against me.</li>
                      <li>I am aware that use of mobile phones is prohibited wherever academic activity is going on (Classroom, Laboratories and Library) & shall abide by the same.</li>
                      <li>The student should carry identity card regularly and it should be produced when demanded by the authority of the college or institute.</li>
                      <li><strong>About Fees Submission:</strong> (Uniform/Books/Exam Fees are not Included)
                        <div className="ml-6 mt-2 text-xs">
                          <p><strong>Submission Mode (Non-refundable):</strong> One Time / Two Instalments / Multi Instalments</p>
                          <p className="mt-1"><strong>Note:</strong> Admission will be finalized only after submission of all documents & full payment of fees.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t-2 border-red-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("declarationAccepted", { required: "You must accept the declaration" })}
                        className="mt-1 w-6 h-6 cursor-pointer"
                      />
                      <span className="font-semibold text-gray-800">
                        I have read and understood all the above declarations and undertakings. I accept all terms and conditions stated above. *
                      </span>
                    </label>
                    {errors.declarationAccepted && <p className="text-red-600 text-sm mt-2">{errors.declarationAccepted.message}</p>}
                  </div>

                  <div className="mt-6 pt-4 border-t-2 border-red-200">
                    <p className="font-semibold text-gray-800 mb-3">Parent/Guardian Declaration:</p>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>1. The particulars furnished by my ward in this application form are correct to the best of my knowledge.</p>
                      <p>2. I undertake and abide myself to pay on behalf of my ward such fees, charges etc. by due date which the college may declare from time to time. In the event of failure on my part and/or my ward the Principal of the College may take such action against my ward, as he may deem fit.</p>
                    </div>
                  </div>
                </section>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white text-lg px-12 py-5 rounded-full font-bold shadow-2xl flex items-center gap-3 transition-all transform hover:scale-105"
                  >
                    <Save size={24} /> 
                    Generate Application PDF
                  </button>
                </div>

              </form>
            ) : (
              // Success View
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <CheckCircle size={64} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Application Generated Successfully!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Application No: <span className="font-bold text-blue-900">{formData.appNo}</span>
                </p>
                <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
                  Your admission form for <strong>{formData.standard}</strong> has been generated successfully. Please download the PDF, print it, affix your photograph, and sign at the designated places before submission.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <PDFDownloadLink 
                    document={<JuniorAdmissionPDF data={formData} />} 
                    fileName={`SV_Admission_${formData.surname}_${formData.fathersName}_${formData.appNo}.pdf`}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold shadow-2xl transition-all transform hover:scale-105"
                  >
                    {({ loading }) => (
                      loading ? 'Generating PDF...' : (
                        <>
                          <Download size={24} /> 
                          Download Official Application Form
                        </>
                      )
                    )}
                  </PDFDownloadLink>

                  <button 
                    onClick={resetForm} 
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-8 py-5 font-semibold border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <RefreshCcw size={20} /> 
                    Fill Another Form
                  </button>
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-xl max-w-2xl mx-auto border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">📋 Next Steps:</h4>
                  <ul className="text-left text-sm text-gray-700 space-y-2">
                    <li>✓ Download and print the application form</li>
                    <li>✓ Affix your recent passport-size photograph in the designated box</li>
                    <li>✓ Sign at the designated places (Date and signature to be filled after printing)</li>
                    <li>✓ Parent/Guardian should also sign at the designated places</li>
                    <li>✓ Attach all required documents (originals + 2 photocopies)</li>
                    <li>✓ Submit at the college office with Rs. 100/- form fees</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600 bg-white p-6 rounded-xl shadow">
          <p className="font-semibold text-gray-800 mb-2">Swami Vivekananda Institute of Arts, Commerce, Science & Management</p>
          <p>Near Post Office (SBI Bank), Chatrapati Shivaji Maharaj Nagar, Pimpalgaon Baswant, Niphad, Nashik - 422 209</p>
          <p className="mt-2">
            📞 82086 65658 | 
            ✉️ swamivivekanandainstitute2021@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default JuniorAdmissionForm;