import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Import your logo if available
import logo from '../../assets/logo-name.png'; 

const styles = StyleSheet.create({
  page: { 
    padding: 30, 
    fontSize: 11, 
    fontFamily: 'Times-Roman',
    lineHeight: 1.6
  },
  
  // Header
  header: { 
    borderBottomWidth: 2, 
    borderBottomColor: '#8B0000', 
    paddingBottom: 12, 
    marginBottom: 18, 
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  logoSection: { 
    width: '70%', 
    paddingRight: 10
  },
  instituteName: {
    fontSize: 12,
    fontFamily: 'Times-Bold',
    textAlign: 'center',
    marginBottom: 5
  },
  instituteSubtitle: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 3
  },
  regNumber: {
    fontSize: 9,
    textAlign: 'center',
    marginBottom: 3
  },
  contactInfo: { 
    fontSize: 8, 
    color: '#333',
    textAlign: 'center',
    marginTop: 5
  },
  headerRight: { 
    width: '30%', 
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
  // Photo Box
  photoBox: { 
    width: 90, 
    height: 110, 
    borderWidth: 2, 
    borderColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 6
  },
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  photoText: {
    fontSize: 9,
    textAlign: 'center',
    color: '#666'
  },
  appNoBox: {
    fontSize: 9,
    marginTop: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 4
  },

  formTitle: { 
    marginTop: 8, 
    fontSize: 13, 
    fontFamily: 'Times-Bold',
    textAlign: 'center',
    marginBottom: 12
  },

  // Office Use Section
  officeUseRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 12,
    backgroundColor: '#f5f5f5'
  },
  officeField: {
    flex: 1,
    fontSize: 9,
    paddingHorizontal: 8
  },

  // Course Selection Row
  courseRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flexWrap: 'wrap'
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 4
  },
  
  // Application Letter
  applicationLetter: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fafafa'
  },
  letterText: {
    fontSize: 10,
    marginBottom: 4,
    lineHeight: 1.5
  },

  // Form Sections
  sectionTitle: { 
    backgroundColor: '#e8e8e8', 
    padding: 6, 
    fontSize: 11, 
    fontFamily: 'Times-Bold', 
    marginTop: 12, 
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#999'
  },
  
  // Form Fields
  row: { 
    flexDirection: 'row', 
    marginBottom: 8,
    alignItems: 'flex-start',
    minHeight: 20
  },
  col: { 
    flexDirection: 'row', 
    alignItems: 'center',
    flex: 1
  },
  label: { 
    fontSize: 10, 
    fontFamily: 'Times-Bold',
    marginRight: 5
  },
  value: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#666', 
    flex: 1, 
    paddingLeft: 4,
    paddingBottom: 3,
    paddingTop: 2,
    fontSize: 10,
    minHeight: 16
  },
  valueFixed: {
    borderBottomWidth: 1, 
    borderBottomColor: '#666', 
    paddingLeft: 4,
    paddingBottom: 3,
    paddingTop: 2,
    fontSize: 10,
    minHeight: 16
  },
  
  // Checkboxes
  checkbox: { 
    width: 10, 
    height: 10, 
    borderWidth: 1, 
    borderColor: '#000', 
    marginRight: 4,
    marginLeft: 5
  },
  checkedBox: { 
    width: 10, 
    height: 10, 
    backgroundColor: '#000', 
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 4,
    marginLeft: 5
  },
  checkboxLabel: {
    fontSize: 10,
    marginRight: 8
  },

  // Digit Boxes
  digitBoxContainer: {
    flexDirection: 'row',
    gap: 3
  },
  digitBox: {
    width: 18,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    fontFamily: 'Times-Bold'
  },
  
  // Address Box
  addressBox: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 8,
    minHeight: 60,
    fontSize: 10,
    lineHeight: 1.5
  },

  // Tables
  table: { 
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 8,
    marginBottom: 8
  },
  tableRow: { 
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 22
  },
  tableColHeader: { 
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
    backgroundColor: '#e8e8e8',
    fontFamily: 'Times-Bold',
    fontSize: 9,
    textAlign: 'center',
    justifyContent: 'center'
  },
  tableCol: { 
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
    fontSize: 9,
    textAlign: 'center',
    justifyContent: 'center'
  },
  tableColLast: {
    flex: 1,
    padding: 5,
    fontSize: 9,
    textAlign: 'center',
    justifyContent: 'center'
  },

  // Fee Tables
  feeTableContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 15
  },
  feeTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  feeTableHeaderCell: {
    flex: 1,
    padding: 6,
    backgroundColor: '#d0d0d0',
    fontFamily: 'Times-Bold',
    fontSize: 10,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000'
  },
  feeTableHeaderCellLast: {
    flex: 1,
    padding: 6,
    backgroundColor: '#d0d0d0',
    fontFamily: 'Times-Bold',
    fontSize: 10,
    textAlign: 'center'
  },
  feeTableDataCell: {
    flex: 1,
    padding: 6,
    fontSize: 9,
    borderRightWidth: 1,
    borderRightColor: '#000'
  },
  feeTableDataCellLast: {
    flex: 1,
    padding: 6,
    fontSize: 9,
    textAlign: 'center'
  },

  // Submission Table
  submissionTableContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10
  },
  submissionTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  submissionTableHeader: {
    flex: 1,
    padding: 5,
    backgroundColor: '#d0d0d0',
    fontFamily: 'Times-Bold',
    fontSize: 9,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000'
  },
  submissionTableData: {
    flex: 1,
    padding: 5,
    fontSize: 9,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000'
  },

  // Declaration
  declTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    textAlign: 'center',
    marginBottom: 10,
    textDecoration: 'underline'
  },
  declPoint: {
    fontSize: 9,
    marginBottom: 4,
    lineHeight: 1.5
  },

  // Signature Section
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15
  },
  signBox: {
    width: '45%'
  },
  signLine: {
    borderTopWidth: 1,
    borderTopColor: '#000',
    marginTop: 30,
    paddingTop: 5,
    fontSize: 9,
    textAlign: 'center'
  },

  // Office Use
  officeUse: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  officeTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    marginBottom: 8
  },
  officeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  officeField: {
    fontSize: 9
  }
});

const SeniorAdmissionPDF = ({ data }) => {
  const feeStructure = {
    'FYBBA': { name: 'FY BBA', admission: 2500, tuition: 40000, coActivity: 10000, exam: 2500, total: 55000, oneTime: 52500, inst1: 35000, inst2: 20000 },
    'SYBBA': { name: 'SY BBA', admission: 2500, tuition: 40000, coActivity: 10000, exam: 2500, total: 55000, oneTime: 52500, inst1: 35000, inst2: 20000 },
    'TYBBA': { name: 'TY BBA', admission: 2500, tuition: 40000, coActivity: 10000, exam: 2500, total: 55000, oneTime: 52500, inst1: 35000, inst2: 20000 },
    'FYBComCA': { name: 'FY B.Com (CA)', admission: 1000, tuition: 12000, coActivity: 2500, exam: 2500, total: 18000, oneTime: 17000, inst1: 10000, inst2: 8000 },
    'SYBComCA': { name: 'SY B.Com (CA)', admission: 1000, tuition: 12000, coActivity: 2500, exam: 2500, total: 18000, oneTime: 17000, inst1: 10000, inst2: 8000 },
    'TYBComCA': { name: 'TY B.Com (CA)', admission: 1000, tuition: 12000, coActivity: 2500, exam: 2500, total: 18000, oneTime: 17000, inst1: 10000, inst2: 8000 },
    'FYBComBM': { name: 'FY B.Com BM', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 },
    'SYBComBM': { name: 'SY B.Com BM', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 },
    'TYBComBM': { name: 'TY B.Com BM', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 },
    'FYBA': { name: 'FY BA', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 },
    'SYBA': { name: 'SY BA', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 },
    'TYBA': { name: 'TY BA', admission: 1000, tuition: 7000, coActivity: 3000, exam: 1500, total: 12500, oneTime: 11000, inst1: 7500, inst2: 5000 }
  };

  const currentFees = feeStructure[data.course];

  // Helper function to get aadhar digits
  const getAadharDigits = () => {
    const digits = [];
    for (let i = 0; i < 12; i++) {
      digits.push(data[`aadhar${i}`] || '');
    }
    return digits;
  };

  // Helper function to get mobile digits
  const getMobileDigits = (prefix) => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(data[`${prefix}${i}`] || '');
    }
    return digits;
  };

  return (
    <Document>
      {/* PAGE 1 - MAIN APPLICATION */}
      <Page size="A4" style={styles.page}>
        {/* Header with Logo and Photo */}
        <View style={styles.header}>
          <View style={styles.logoSection}>
            <Text style={styles.regNumber}>Reg. No. ID/PU/NS/C/148/2009</Text>
            <Text style={styles.instituteName}>
              Swami Vivekananda Institute Of Management
            </Text>
            <Text style={styles.instituteSubtitle}>
              Near Post Office, Shivaji Nagar Pimpalgaon (B). Tal-Niphad, Dist. Nashik. 422 209.
            </Text>
            <Text style={styles.contactInfo}>
              Ph: 8208665658 | E-mail: swamivivekanandainstitute2021@gmail.com
            </Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.photoBox}>
              {data.photoData ? (
                <Image src={data.photoData} style={styles.photoImage} />
              ) : (
                <Text style={styles.photoText}>Paste{'\n'}Passport Size{'\n'}Photo Here</Text>
              )}
            </View>
            <Text style={styles.appNoBox}>App. No: {data.appNo}</Text>
          </View>
        </View>

        <Text style={styles.formTitle}>ADMISSION FORM (Year 2026-2027)</Text>

        {/* Office Use Only */}
        <View style={styles.officeUseRow}>
          <Text style={styles.officeField}>Eligibility No. _______</Text>
          <Text style={styles.officeField}>CRN _______</Text>
          <Text style={styles.officeField}>Class _______</Text>
          <Text style={styles.officeField}>Roll no _______</Text>
          <Text style={styles.officeField}>Amt. Rs. _______</Text>
          <Text style={styles.officeField}>Receipt No. _______</Text>
          <Text style={styles.officeField}>Date of Adm. _______</Text>
        </View>

        {/* Course Selection */}
        <View style={styles.courseRow}>
          {['FYBComCA', 'SYBComCA', 'TYBComCA', 'FYBComBM', 'SYBComBM', 'TYBComBM', 'FYBBA', 'SYBBA', 'TYBBA', 'FYBA', 'SYBA', 'TYBA'].map(course => (
            <View key={course} style={styles.courseItem}>
              <View style={data.course === course ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>{feeStructure[course].name}</Text>
            </View>
          ))}
        </View>

        {/* Application Letter */}
        <View style={styles.applicationLetter}>
          <Text style={styles.letterText}>To,</Text>
          <Text style={styles.letterText}>The Principal,</Text>
          <Text style={styles.letterText}>Swami Vivekananda Institute Of Management</Text>
          <Text style={styles.letterText}>Pimpalgaon (B) Tal. Niphad Dist:-Nashik</Text>
          <Text style={styles.letterText}>{'\n'}Respected Sir,</Text>
          <Text style={styles.letterText}>
            I wish to take admission to {currentFees?.name} Course in your college. My personal details as follows.
          </Text>
        </View>

        {/* Section 1: Candidate Details */}
        <Text style={styles.sectionTitle}>1. Candidate Details (Fill in BLOCK CAPITAL LETTERS)</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>FIRST NAME:</Text>
            <Text style={styles.value}>{data.firstName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>MIDDLE NAME:</Text>
            <Text style={styles.value}>{data.middleName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>LAST NAME:</Text>
            <Text style={styles.value}>{data.lastName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>MOTHER NAME:</Text>
            <Text style={styles.value}>{data.motherName || ''}</Text>
          </View>
        </View>

        {/* Section 2: Full name in Devanagari */}
        <Text style={styles.sectionTitle}>2. Full name in Devanagari</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.nameDevanagari || ''}</Text>
        </View>

        {/* Aadhar Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Aadhar Number:</Text>
          <View style={styles.digitBoxContainer}>
            {getAadharDigits().map((digit, i) => (
              <View key={i} style={styles.digitBox}>
                <Text>{digit}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section 3: Permanent Address */}
        <Text style={styles.sectionTitle}>3. Permanent Address (As per Aadhar Card)</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Building Name:</Text>
            <Text style={styles.value}>{data.buildingName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Street Name / Nagar:</Text>
            <Text style={styles.value}>{data.streetName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Village / Tahsil / Taluka:</Text>
            <Text style={styles.value}>{data.village || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.col, flex: 0.5 }}>
            <Text style={styles.label}>District:</Text>
            <Text style={styles.valueFixed}>{data.district || 'NASHIK'}</Text>
          </View>
          <View style={{ ...styles.col, flex: 0.5, marginLeft: 10 }}>
            <Text style={styles.label}>State:</Text>
            <Text style={styles.valueFixed}>{data.state || 'MAHARASHTRA'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>PIN Code:</Text>
            <View style={styles.digitBoxContainer}>
              {(data.pinCode || '422___').split('').map((digit, i) => (
                <View key={i} style={styles.digitBox}>
                  <Text>{digit}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Section 4: Other Personnel Details */}
        <Text style={styles.sectionTitle}>4. Other Personnel Details</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Date of Birth (DD-MM-YYYY):</Text>
            <Text style={styles.valueFixed}>{data.dobDay || '__'}-{data.dobMonth || '__'}-{data.dobYear || '____'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Category:</Text>
          {['SC', 'ST', 'NT-A', 'NT-B', 'NT-C', 'NT-D', 'OBC', 'SBC', 'Open'].map(cat => (
            <View key={cat} style={styles.courseItem}>
              <View style={data.category === cat ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>{cat}</Text>
            </View>
          ))}
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Caste Name:</Text>
            <Text style={styles.value}>{data.casteName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <View style={styles.courseItem}>
            <View style={data.gender === 'Male' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Male</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.gender === 'Female' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Female</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Marital Status:</Text>
          <View style={styles.courseItem}>
            <View style={data.maritalStatus === 'Married' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Married</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.maritalStatus === 'Unmarried' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Unmarried</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Blood Group:</Text>
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
            <View key={bg} style={styles.courseItem}>
              <View style={data.bloodGroup === bg ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>{bg}</Text>
            </View>
          ))}
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{data.email || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Mobile No. (Candidate):</Text>
            <View style={styles.digitBoxContainer}>
              {getMobileDigits('candidateMobile').map((digit, i) => (
                <View key={i} style={styles.digitBox}>
                  <Text>{digit}</Text>
                </View>
              ))}
            </View>
            <View style={styles.courseItem}>
              <View style={data.candidateWhatsapp ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>WhatsApp</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={data.candidatePhonePay ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>Phone Pay</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Mobile No. (Parent):</Text>
            <View style={styles.digitBoxContainer}>
              {getMobileDigits('parentMobile').map((digit, i) => (
                <View key={i} style={styles.digitBox}>
                  <Text>{digit}</Text>
                </View>
              ))}
            </View>
            <View style={styles.courseItem}>
              <View style={data.parentWhatsapp ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>WhatsApp</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={data.parentPhonePay ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>Phone Pay</Text>
            </View>
          </View>
        </View>

        {/* Section 5: Qualification Details */}
        <Text style={styles.sectionTitle}>5. Qualification Details</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Last Appear Exam:</Text>
            <Text style={styles.valueFixed}>{data.lastExamMonth || ''} {data.lastExamYear || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Name of School/College:</Text>
            <Text style={styles.value}>{data.lastSchoolCollege || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Course Name:</Text>
            <Text style={styles.value}>{data.lastCourseName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.col, flex: 0.5 }}>
            <Text style={styles.label}>Percentage:</Text>
            <Text style={styles.valueFixed}>{data.lastPercentage || ''}%</Text>
          </View>
          <View style={{ ...styles.col, flex: 0.5, marginLeft: 10 }}>
            <Text style={styles.label}>Result:</Text>
            <View style={styles.courseItem}>
              <View style={data.lastResult === 'Pass' ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>Pass</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={data.lastResult === 'Fail' ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>Fail</Text>
            </View>
            <View style={styles.courseItem}>
              <View style={data.lastResult === 'ATKT' ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.checkboxLabel}>ATKT</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.courseItem}>
            <View style={data.applyScholarship ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Apply for Scholarship</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Reason of Leaving:</Text>
          <View style={styles.courseItem}>
            <View style={data.reasonLeaving === 'Pass' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Pass</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.reasonLeaving === 'Transfer College' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Transfer College</Text>
          </View>
        </View>

        {/* Section 6: Student Bank Details */}
        <Text style={styles.sectionTitle}>6. Student Bank Details</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Account Number:</Text>
            <Text style={styles.value}>{data.bankAccountNumber || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>IFSC Code:</Text>
            <Text style={styles.value}>{data.bankIFSC || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Name of Bank:</Text>
            <Text style={styles.value}>{data.bankName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Branch:</Text>
            <Text style={styles.value}>{data.bankBranch || ''}</Text>
          </View>
        </View>

        {/* Declaration */}
        <View style={{ marginTop: 12, padding: 8, borderWidth: 1, borderColor: '#666', backgroundColor: '#fafafa' }}>
          <Text style={{ fontSize: 9, lineHeight: 1.5 }}>
            I hereby declare that I shall abide by the rules and condition of the University, College, the parent institution & the Government. These shall remain binding on me. I have read the rules of the college and I will follow them. The decisions & rules of discipline laid down by the Principal will also be binding on me. I shall not demand any concession in the college exam, time-table on religious or any other grounds.
          </Text>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureRow}>
          <View style={styles.signBox}>
            <Text style={{ fontSize: 9, marginBottom: 3 }}>Date: ____ / ____ / ____</Text>
            <Text style={{ fontSize: 9, marginBottom: 3 }}>Place: _______________</Text>
            <Text style={styles.signLine}>Yours Faithfully,{'\n'}Student's Signature</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.signLine}>Signature of{'\n'}Parent/Guardian</Text>
          </View>
        </View>
      </Page>

      {/* PAGE 2 - PARENT DECLARATION & FEE STRUCTURE */}
      <Page size="A4" style={styles.page}>
        {/* Parent Declaration */}
        <Text style={styles.sectionTitle}>पालकांचे घोषणा पत्र (Parent/Guardian Declaration)</Text>
        
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Name of Parent/Guardian:</Text>
            <Text style={styles.value}>{data.parentName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Relation with Candidate:</Text>
            <Text style={styles.value}>{data.relationWithCandidate || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Full Address:</Text>
          </View>
        </View>
        <View style={styles.addressBox}>
          <Text>{data.parentAddress || ''}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Occupation:</Text>
            <Text style={styles.value}>{data.parentOccupation || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Annual Income:</Text>
            <Text style={styles.value}>Rs. {data.parentIncome || ''}</Text>
          </View>
        </View>

        {/* Parent Declaration Text */}
        <View style={{ marginTop: 12, padding: 8, borderWidth: 1, borderColor: '#666', backgroundColor: '#fafafa' }}>
          <Text style={{ fontSize: 9, lineHeight: 1.5, marginBottom: 4 }}>
            My child is seeking admission in your college with my consent. I will see that he/she abides by all the rules of the college. The decisions of the Principal on any college matter will be binding on his/her. All correspondence may please be sent on the above-address. The information about my family given above is true to the best of knowledge & I remain responsible for any discrepancies in it.
          </Text>
        </View>

        {/* Signatures */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
          <View style={{ width: '48%' }}>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>Date: ____ / ____ / ____</Text>
            <Text style={{ fontSize: 9, marginBottom: 2 }}>Place: _______________</Text>
            <Text style={styles.signLine}>Signature of Parent/Guardian</Text>
          </View>
          <View style={{ width: '48%', alignItems: 'flex-end' }}>
            <Text style={styles.signLine}>Signature Principal</Text>
          </View>
        </View>

        {/* Fee Distribution Table */}
        {currentFees && (
          <>
            <Text style={{ ...styles.sectionTitle, marginTop: 20 }}>Fee Structure for {currentFees.name}</Text>
            
            <View style={styles.feeTableContainer}>
              {/* Header Row */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableHeaderCell, flex: 2 }}>
                  <Text>Fee Type</Text>
                </View>
                <View style={styles.feeTableHeaderCellLast}>
                  <Text>Amount</Text>
                </View>
              </View>

              {/* Admission Fees */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableDataCell, flex: 2 }}>
                  <Text>Admission Fees</Text>
                </View>
                <View style={styles.feeTableDataCellLast}>
                  <Text>Rs. {currentFees.admission}</Text>
                </View>
              </View>

              {/* Tuition Fees */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableDataCell, flex: 2 }}>
                  <Text>Tuition Fees</Text>
                </View>
                <View style={styles.feeTableDataCellLast}>
                  <Text>Rs. {currentFees.tuition}</Text>
                </View>
              </View>

              {/* Co-curricular Activities */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableDataCell, flex: 2 }}>
                  <Text>Co-curricular Activities</Text>
                </View>
                <View style={styles.feeTableDataCellLast}>
                  <Text>Rs. {currentFees.coActivity}</Text>
                </View>
              </View>

              {/* Exam Fees */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableDataCell, flex: 2 }}>
                  <Text>Exam Fees</Text>
                </View>
                <View style={styles.feeTableDataCellLast}>
                  <Text>Rs. {currentFees.exam}</Text>
                </View>
              </View>

              {/* Total Fees */}
              <View style={styles.feeTableRow}>
                <View style={{ ...styles.feeTableDataCell, flex: 2, backgroundColor: '#b0b0b0' }}>
                  <Text style={{ fontFamily: 'Times-Bold' }}>TOTAL FEES</Text>
                </View>
                <View style={{ ...styles.feeTableDataCellLast, backgroundColor: '#b0b0b0' }}>
                  <Text style={{ fontFamily: 'Times-Bold' }}>Rs. {currentFees.total}</Text>
                </View>
              </View>
            </View>

            {/* Payment Mode Table */}
            <View style={styles.submissionTableContainer}>
              <View style={styles.submissionTableRow}>
                <Text style={styles.submissionTableHeader}>Payment Mode (Non-refundable)</Text>
                <Text style={styles.submissionTableHeader}>Dates</Text>
                <Text style={styles.submissionTableHeader}>Fees Amount</Text>
              </View>
              <View style={styles.submissionTableRow}>
                <Text style={styles.submissionTableData}>One Time</Text>
                <Text style={styles.submissionTableData}>_________________</Text>
                <Text style={styles.submissionTableData}>Rs. {currentFees.oneTime}</Text>
              </View>
              <View style={styles.submissionTableRow}>
                <Text style={styles.submissionTableData}>Installment 1</Text>
                <Text style={styles.submissionTableData}>_________________</Text>
                <Text style={styles.submissionTableData}>Rs. {currentFees.inst1}</Text>
              </View>
              <View style={styles.submissionTableRow}>
                <Text style={styles.submissionTableData}>Installment 2</Text>
                <Text style={styles.submissionTableData}>_________________</Text>
                <Text style={styles.submissionTableData}>Rs. {currentFees.inst2}</Text>
              </View>
            </View>

            <Text style={{ fontSize: 9, marginTop: 6, fontFamily: 'Times-Bold', textAlign: 'center' }}>
              Note: Uniform/Books/Exam Fees are not Included. Admission will be finalized only after submission of all documents & full payment of fees.
            </Text>
          </>
        )}

        {/* Office Use Section */}
        <View style={styles.officeUse}>
          <Text style={styles.officeTitle}>For office use only</Text>
          <View style={{ height: 20, marginTop: 6 }}></View>
          <View style={{ borderTopWidth: 1, borderTopColor: '#999', paddingTop: 6 }}>
            <View style={styles.officeRow}>
              <Text style={styles.officeField}>Date: _____________</Text>
              <Text style={styles.officeField}>Particular: _____________</Text>
              <Text style={styles.officeField}>Remark: _____________</Text>
            </View>
            <Text style={{ ...styles.officeField, marginTop: 10, textAlign: 'right' }}>
              Name, Designation & Signature with Stamp
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SeniorAdmissionPDF;