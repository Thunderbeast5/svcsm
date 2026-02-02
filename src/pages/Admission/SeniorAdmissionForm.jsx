import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileText, Save, Download, CheckCircle, RefreshCcw, Upload } from 'lucide-react';
import SeniorAdmissionPDF from '../../components/PDF/SeniorAdmissionPDF'; 

const SeniorAdmissionForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset, setValue } = useForm();
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const selectedCourse = watch("course");

  const feeStructure = {
    'FYBBA': {
      name: 'FY BBA',
      admission: 2500,
      tuition: 40000,
      coActivity: 10000,
      exam: 2500,
      total: 55000,
      oneTime: 52500,
      inst1: 35000,
      inst2: 20000
    },
    'SYBBA': {
      name: 'SY BBA',
      admission: 2500,
      tuition: 40000,
      coActivity: 10000,
      exam: 2500,
      total: 55000,
      oneTime: 52500,
      inst1: 35000,
      inst2: 20000
    },
    'TYBBA': {
      name: 'TY BBA',
      admission: 2500,
      tuition: 40000,
      coActivity: 10000,
      exam: 2500,
      total: 55000,
      oneTime: 52500,
      inst1: 35000,
      inst2: 20000
    },
    'FYBComCA': {
      name: 'FY B.Com (CA)',
      admission: 1000,
      tuition: 12000,
      coActivity: 2500,
      exam: 2500,
      total: 18000,
      oneTime: 17000,
      inst1: 10000,
      inst2: 8000
    },
    'SYBComCA': {
      name: 'SY B.Com (CA)',
      admission: 1000,
      tuition: 12000,
      coActivity: 2500,
      exam: 2500,
      total: 18000,
      oneTime: 17000,
      inst1: 10000,
      inst2: 8000
    },
    'TYBComCA': {
      name: 'TY B.Com (CA)',
      admission: 1000,
      tuition: 12000,
      coActivity: 2500,
      exam: 2500,
      total: 18000,
      oneTime: 17000,
      inst1: 10000,
      inst2: 8000
    },
    'FYBComBM': {
      name: 'FY B.Com BM',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    },
    'SYBComBM': {
      name: 'SY B.Com BM',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    },
    'TYBComBM': {
      name: 'TY B.Com BM',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    },
    'FYBA': {
      name: 'FY BA',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    },
    'SYBA': {
      name: 'SY BA',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    },
    'TYBA': {
      name: 'TY BA',
      admission: 1000,
      tuition: 7000,
      coActivity: 3000,
      exam: 1500,
      total: 12500,
      oneTime: 11000,
      inst1: 7500,
      inst2: 5000
    }
  };

  const getSelectedCourseFees = () => {
    if (selectedCourse) {
      return feeStructure[selectedCourse];
    }
    return null;
  };

  const currentCourseFees = getSelectedCourseFees();

  const onSubmit = (data) => {
    data.appNo = `SVIM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
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

  const quickFillForm = () => {
    setValue("firstName", "AMIT");
    setValue("middleName", "KUMAR");
    setValue("lastName", "SHARMA");
    setValue("motherName", "PRIYA SHARMA");
    setValue("nameDevanagari", "अमित कुमार शर्मा");
    
    for (let i = 0; i < 12; i++) {
      const aadhar = "123456789012";
      setValue(`aadhar${i}`, aadhar[i]);
    }
    
    setValue("buildingName", "SHIVAJI NIVAS");
    setValue("streetName", "STATION ROAD");
    setValue("village", "PIMPALGAON (B)");
    setValue("district", "NASHIK");
    setValue("state", "MAHARASHTRA");
    setValue("pinCode", "422209");
    
    setValue("dobDay", "15");
    setValue("dobMonth", "08");
    setValue("dobYear", "2005");
    
    setValue("category", "Open");
    setValue("casteName", "N/A");
    setValue("gender", "Male");
    setValue("maritalStatus", "Unmarried");
    setValue("bloodGroup", "O+");
    
    setValue("email", "amit.sharma@example.com");
    
    for (let i = 0; i < 10; i++) {
      const mobile = "9876543210";
      setValue(`candidateMobile${i}`, mobile[i]);
      const parentMobile = "8765432109";
      setValue(`parentMobile${i}`, parentMobile[i]);
    }
    
    setValue("candidateWhatsapp", true);
    setValue("parentWhatsapp", true);
    
    setValue("lastExamMonth", "April");
    setValue("lastExamYear", "2024");
    setValue("lastSchoolCollege", "ABC College, Nashik");
    setValue("lastCourseName", "12th Commerce");
    setValue("lastPercentage", "75.50");
    setValue("lastResult", "Pass");
    setValue("applyScholarship", true);
    setValue("reasonLeaving", "Completed Course");
    
    setValue("course", "FYBComCA");
    
    setValue("bankAccountNumber", "1234567890123456");
    setValue("bankIFSC", "SBIN0001234");
    setValue("bankName", "STATE BANK OF INDIA");
    setValue("bankBranch", "PIMPALGAON");
    
    setValue("parentName", "RAJESH SHARMA");
    setValue("relationWithCandidate", "FATHER");
    setValue("parentAddress", "SHIVAJI NIVAS, STATION ROAD, PIMPALGAON (B), NASHIK - 422209");
    setValue("parentOccupation", "BUSINESS");
    setValue("parentIncome", "500000");
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-12 py-6 rounded-2xl shadow-2xl" style={{ borderTop: '6px solid #800020' }}>
            <h1 className="text-4xl font-extrabold mb-2" style={{ color: '#002147' }}>
              Swami Vivekananda Institute Of Management
            </h1>
            <p className="text-lg font-medium" style={{ color: '#B8860B' }}>
              Senior College Admission Form 2026-2027
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Near Post Office, Shivaji Nagar, Pimpalgaon (B), Tal-Niphad, Dist. Nashik - 422 209
            </p>
            <p className="text-sm text-gray-600">
              📞 8208665658 | ✉️ swamivivekanandainstitute2021@gmail.com
            </p>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            
            {/* Quick Fill Button */}
            {!isSubmitted && (
              <div className="mb-6 text-right">
                <button 
                  type="button"
                  onClick={quickFillForm}
                  className="text-sm px-6 py-2 rounded-lg font-semibold shadow-md transition-all"
                  style={{ backgroundColor: '#B8860B', color: 'white' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#8B6914'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#B8860B'}
                >
                  Quick Fill (Demo Data)
                </button>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Course Selection Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#f0f4f8', borderColor: '#002147' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#002147' }}>
                    Course Selection
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="FYBComCA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">FY B.Com (CA)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="SYBComCA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">SY B.Com (CA)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="TYBComCA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">TY B.Com (CA)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="FYBComBM"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">FY B.Com BM</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="SYBComBM"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">SY B.Com BM</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="TYBComBM"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">TY B.Com BM</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="FYBBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">FY BBA</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="SYBBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">SY BBA</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="TYBBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">TY BBA</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="FYBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">FY BA</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="SYBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">SY BA</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-all">
                      <input 
                        type="radio" 
                        value="TYBA"
                        {...register("course", { required: "Please select a course" })}
                        className="w-5 h-5 cursor-pointer"
                        style={{ accentColor: '#800020' }}
                      />
                      <span className="font-medium">TY BA</span>
                    </label>
                  </div>
                  {errors.course && <p className="text-red-600 text-sm mt-2">{errors.course.message}</p>}
                </section>

                {/* Candidate Details Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#fffef7', borderColor: '#B8860B' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#800020' }}>
                    1. Candidate Details (Fill in BLOCK CAPITAL LETTERS)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">FIRST NAME *</label>
                      <input 
                        type="text"
                        {...register("firstName", { required: "First name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="FIRST NAME"
                      />
                      {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">MIDDLE NAME</label>
                      <input 
                        type="text"
                        {...register("middleName")}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="MIDDLE NAME"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">LAST NAME *</label>
                      <input 
                        type="text"
                        {...register("lastName", { required: "Last name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="LAST NAME"
                      />
                      {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">MOTHER NAME *</label>
                      <input 
                        type="text"
                        {...register("motherName", { required: "Mother name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="MOTHER NAME"
                      />
                      {errors.motherName && <p className="text-red-600 text-sm mt-1">{errors.motherName.message}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold mb-2">Full name in Devanagari *</label>
                    <input 
                      type="text"
                      {...register("nameDevanagari", { required: "Name in Devanagari is required" })}
                      className="w-full px-4 py-3 border-2 rounded-lg"
                      style={{ borderColor: '#B8860B' }}
                      placeholder="देवनागरी में पूरा नाव"
                    />
                    {errors.nameDevanagari && <p className="text-red-600 text-sm mt-1">{errors.nameDevanagari.message}</p>}
                  </div>

                  {/* Aadhar Number */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold mb-2">Aadhar Number (12 digits) *</label>
                    <div className="flex gap-2">
                      {[...Array(12)].map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength="1"
                          {...register(`aadhar${i}`, { 
                            required: "Required",
                            pattern: { value: /^[0-9]$/, message: "Only digits" }
                          })}
                          className="w-12 h-12 text-center text-xl font-bold border-2 rounded-lg"
                          style={{ borderColor: '#B8860B' }}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            if (e.target.value && i < 11) {
                              const next = e.target.form.elements[`aadhar${i + 1}`];
                              if (next) next.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold mb-2">Upload Photo (Passport Size)</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photoUpload"
                      />
                      <label 
                        htmlFor="photoUpload"
                        className="cursor-pointer px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
                        style={{ backgroundColor: '#B8860B', color: 'white' }}
                      >
                        <Upload size={20} />
                        Choose Photo
                      </label>
                      {photoPreview && (
                        <div className="w-24 h-32 border-2 rounded-lg overflow-hidden" style={{ borderColor: '#800020' }}>
                          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* Permanent Address Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#f0f4f8', borderColor: '#002147' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#002147' }}>
                    3. Permanent Address (As per Aadhar Card)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Building Name</label>
                      <input 
                        type="text"
                        {...register("buildingName")}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="BUILDING NAME"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Street Name / Nagar *</label>
                      <input 
                        type="text"
                        {...register("streetName", { required: "Street name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="STREET NAME / NAGAR"
                      />
                      {errors.streetName && <p className="text-red-600 text-sm mt-1">{errors.streetName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Village / Tahsil / Taluka *</label>
                      <input 
                        type="text"
                        {...register("village", { required: "Village is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="VILLAGE / TAHSIL"
                      />
                      {errors.village && <p className="text-red-600 text-sm mt-1">{errors.village.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">District *</label>
                      <input 
                        type="text"
                        {...register("district", { required: "District is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="DISTRICT"
                        defaultValue="NASHIK"
                      />
                      {errors.district && <p className="text-red-600 text-sm mt-1">{errors.district.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">State *</label>
                      <input 
                        type="text"
                        {...register("state", { required: "State is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="STATE"
                        defaultValue="MAHARASHTRA"
                      />
                      {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">PIN Code *</label>
                      <input 
                        type="text"
                        {...register("pinCode", { 
                          required: "PIN code is required",
                          pattern: { value: /^[0-9]{6}$/, message: "Must be 6 digits" }
                        })}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        placeholder="422XXX"
                        maxLength="6"
                      />
                      {errors.pinCode && <p className="text-red-600 text-sm mt-1">{errors.pinCode.message}</p>}
                    </div>
                  </div>
                </section>

                {/* Other Personnel Details Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#fffef7', borderColor: '#B8860B' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#800020' }}>
                    4. Other Personnel Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date of Birth */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Date of Birth (DD-MM-YYYY) *</label>
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          {...register("dobDay", { required: true, pattern: /^[0-9]{2}$/ })}
                          className="w-20 px-3 py-3 border-2 rounded-lg text-center"
                          style={{ borderColor: '#B8860B' }}
                          placeholder="DD"
                          maxLength="2"
                        />
                        <span className="text-2xl">-</span>
                        <input 
                          type="text"
                          {...register("dobMonth", { required: true, pattern: /^[0-9]{2}$/ })}
                          className="w-20 px-3 py-3 border-2 rounded-lg text-center"
                          style={{ borderColor: '#B8860B' }}
                          placeholder="MM"
                          maxLength="2"
                        />
                        <span className="text-2xl">-</span>
                        <input 
                          type="text"
                          {...register("dobYear", { required: true, pattern: /^[0-9]{4}$/ })}
                          className="w-28 px-3 py-3 border-2 rounded-lg text-center"
                          style={{ borderColor: '#B8860B' }}
                          placeholder="YYYY"
                          maxLength="4"
                        />
                      </div>
                    </div>
                    
                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Category *</label>
                      <select 
                        {...register("category", { required: "Category is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#B8860B' }}
                      >
                        <option value="">Select Category</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="NT-A">NT-A</option>
                        <option value="NT-B">NT-B</option>
                        <option value="NT-C">NT-C</option>
                        <option value="NT-D">NT-D</option>
                        <option value="OBC">OBC</option>
                        <option value="SBC">SBC</option>
                        <option value="Open">Open</option>
                      </select>
                      {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Caste Name (As per Caste Certificate)</label>
                      <input 
                        type="text"
                        {...register("casteName")}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="Caste Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Gender *</label>
                      <div className="flex gap-6 items-center pt-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Male"
                            {...register("gender", { required: "Gender is required" })}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Male</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Female"
                            {...register("gender", { required: "Gender is required" })}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Female</span>
                        </label>
                      </div>
                      {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Marital Status *</label>
                      <div className="flex gap-6 items-center pt-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Married"
                            {...register("maritalStatus", { required: "Marital status is required" })}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Married</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Unmarried"
                            {...register("maritalStatus", { required: "Marital status is required" })}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Unmarried</span>
                        </label>
                      </div>
                      {errors.maritalStatus && <p className="text-red-600 text-sm mt-1">{errors.maritalStatus.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Blood Group</label>
                      <select 
                        {...register("bloodGroup")}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#B8860B' }}
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold mb-2">Email (mandatory) *</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" }
                      })}
                      className="w-full px-4 py-3 border-2 rounded-lg"
                      style={{ borderColor: '#B8860B' }}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Mobile Numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Mobile No. (Candidate) *</label>
                      <div className="flex gap-2 mb-2">
                        {[...Array(10)].map((_, i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength="1"
                            {...register(`candidateMobile${i}`, { 
                              required: "Required",
                              pattern: { value: /^[0-9]$/, message: "Only digits" }
                            })}
                            className="w-10 h-12 text-center text-lg font-bold border-2 rounded-lg"
                            style={{ borderColor: '#B8860B' }}
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(/[^0-9]/g, '');
                              if (e.target.value && i < 9) {
                                const next = e.target.form.elements[`candidateMobile${i + 1}`];
                                if (next) next.focus();
                              }
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            {...register("candidateWhatsapp")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span className="text-sm">WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            {...register("candidatePhonePay")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span className="text-sm">Phone Pay</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Mobile No. (Parent) *</label>
                      <div className="flex gap-2 mb-2">
                        {[...Array(10)].map((_, i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength="1"
                            {...register(`parentMobile${i}`, { 
                              required: "Required",
                              pattern: { value: /^[0-9]$/, message: "Only digits" }
                            })}
                            className="w-10 h-12 text-center text-lg font-bold border-2 rounded-lg"
                            style={{ borderColor: '#B8860B' }}
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(/[^0-9]/g, '');
                              if (e.target.value && i < 9) {
                                const next = e.target.form.elements[`parentMobile${i + 1}`];
                                if (next) next.focus();
                              }
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            {...register("parentWhatsapp")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span className="text-sm">WhatsApp</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            {...register("parentPhonePay")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span className="text-sm">Phone Pay</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Qualification Details Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#f0f4f8', borderColor: '#002147' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#002147' }}>
                    5. Qualification Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Appear Exam in (Month-Year)</label>
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          {...register("lastExamMonth")}
                          className="w-1/2 px-4 py-3 border-2 rounded-lg"
                          style={{ borderColor: '#002147' }}
                          placeholder="Month"
                        />
                        <input 
                          type="text"
                          {...register("lastExamYear")}
                          className="w-1/2 px-4 py-3 border-2 rounded-lg"
                          style={{ borderColor: '#002147' }}
                          placeholder="Year"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name of School / College</label>
                      <input 
                        type="text"
                        {...register("lastSchoolCollege")}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        placeholder="School/College Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Course Name</label>
                      <input 
                        type="text"
                        {...register("lastCourseName")}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        placeholder="Course Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Percentage %</label>
                      <input 
                        type="text"
                        {...register("lastPercentage")}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        placeholder="XX.XX%"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Result</label>
                      <div className="flex gap-6 items-center pt-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Pass"
                            {...register("lastResult")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Pass</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Fail"
                            {...register("lastResult")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Fail</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="ATKT"
                            {...register("lastResult")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>ATKT</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer pt-8">
                        <input 
                          type="checkbox" 
                          {...register("applyScholarship")}
                          className="w-5 h-5 cursor-pointer"
                          style={{ accentColor: '#800020' }}
                        />
                        <span className="font-semibold">Apply for Scholarship</span>
                      </label>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Reason of Leaving School/College</label>
                      <div className="flex gap-6 items-center pt-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Pass"
                            {...register("reasonLeaving")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Pass</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            value="Transfer College"
                            {...register("reasonLeaving")}
                            className="w-5 h-5 cursor-pointer"
                            style={{ accentColor: '#800020' }}
                          />
                          <span>Transfer College</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#fff9e6', border: '2px solid #B8860B' }}>
                    <p className="text-sm font-semibold mb-2">📎 Attach All Certificate Photocopies:</p>
                    <p className="text-xs text-gray-700">Please attach photocopies of all your academic certificates (2023-24, 2022-23, 2021-22, 2020-21, 2019-20). If there is a gap, gap certificate is compulsory.</p>
                  </div>
                </section>

                {/* Student Bank Details Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#fffef7', borderColor: '#B8860B' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#800020' }}>
                    6. Student Bank Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Account Number *</label>
                      <input 
                        type="text"
                        {...register("bankAccountNumber", { required: "Account number is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="Account Number"
                      />
                      {errors.bankAccountNumber && <p className="text-red-600 text-sm mt-1">{errors.bankAccountNumber.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">IFSC Code *</label>
                      <input 
                        type="text"
                        {...register("bankIFSC", { required: "IFSC code is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="IFSC CODE"
                      />
                      {errors.bankIFSC && <p className="text-red-600 text-sm mt-1">{errors.bankIFSC.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name of Nationalised Bank *</label>
                      <input 
                        type="text"
                        {...register("bankName", { required: "Bank name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="BANK NAME"
                      />
                      {errors.bankName && <p className="text-red-600 text-sm mt-1">{errors.bankName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Branch</label>
                      <input 
                        type="text"
                        {...register("bankBranch")}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#B8860B' }}
                        placeholder="BRANCH NAME"
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#fff9e6', border: '2px solid #B8860B' }}>
                    <p className="text-sm font-semibold">📎 Note: Bank account should be linked with Aadhar. Attach Bank Passbook Photocopy.</p>
                  </div>
                </section>

                {/* Parent/Guardian Details Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#f0f4f8', borderColor: '#002147' }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#002147' }}>
                    Parent/Guardian Details (पालकांचे घोषणा पत्र)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name of Parent / Guardian *</label>
                      <input 
                        type="text"
                        {...register("parentName", { required: "Parent name is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="PARENT/GUARDIAN NAME"
                      />
                      {errors.parentName && <p className="text-red-600 text-sm mt-1">{errors.parentName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Relation with Candidate *</label>
                      <input 
                        type="text"
                        {...register("relationWithCandidate", { required: "Relation is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="FATHER/MOTHER/GUARDIAN"
                      />
                      {errors.relationWithCandidate && <p className="text-red-600 text-sm mt-1">{errors.relationWithCandidate.message}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Full Address *</label>
                      <textarea 
                        {...register("parentAddress", { required: "Address is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        rows="3"
                        placeholder="Full Address"
                      />
                      {errors.parentAddress && <p className="text-red-600 text-sm mt-1">{errors.parentAddress.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Occupation *</label>
                      <input 
                        type="text"
                        {...register("parentOccupation", { required: "Occupation is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg uppercase"
                        style={{ borderColor: '#002147' }}
                        placeholder="OCCUPATION"
                      />
                      {errors.parentOccupation && <p className="text-red-600 text-sm mt-1">{errors.parentOccupation.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Annual Income *</label>
                      <input 
                        type="text"
                        {...register("parentIncome", { required: "Annual income is required" })}
                        className="w-full px-4 py-3 border-2 rounded-lg"
                        style={{ borderColor: '#002147' }}
                        placeholder="Annual Income"
                      />
                      {errors.parentIncome && <p className="text-red-600 text-sm mt-1">{errors.parentIncome.message}</p>}
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#fff9e6', border: '2px solid #002147' }}>
                    <p className="text-sm font-semibold">📎 Note: Attach Income certificate of 2024-25</p>
                  </div>
                </section>

                {/* Fee Structure Display */}
                {currentCourseFees && (
                  <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#fffef7', borderColor: '#B8860B' }}>
                    <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#800020' }}>
                      Fee Structure for {currentCourseFees.name}
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-2" style={{ borderColor: '#B8860B' }}>
                        <thead style={{ backgroundColor: '#f0e6d2' }}>
                          <tr>
                            <th className="border-2 px-4 py-3 text-left" style={{ borderColor: '#B8860B' }}>Fee Type</th>
                            <th className="border-2 px-4 py-3 text-right" style={{ borderColor: '#B8860B' }}>Amount (Rs.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Admission Fees</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.admission}</td>
                          </tr>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Tuition Fees</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.tuition}</td>
                          </tr>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Co-curricular Activities</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.coActivity}</td>
                          </tr>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Exam Fees</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.exam}</td>
                          </tr>
                          <tr style={{ backgroundColor: '#f0e6d2' }}>
                            <td className="border-2 px-4 py-2 font-bold" style={{ borderColor: '#B8860B' }}>TOTAL FEES</td>
                            <td className="border-2 px-4 py-2 text-right font-bold text-lg" style={{ borderColor: '#B8860B', color: '#800020' }}>{currentCourseFees.total}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-bold mb-3" style={{ color: '#002147' }}>Payment Options:</h4>
                      <table className="w-full border-2" style={{ borderColor: '#B8860B' }}>
                        <thead style={{ backgroundColor: '#f0e6d2' }}>
                          <tr>
                            <th className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Payment Mode</th>
                            <th className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Amount (Rs.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>One Time</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.oneTime}</td>
                          </tr>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Installment 1</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.inst1}</td>
                          </tr>
                          <tr>
                            <td className="border-2 px-4 py-2" style={{ borderColor: '#B8860B' }}>Installment 2</td>
                            <td className="border-2 px-4 py-2 text-right font-semibold" style={{ borderColor: '#B8860B' }}>{currentCourseFees.inst2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm text-gray-600 mt-4 italic">
                      Note: Uniform/Books/Exam Fees are not included in the above fees.
                    </p>
                  </section>
                )}

                {/* Declaration Section */}
                <section className="p-6 rounded-xl border-2" style={{ backgroundColor: '#fef5f5', borderColor: '#800020' }}>
                  <h3 className="text-lg font-bold mb-4 text-center underline" style={{ color: '#800020' }}>
                    DECLARATION
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold">I hereby declare that:</p>
                    <p>1. I wish to take admission to the selected course in this college. The personal details I have provided are correct.</p>
                    <p>2. I shall abide by the rules and conditions of the University, College, the parent institution & the Government. These shall remain binding on me.</p>
                    <p>3. I have read the rules of the college and I will follow them.</p>
                    <p>4. The decisions & rules of discipline laid down by the Principal will be binding on me.</p>
                    <p>5. I shall not demand any concession in the college exam, time-table on religious or any other grounds.</p>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-4" style={{ color: '#800020' }}>Parent/Guardian Declaration:</p>
                    <p className="text-sm text-gray-700 mb-2">My child is seeking admission in your college with my consent. I will see that he/she abides by all the rules of the college.</p>
                    <p className="text-sm text-gray-700 mb-2">The decisions of the Principal on any college matter will be binding on him/her.</p>
                    <p className="text-sm text-gray-700">All correspondence may please be sent on the above-address. The information about my family given above is true to the best of knowledge & I remain responsible for any discrepancies in it.</p>
                  </div>

                  <div className="mt-6 pt-4" style={{ borderTop: '2px solid #800020' }}>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("declarationAccepted", { required: "You must accept the declaration" })}
                        className="mt-1 w-6 h-6 cursor-pointer"
                        style={{ accentColor: '#B8860B' }}
                      />
                      <span className="font-semibold text-gray-800">
                        I have read and understood all the above declarations and undertakings. I accept all terms and conditions stated above. *
                      </span>
                    </label>
                    {errors.declarationAccepted && <p className="text-red-600 text-sm mt-2">{errors.declarationAccepted.message}</p>}
                  </div>
                </section>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button 
                    type="submit" 
                    className="text-white text-lg px-12 py-5 rounded-full font-bold shadow-2xl flex items-center gap-3 transition-all"
                    style={{ backgroundColor: '#800020' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#600015'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#800020'}
                  >
                    <Save size={24} /> 
                    Generate Application PDF
                  </button>
                </div>

              </form>
            ) : (
              // Success View
              <div className="text-center py-16">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ backgroundColor: '#f0f4f8', color: '#800020' }}>
                  <CheckCircle size={64} />
                </div>
                <h2 className="text-4xl font-bold mb-3" style={{ color: '#002147' }}>Application Generated Successfully!</h2>
                <p className="text-lg mb-4" style={{ color: '#002147' }}>
                  Application No: <span className="font-bold" style={{ color: '#B8860B' }}>{formData.appNo}</span>
                </p>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                  Your admission form for <strong>{feeStructure[formData.course]?.name}</strong> has been generated successfully. Please download the PDF, print it, affix your photograph, and sign at designated places.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <PDFDownloadLink 
                    document={<SeniorAdmissionPDF data={formData} />} 
                    fileName={`SVIM_Admission_${formData.lastName}_${formData.firstName}_${formData.appNo}.pdf`}
                    className="flex items-center gap-3 text-white px-10 py-5 rounded-xl font-bold shadow-2xl transition-all transform hover:scale-105"
                    style={{ backgroundColor: '#800020' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#600015'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#800020'}
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
                    className="flex items-center gap-3 px-8 py-5 font-semibold border-2 rounded-xl transition-all"
                    style={{ borderColor: '#B8860B', color: '#002147' }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(184, 134, 11, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <RefreshCcw size={20} /> 
                    Fill Another Form
                  </button>
                </div>

                <div className="mt-12 p-6 rounded-xl max-w-2xl mx-auto border-2" style={{ backgroundColor: '#f0f4f8', borderColor: '#002147' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#002147' }}>📋 Next Steps:</h4>
                  <ul className="text-left text-sm text-gray-700 space-y-2">
                    <li>✓ Download and print the application form</li>
                    <li>✓ Affix your recent passport-size photograph in the designated box</li>
                    <li>✓ Sign at the designated places</li>
                    <li>✓ Parent/Guardian should also sign at the designated places</li>
                    <li>✓ Attach all required documents (originals + photocopies)</li>
                    <li>✓ Submit at the college office</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorAdmissionForm;