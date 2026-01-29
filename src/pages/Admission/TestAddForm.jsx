import React, { useState } from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';

const TestAdmissionForm = () => {
  // 1. State to hold all student input
  const [formData, setFormData] = useState({
    surname: '',
    middle_name: '',
    father_name: '',
    mother_name: '',
    dob_date: '',
    dob_month: '',
    dob_year: '',
    gender: 'Male', // Default
    standard: '11th', // Default
    stream: 'Science', // Default
    caste: 'open', // Default
    cand_mob: '',
    mail: '',
    address_corres: '',
    app_no: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. The Main Function to Fill & Download
  const fillAndDownloadPDF = async () => {
    try {
      const templateResponse = await fetch('/form.pdf');
      if (!templateResponse.ok) throw new Error(`Failed to fetch PDF template: ${templateResponse.status}`);
      const existingPdfBytes = await templateResponse.arrayBuffer();

      // B. Load the Document
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const form = pdfDoc.getForm();

      // Helper function to safely fill fields (avoids crash if field name is wrong)
      const fillField = (fieldName, value) => {
        try {
          const field = form.getTextField(fieldName);
          field.setText(value.toUpperCase());
        } catch {
          console.warn(`Field '${fieldName}' not found in PDF.`);
        }
      };

      const checkField = (fieldName) => {
        try {
          const field = form.getCheckBox(fieldName);
          field.check();
        } catch {
          console.warn(`Checkbox '${fieldName}' not found in PDF.`);
        }
      };

      // C. Fill Basic Text Fields
      fillField('surname', formData.surname);
      fillField('middle_name', formData.middle_name);
      fillField('father_name', formData.father_name);
      fillField('mother_name', formData.mother_name);
      fillField('cand_mopb', formData.cand_mob);
      fillField('mail', formData.mail);
      fillField('address_corres', formData.address_corres);
      fillField('app_no', formData.app_no);

      // DOB (Splitting date parts)
      fillField('dob_date', formData.dob_date);
      fillField('dob_month', formData.dob_month);
      // NOTE: You listed 'dob_month' twice in your list, assuming the second one is year
      // You might need to check your PDF if the year field is named differently.
      // I am guessing it might be named 'dob_year' or the second 'dob_month'.
      // For now, let's try to find a field named 'dob_year' or re-use dob_month if that was your intent.
      try { form.getTextField('dob_year').setText(formData.dob_year); } catch {
         // If you actually named the year field "dob_month" as well in the PDF, un-comment below:
         // form.getTextField('dob_month').setText(formData.dob_year); 
      }

      // D. Checkbox Logic (Putting 'X' in the correct box)
      
      // Gender
      if (formData.gender === 'Male') fillField('male', 'X');
      else if (formData.gender === 'Female') fillField('female', 'X');

      // Caste Category
      // Your map: sc, st, dt_vj, nt_b, nt_c, nt_d, obi, sbc, open
      // 'obi' seems to be a typo for 'obc' in your PDF field name list, but I will use 'obi' as you requested.
      const casteField = formData.caste === 'obc' ? 'obi' : formData.caste;
      checkField(casteField);

      // Standard & Stream Logic (11_a, 12_a, etc.)
      const is11th = formData.standard === '11th';
      const is12th = formData.standard === '12th';
      
      if (is11th) checkField('11_a');
      if (is12th) checkField('12_a');

      // Streams: 11_art, 11_com, 11_sci OR 12_art, 12_com, 12_sci
      const prefix = is11th ? '11' : '12';
      let streamSuffix = '';
      if (formData.stream === 'Arts') streamSuffix = '_art';
      if (formData.stream === 'Commerce') streamSuffix = '_com';
      if (formData.stream === 'Science') streamSuffix = '_sci';

      if (streamSuffix) {
        checkField(`${prefix}${streamSuffix}`);
      }

      // E. Update appearances and Save
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      form.updateFieldAppearances(font);
      const pdfBytes = await pdfDoc.save();

      // F. Trigger Download
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Admission_${formData.surname || 'Form'}.pdf`;
      link.click();

    } catch (error) {
      console.error("Error filling PDF:", error);
      alert("Error: Could not load 'form.pdf'. Make sure it is in the public folder!");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Admission Form 2026-27</h2>
      
      <form className="space-y-4">
        {/* Standard & Stream */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Standard</label>
            <select name="standard" value={formData.standard} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Stream</label>
            <select name="stream" value={formData.stream} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
        </div>

        {/* Name Fields */}
        <input name="surname" placeholder="Surname" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="middle_name" placeholder="Middle Name" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="father_name" placeholder="Father's Name" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="mother_name" placeholder="Mother's Name" onChange={handleChange} className="w-full border p-2 rounded" />

        {/* DOB */}
        <div className="flex gap-2">
            <input name="dob_date" placeholder="DD" onChange={handleChange} className="w-1/3 border p-2 rounded" />
            <input name="dob_month" placeholder="MM" onChange={handleChange} className="w-1/3 border p-2 rounded" />
            <input name="dob_year" placeholder="YYYY" onChange={handleChange} className="w-1/3 border p-2 rounded" />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium">Gender</label>
          <select name="gender" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Caste */}
        <div>
          <label className="block font-medium">Category</label>
          <select name="caste" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="open">OPEN</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="sbc">SBC</option>
            <option value="nt_b">NT-B</option>
            <option value="nt_c">NT-C</option>
            <option value="nt_d">NT-D</option>
            <option value="dt_vj">DT-VJ</option>
          </select>
        </div>

        {/* Contact */}
        <input name="cand_mob" placeholder="Mobile Number" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="mail" placeholder="Email ID" onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="address_corres" placeholder="Current Address" onChange={handleChange} className="w-full border p-2 rounded" />

        <button 
          type="button" 
          onClick={fillAndDownloadPDF}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-bold"
        >
          Download Filled PDF
        </button>
      </form>
    </div>
  );
};

export default TestAdmissionForm;