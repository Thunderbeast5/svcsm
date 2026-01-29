import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileText, Save, Download, CheckCircle, RefreshCcw, Upload } from 'lucide-react';
import JuniorAdmissionPDF from '../../components/PDF/JuniorAdmissionPDF'; 

const JuniorAdmissionForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Watch standard to conditionally show 11th details
  const selectedStandard = watch("standard");
  const selectedBoard = watch("board");

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
                
                {/* Course Selection */}
                <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Course Selection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Standard *</label>
                      <select 
                        {...register("standard", { required: "Standard is required" })} 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="11th">11th Standard</option>
                        <option value="12th">12th Standard</option>
                      </select>
                      {errors.standard && <p className="text-red-600 text-xs mt-1">{errors.standard.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Board *</label>
                      <select 
                        {...register("board", { required: "Board is required" })} 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="State Board">State Board</option>
                        <option value="CET">CET</option>
                        <option value="JEE">JEE</option>
                      </select>
                      {errors.board && <p className="text-red-600 text-xs mt-1">{errors.board.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Stream *</label>
                      <select 
                        {...register("stream", { required: "Stream is required" })} 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="Arts">Arts</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Science">Science</option>
                      </select>
                      {errors.stream && <p className="text-red-600 text-xs mt-1">{errors.stream.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Upload Photo</label>
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
                        <img src={photoPreview} alt="Preview" className="mt-2 w-20 h-24 object-cover border-2 rounded" />
                      )}
                    </div>
                  </div>
                </section>

                {/* Section 1: Student Personal Information */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Full Name of Candidate
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Surname (Last Name) *</label>
                        <input 
                          {...register("surname", { required: "Surname is required" })} 
                          placeholder="Enter Surname" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all uppercase"
                        />
                        {errors.surname && <p className="text-red-600 text-xs mt-1">{errors.surname.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Middle Name *</label>
                        <input 
                          {...register("middleName", { required: "Middle name is required" })} 
                          placeholder="Enter Middle Name" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all uppercase"
                        />
                        {errors.middleName && <p className="text-red-600 text-xs mt-1">{errors.middleName.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Father's/Husband's Name *</label>
                        <input 
                          {...register("fathersName", { required: "Father's name is required" })} 
                          placeholder="Enter Father's Name" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all uppercase"
                        />
                        {errors.fathersName && <p className="text-red-600 text-xs mt-1">{errors.fathersName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name in Devnagari Script</label>
                      <input 
                        {...register("nameDevnagari")} 
                        placeholder="देवनागरी मध्ये नाव" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Mother's Name *</label>
                        <input 
                          {...register("motherName", { required: "Mother's name is required" })} 
                          placeholder="Enter Mother's Full Name" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        {errors.motherName && <p className="text-red-600 text-xs mt-1">{errors.motherName.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Gender *</label>
                        <div className="flex gap-6 items-center h-12">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              value="Male" 
                              {...register("gender", { required: "Gender is required" })}
                              className="w-5 h-5"
                            />
                            <span>Male</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              value="Female" 
                              {...register("gender", { required: "Gender is required" })}
                              className="w-5 h-5"
                            />
                            <span>Female</span>
                          </label>
                        </div>
                        {errors.gender && <p className="text-red-600 text-xs mt-1">{errors.gender.message}</p>}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Father/Guardian Information */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Father / Guardian Information
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">A) Full Name of Father *</label>
                      <input 
                        {...register("fullFatherName", { required: "Father's full name is required" })} 
                        placeholder="Enter Father's Complete Name" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.fullFatherName && <p className="text-red-600 text-xs mt-1">{errors.fullFatherName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">B) Full Name of Guardian (For non-localities)</label>
                      <input 
                        {...register("guardianName")} 
                        placeholder="If Applicable - Enter Guardian's Name" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">C) Relationship of Guardian with Candidate</label>
                      <input 
                        {...register("guardianRelation")} 
                        placeholder="E.g., Uncle, Aunt, Brother, etc." 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>
                  </div>
                </section>

                {/* Section 3: Permanent Address */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Permanent Address
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Complete Permanent Address *</label>
                      <textarea 
                        {...register("permanentAddress", { required: "Permanent address is required" })} 
                        placeholder="Enter Complete Address with Village/City, Taluka, District, Pin Code" 
                        rows="3"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.permanentAddress && <p className="text-red-600 text-xs mt-1">{errors.permanentAddress.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                      <input 
                        {...register("permanentPhone")} 
                        placeholder="Landline or Mobile (Optional)" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>
                  </div>
                </section>

                {/* Section 4: Parents/Guardian Information Details */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    Parents / Guardian's Information
                  </h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">A) Occupation & Designation *</label>
                      <input 
                        {...register("parentOccupation", { required: "Occupation is required" })} 
                        placeholder="E.g., Business, Service, Farmer, etc." 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.parentOccupation && <p className="text-red-600 text-xs mt-1">{errors.parentOccupation.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">B) Office Address</label>
                      <textarea 
                        {...register("officeAddress")} 
                        placeholder="Complete Office/Work Address" 
                        rows="2"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">C) Parents/Guardian's Mobile No. *</label>
                        <input 
                          {...register("parentMobile", { 
                            required: "Parent's mobile is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter valid 10-digit mobile number"
                            }
                          })} 
                          placeholder="10-digit Mobile Number" 
                          maxLength="10"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        {errors.parentMobile && <p className="text-red-600 text-xs mt-1">{errors.parentMobile.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">D) Candidate Mobile No. *</label>
                        <input 
                          {...register("studentMobile", { 
                            required: "Student's mobile is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter valid 10-digit mobile number"
                            }
                          })} 
                          placeholder="10-digit Mobile Number" 
                          maxLength="10"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        {errors.studentMobile && <p className="text-red-600 text-xs mt-1">{errors.studentMobile.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">E) Telephone No. (With STD Code)</label>
                        <input 
                          {...register("telephoneNo")} 
                          placeholder="E.g., 0253-1234567" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">F) E-Mail ID *</label>
                        <input 
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Enter valid email address"
                            }
                          })} 
                          placeholder="example@email.com" 
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Correspondence Address */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                    Full Address of Correspondence
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Correspondence Address *</label>
                    <textarea 
                      {...register("correspondenceAddress", { required: "Correspondence address is required" })} 
                      placeholder="If different from permanent address, enter here. Otherwise, write 'Same as above'" 
                      rows="3"
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                    {errors.correspondenceAddress && <p className="text-red-600 text-xs mt-1">{errors.correspondenceAddress.message}</p>}
                  </div>
                </section>

                {/* Section 6: Date and Place of Birth */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Date of Birth
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Date *</label>
                      <input 
                        type="number"
                        min="1"
                        max="31"
                        {...register("dobDate", { 
                          required: "Date is required",
                          min: { value: 1, message: "Invalid date" },
                          max: { value: 31, message: "Invalid date" }
                        })} 
                        placeholder="DD" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.dobDate && <p className="text-red-600 text-xs mt-1">{errors.dobDate.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Month *</label>
                      <select 
                        {...register("dobMonth", { required: "Month is required" })} 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      {errors.dobMonth && <p className="text-red-600 text-xs mt-1">{errors.dobMonth.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Year *</label>
                      <input 
                        type="number"
                        min="1990"
                        max="2015"
                        {...register("dobYear", { 
                          required: "Year is required",
                          min: { value: 1990, message: "Invalid year" },
                          max: { value: 2015, message: "Invalid year" }
                        })} 
                        placeholder="YYYY" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.dobYear && <p className="text-red-600 text-xs mt-1">{errors.dobYear.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">State *</label>
                      <input 
                        {...register("dobState", { required: "State is required" })} 
                        placeholder="E.g., Maharashtra" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.dobState && <p className="text-red-600 text-xs mt-1">{errors.dobState.message}</p>}
                    </div>
                  </div>
                </section>

                {/* Section 7: Place of Birth */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                    Place of Birth
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Birth Place *</label>
                      <input 
                        {...register("birthPlace", { required: "Birth place is required" })} 
                        placeholder="Village/City Name" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.birthPlace && <p className="text-red-600 text-xs mt-1">{errors.birthPlace.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">State *</label>
                      <input 
                        {...register("birthState", { required: "Birth state is required" })} 
                        placeholder="State Name" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      {errors.birthState && <p className="text-red-600 text-xs mt-1">{errors.birthState.message}</p>}
                    </div>
                  </div>
                </section>

                {/* Section 8: Caste Category */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                    Cast Category
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Select Category *</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['SC', 'ST', 'DT-VJ', 'NT-B', 'NT-C', 'NT-D', 'OBC', 'SBC', 'OPEN', 'General'].map((cat) => (
                          <label key={cat} className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-all">
                            <input 
                              type="radio" 
                              value={cat} 
                              {...register("category", { required: "Category is required" })}
                              className="w-5 h-5"
                            />
                            <span className="font-semibold">{cat}</span>
                          </label>
                        ))}
                      </div>
                      {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category.message}</p>}
                    </div>
                  </div>
                </section>

                {/* Section 9: Previous Year Details */}
                <section>
                  <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2 border-b-2 border-gray-200 pb-3">
                    <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                    Previous Year Details
                  </h3>
                  
                  <div className="space-y-6">
                    {/* 10th Standard Details */}
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                      <h4 className="font-bold text-lg mb-4 text-blue-900">Standard X (10th) Details *</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Art/Com/Sci</label>
                          <select 
                            {...register("ssc_stream", { required: "Stream is required" })} 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500"
                          >
                            <option value="">Select</option>
                            <option value="Science">Science</option>
                            <option value="General">General</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Year of Passing *</label>
                          <input 
                            type="number"
                            {...register("sscYear", { required: "Year is required" })} 
                            placeholder="YYYY" 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Marks Obtained *</label>
                          <input 
                            {...register("sscMarksObtained", { required: "Marks obtained required" })} 
                            placeholder="E.g., 450" 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Total Marks *</label>
                          <input 
                            {...register("sscTotalMarks", { required: "Total marks required" })} 
                            placeholder="E.g., 600" 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Percentage *</label>
                          <input 
                            {...register("sscPercentage", { required: "Percentage required" })} 
                            placeholder="E.g., 75.00%" 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Board *</label>
                          <input 
                            {...register("sscBoard", { required: "Board name required" })} 
                            placeholder="E.g., Maharashtra State Board" 
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 11th Standard Details - Show only if applying for 12th */}
                    {selectedStandard === '12th' && (
                      <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                        <h4 className="font-bold text-lg mb-4 text-green-900">Standard XI (11th) Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">Art/Com/Sci</label>
                            <select 
                              {...register("hsc_stream")} 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:border-green-500"
                            >
                              <option value="">Select</option>
                              <option value="Arts">Arts</option>
                              <option value="Commerce">Commerce</option>
                              <option value="Science">Science</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Year of Passing</label>
                            <input 
                              type="number"
                              {...register("hscYear")} 
                              placeholder="YYYY" 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Marks Obtained</label>
                            <input 
                              {...register("hscMarksObtained")} 
                              placeholder="E.g., 450" 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Total Marks</label>
                            <input 
                              {...register("hscTotalMarks")} 
                              placeholder="E.g., 600" 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">Percentage</label>
                            <input 
                              {...register("hscPercentage")} 
                              placeholder="E.g., 75.00%" 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">Board</label>
                            <input 
                              {...register("hscBoard")} 
                              placeholder="E.g., Maharashtra State Board" 
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Documents Required Section */}
                <section className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
                  <h3 className="text-lg font-bold text-yellow-900 mb-4">📄 Documents Required at Time of Admission</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="font-bold">1.</span> 
                      <span>School/College Leaving Certificate (Duly counter-signed by Principal/College Authorities)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold">2.</span> 
                      <span>Migration Certificate (If necessary)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold">3.</span> 
                      <span>Previous Year Marksheet (SSC/11th)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-bold">4.</span> 
                      <span>Aadhar Card (Original + 2 Xerox Copies)</span>
                    </p>
                  </div>
                </section>

                {/* Declaration Section */}
                <section className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                  <h3 className="text-lg font-bold text-red-900 mb-4">✓ Declaration & Undertaking</h3>
                  <div className="space-y-3 text-sm text-gray-700 max-h-60 overflow-y-auto pr-2">
                    <p>I hereby declare and agree that:</p>
                    <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                      <li>I have attached copies of only mentioned documents to my application.</li>
                      <li>I have read the Rules of Admission for the year 2026-27 and consulted my parent/guardian.</li>
                      <li>The information given by me in this application is true to the best of my knowledge.</li>
                      <li>I have not been debarred from appearing at any examination held by any Government or Statutory examination authority in India.</li>
                      <li>I fully understand that I will be offered admission strictly on the basis of my merit and availability of seat.</li>
                      <li>I hereby abide by all the Rules, Acts and Laws enforced by Government/College Principal/College Authorities.</li>
                      <li>I understand that the Institute will deal strictly with students who organize, assist or lead in strikes or any serious breach of discipline.</li>
                      <li>I know that my ward will not be permitted to appear for exams if he/she fails to satisfy: (a) At least 75% attendance, (b) Good and disciplined behaviour, (c) Payment of college fees on time.</li>
                      <li>I hold myself responsible for full payment of the fees at the time of admission.</li>
                      <li>I am aware that use of mobile phones is prohibited in Classrooms, Laboratories and Library.</li>
                      <li>The student should carry identity card regularly and produce it when demanded by the authority.</li>
                      <li>Admission will be finalized only after submission of all documents & full payment of fees.</li>
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
                        I have read and understood all the above declarations and undertakings. I accept all terms and conditions. *
                      </span>
                    </label>
                    {errors.declarationAccepted && <p className="text-red-600 text-sm mt-2">{errors.declarationAccepted.message}</p>}
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
                  Your admission form for <strong>{formData.standard} - {formData.stream} ({formData.board})</strong> has been generated with all declarations. Please download the PDF and submit it along with required documents at the institute.
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
                    <li>✓ Affix your recent passport-size photograph</li>
                    <li>✓ Sign at the designated places (Student & Parent/Guardian)</li>
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