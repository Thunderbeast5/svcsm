import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Import your logo - Update this path to match your project structure
import logo from '../../assets/logo-name.png'; 

const styles = StyleSheet.create({
  page: { 
    padding: 25, 
    fontSize: 9, 
    fontFamily: 'Helvetica',
    lineHeight: 1.5
  },
  
  // Header with Logo
  header: { 
    borderBottomWidth: 2, 
    borderBottomColor: '#8B0000', 
    paddingBottom: 10, 
    marginBottom: 15, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoSection: { 
    width: '75%', 
    paddingRight: 10
  },
  logoImage: { 
    width: '100%', 
    height: 'auto', 
    objectFit: 'contain' 
  },
  headerRight: { 
    width: '25%', 
    alignItems: 'center' 
  },

  // Typography
  formTitle: { 
    marginTop: 8, 
    fontSize: 11, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formFees: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 3,
    fontWeight: 'bold'
  },
  contactInfo: { 
    fontSize: 8, 
    color: '#333',
    textAlign: 'center',
    marginTop: 5
  },
  
  // Photo Box
  photoBox: { 
    width: 85, 
    height: 100, 
    borderWidth: 1.5, 
    borderColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f9f9f9'
  },
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  appNoText: {
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  // Course Selection Row
  courseRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  
  // Form Sections
  sectionTitle: { 
    backgroundColor: '#e8e8e8', 
    padding: 5, 
    fontSize: 10, 
    fontWeight: 'bold', 
    marginTop: 12, 
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  
  // Form Fields
  row: { 
    flexDirection: 'row', 
    marginBottom: 6,
    alignItems: 'flex-start',
    minHeight: 18
  },
  col: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  label: { 
    fontSize: 9, 
    fontWeight: 'bold',
    marginRight: 5
  },
  value: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#999', 
    flex: 1, 
    paddingLeft: 4,
    paddingBottom: 3,
    paddingTop: 1,
    fontSize: 9,
    minHeight: 14
  },
  
  // Checkboxes
  checkbox: { 
    width: 9, 
    height: 9, 
    borderWidth: 1, 
    borderColor: '#000', 
    marginRight: 3,
    marginLeft: 5
  },
  checkedBox: { 
    width: 9, 
    height: 9, 
    backgroundColor: '#000', 
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 3,
    marginLeft: 5
  },
  checkboxLabel: {
    fontSize: 9,
    marginRight: 8
  },
  
  // Tables
  table: { 
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 6,
    marginBottom: 6
  },
  tableRow: { 
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  tableColHeader: { 
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 4,
    backgroundColor: '#e8e8e8',
    fontWeight: 'bold',
    fontSize: 8.5,
    textAlign: 'center'
  },
  tableCol: { 
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 4,
    fontSize: 8,
    textAlign: 'center'
  },
  tableColLast: {
    flex: 1,
    padding: 4,
    fontSize: 8,
    textAlign: 'center'
  },

  // Declaration Section
  declarationSection: { 
    marginTop: 12,
    borderTopWidth: 2,
    borderTopColor: '#000',
    paddingTop: 10
  },
  declTitle: { 
    fontSize: 11, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 8,
    textDecoration: 'underline'
  },
  declText: { 
    fontSize: 7.5, 
    textAlign: 'justify', 
    marginBottom: 3,
    lineHeight: 1.3
  },
  declPoint: {
    fontSize: 7.5,
    marginBottom: 2,
    lineHeight: 1.3,
    paddingLeft: 10
  },
  
  // Signature Section
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingTop: 8
  },
  signBox: {
    width: '45%',
    alignItems: 'center'
  },
  signLine: {
    borderTopWidth: 1,
    borderTopColor: '#000',
    width: '100%',
    paddingTop: 4,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold'
  },
  dateText: {
    fontSize: 7.5,
    marginTop: 2,
    textAlign: 'center'
  },

  // Office Use Section
  officeUse: {
    marginTop: 15,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#666',
    padding: 8,
    backgroundColor: '#f9f9f9'
  },
  officeTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase'
  },
  officeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  officeField: {
    fontSize: 7.5
  },

  // Documents Required Box
  docsBox: {
    marginTop: 12,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fffbf0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 3
  },
  docsTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 6,
    textDecoration: 'underline'
  },
  docItem: {
    fontSize: 8,
    marginBottom: 3,
    paddingLeft: 5,
    lineHeight: 1.4
  }
});

// Checkbox Component
const Checkbox = ({ label, checked }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={checked ? styles.checkedBox : styles.checkbox} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </View>
);

const JuniorAdmissionPDF = ({ data }) => {
  // Format full name
  const fullName = `${data.surname || ''} ${data.middleName || ''} ${data.fathersName || ''}`.trim().toUpperCase();
  const dobFormatted = `${data.dobDate || '__'}/${data.dobMonth || '__'}/${data.dobYear || '____'}`;
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          {/* Logo with full branding */}
          <View style={styles.logoSection}>
            {logo && <Image src={logo} style={styles.logoImage} />}
          </View>

          {/* Photo Box */}
          <View style={styles.headerRight}>
            <View style={styles.photoBox}>
              {data.photoData ? (
                <Image src={data.photoData} style={styles.photoImage} />
              ) : (
                <Text style={{ fontSize: 8, color: '#999', textAlign: 'center' }}>Self{'\n'}Attested{'\n'}Photo</Text>
              )}
            </View>
            <Text style={styles.appNoText}>
              Application Form No.{'\n'}{data.appNo || '________'}
            </Text>
          </View>
        </View>

        {/* Additional Info Below Header */}
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.formTitle}>Admission Form: 2026-27</Text>
          <Text style={styles.formFees}>Form Fees: Rs. 100</Text>
          <Text style={styles.contactInfo}>
            ☎ 82086 65658 | ✉ swamivivekanandainstitute2021@gmail.com
          </Text>
        </View>

        {/* COURSE SELECTION */}
        <View style={styles.courseRow}>
          <Text style={styles.label}>Course:</Text>
          <Checkbox label="11th" checked={data.standard === '11th'} />
          <Checkbox label="12th" checked={data.standard === '12th'} />
          
          <Text style={{ ...styles.label, marginLeft: 15 }}>State Board:</Text>
          <Checkbox label="State Board" checked={data.board === 'State Board'} />
          <Checkbox label="CET" checked={data.board === 'CET'} />
          <Checkbox label="JEE" checked={data.board === 'JEE'} />
          
          <Text style={{ ...styles.label, marginLeft: 15 }}>Stream:</Text>
          <Checkbox label="Arts" checked={data.stream === 'Arts'} />
          <Checkbox label="Commerce" checked={data.stream === 'Commerce'} />
          <Checkbox label="Science" checked={data.stream === 'Science'} />
        </View>

        {/* SECTION 1: FULL NAME */}
        <Text style={styles.sectionTitle}>1. A) Full Name of Candidate: Mr. / Miss. (In Block Letters)</Text>
        <View style={styles.row}>
          <View style={{ width: '33%', paddingRight: 5 }}>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>(Surname)</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#999', minHeight: 16, paddingBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>{data.surname || ''}</Text>
            </View>
          </View>
          <View style={{ width: '33%', paddingHorizontal: 5 }}>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>(Middle Name)</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#999', minHeight: 16, paddingBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>{data.middleName || ''}</Text>
            </View>
          </View>
          <View style={{ width: '34%', paddingLeft: 5 }}>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>(Father's / Husband's Name)</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#999', minHeight: 16, paddingBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>{data.fathersName || ''}</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) (In Devnagari Script):</Text>
          <Text style={styles.value}>{data.nameDevnagari || ''}</Text>
        </View>

        <View style={styles.row}>
          <View style={{ width: '60%', paddingRight: 10 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(C) Mother's Name:</Text>
              <Text style={styles.value}>{data.motherName || ''}</Text>
            </View>
          </View>
          <View style={{ width: '40%' }}>
            <View style={styles.col}>
              <Text style={styles.label}>(D) Gender:</Text>
              <Checkbox label="Male" checked={data.gender === 'Male'} />
              <Checkbox label="Female" checked={data.gender === 'Female'} />
            </View>
          </View>
        </View>

        {/* SECTION 2: FATHER/GUARDIAN */}
        <Text style={styles.sectionTitle}>2. A) Full Name of Father:</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.fullFatherName || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) Full Name of Guardian (For non-localities):</Text>
          <Text style={styles.value}>{data.guardianName || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(C) Relationship of Guardian with the Candidate:</Text>
          <Text style={styles.value}>{data.guardianRelation || ''}</Text>
        </View>

        {/* SECTION 3: PERMANENT ADDRESS */}
        <Text style={styles.sectionTitle}>3. Permanent Address:</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.permanentAddress || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ph:</Text>
          <Text style={styles.value}>{data.permanentPhone || ''}</Text>
        </View>

        {/* SECTION 4: PARENTS/GUARDIAN INFO */}
        <Text style={styles.sectionTitle}>4. Parents / Guardian's Information</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>(A) Occupation & Designation:</Text>
          <Text style={styles.value}>{data.parentOccupation || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) Office Address:</Text>
          <Text style={styles.value}>{data.officeAddress || ''}</Text>
        </View>

        <View style={styles.row}>
          <View style={{ width: '50%', paddingRight: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(C) Parents/Guardian's Mobile No.:</Text>
              <Text style={styles.value}>{data.parentMobile || ''}</Text>
            </View>
          </View>
          <View style={{ width: '50%', paddingLeft: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(D) Candidate Mobile No.:</Text>
              <Text style={styles.value}>{data.studentMobile || ''}</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ width: '50%', paddingRight: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(E) Telephone No. (With STD Code):</Text>
              <Text style={styles.value}>{data.telephoneNo || ''}</Text>
            </View>
          </View>
          <View style={{ width: '50%', paddingLeft: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(F) E-Mail ID:</Text>
              <Text style={styles.value}>{data.email || ''}</Text>
            </View>
          </View>
        </View>

        {/* SECTION 5: CORRESPONDENCE ADDRESS */}
        <Text style={styles.sectionTitle}>5. Full Address of Correspondence:</Text>
        <View style={styles.row}>
          <Text style={styles.value}>{data.correspondenceAddress || ''}</Text>
        </View>

        {/* SECTION 6: DATE OF BIRTH */}
        <Text style={styles.sectionTitle}>6. Date of Birth:</Text>
        <View style={styles.row}>
          <View style={{ width: '25%', paddingRight: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(i) Date:</Text>
              <Text style={styles.value}>{data.dobDate || ''}</Text>
            </View>
          </View>
          <View style={{ width: '35%', paddingHorizontal: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(ii) Month:</Text>
              <Text style={styles.value}>{data.dobMonth || ''}</Text>
            </View>
          </View>
          <View style={{ width: '40%', paddingLeft: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>(iii) Year:</Text>
              <Text style={styles.value}>{data.dobYear || ''}</Text>
            </View>
          </View>
        </View>

        {/* SECTION 7: PLACE OF BIRTH */}
        <Text style={styles.sectionTitle}>7. Place of Birth:</Text>
        <View style={styles.row}>
          <View style={{ width: '50%', paddingRight: 5 }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#999', minHeight: 16, paddingBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>{data.birthPlace || ''}</Text>
            </View>
          </View>
          <View style={{ width: '50%', paddingLeft: 5 }}>
            <View style={styles.col}>
              <Text style={styles.label}>State:</Text>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#999', flex: 1, minHeight: 16, paddingBottom: 3 }}>
                <Text style={{ fontSize: 9 }}>{data.birthState || ''}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* SECTION 8: CASTE */}
        <Text style={styles.sectionTitle}>8. Cast:</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
          <Checkbox label="SC" checked={data.category === 'SC'} />
          <Checkbox label="ST" checked={data.category === 'ST'} />
          <Checkbox label="DT-VJ" checked={data.category === 'DT-VJ'} />
          <Checkbox label="NT-B" checked={data.category === 'NT-B'} />
          <Checkbox label="NT-C" checked={data.category === 'NT-C'} />
          <Checkbox label="NT-D" checked={data.category === 'NT-D'} />
          <Checkbox label="OBC" checked={data.category === 'OBC'} />
          <Checkbox label="SBC" checked={data.category === 'SBC'} />
          <Checkbox label="OPEN" checked={data.category === 'OPEN'} />
          <Checkbox label="General" checked={data.category === 'General'} />
        </View>

        {/* SECTION 9: PREVIOUS YEAR DETAILS */}
        <Text style={styles.sectionTitle}>9. Previous year details:</Text>
        
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Art/Com/Sci.</Text>
            <Text style={styles.tableColHeader}>Year of{'\n'}Passing</Text>
            <Text style={styles.tableColHeader}>Marks obtained/{'\n'}Total Marks</Text>
            <Text style={styles.tableColHeader}>Percentage</Text>
            <Text style={{ ...styles.tableColHeader, borderRightWidth: 0 }}>Board</Text>
          </View>

          {/* 10th Details */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{data.ssc_stream || 'Std. X (10th)'}</Text>
            <Text style={styles.tableCol}>{data.sscYear || ''}</Text>
            <Text style={styles.tableCol}>
              {data.sscMarksObtained || ''} / {data.sscTotalMarks || ''}
            </Text>
            <Text style={styles.tableCol}>{data.sscPercentage || ''}</Text>
            <Text style={styles.tableColLast}>{data.sscBoard || ''}</Text>
          </View>

          {/* 11th Details */}
          <View style={{ ...styles.tableRow, borderBottomWidth: 0 }}>
            <Text style={styles.tableCol}>{data.hsc_stream || 'Std. XI (11th)'}</Text>
            <Text style={styles.tableCol}>{data.hscYear || ''}</Text>
            <Text style={styles.tableCol}>
              {data.hscMarksObtained || ''} {data.hscTotalMarks ? `/ ${data.hscTotalMarks}` : ''}
            </Text>
            <Text style={styles.tableCol}>{data.hscPercentage || ''}</Text>
            <Text style={styles.tableColLast}>{data.hscBoard || ''}</Text>
          </View>
        </View>

        {/* DOCUMENTS REQUIRED */}
        <View style={styles.docsBox}>
          <Text style={styles.docsTitle}>• DOCUMENTS REQUIRED AT THE TIME OF ADMISSION (Original + 2 Xerox Copies)</Text>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.docItem}>1. School / College Leaving Certificate (Duly counter signed by Principal/College Authorities)</Text>
            <Text style={styles.docItem}>2. Migration Certificate (If necessary)</Text>
            <Text style={styles.docItem}>3. Previous Year Marksheet (SSC/11th)</Text>
            <Text style={styles.docItem}>4. Adhar Card</Text>
          </View>
        </View>

        <View style={{ marginTop: 8, marginBottom: 5 }}>
          <Text style={{ fontSize: 8, textAlign: 'justify', lineHeight: 1.3 }}>
            I hereby agree that, I have attached copies of only mentioned documents to my application and understand that my application will be approved on the basis of above documents supplied by me at the time of submitting this application.
          </Text>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureRow}>
          <View style={styles.signBox}>
            <Text style={{ fontSize: 7.5, marginBottom: 2 }}>Date: ____ / ____ / ____</Text>
            <Text style={{ fontSize: 7.5, marginBottom: 2 }}>Place: _______________</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.signLine}>Signature of Applicant</Text>
          </View>
        </View>

        {/* PAGE BREAK FOR DECLARATION */}
        <View break style={{ marginTop: 20 }}>
          <Text style={styles.declTitle}>
            DECLARATION TO BE SIGNED BY THE CANDIDATE & PARENT / GUARDIAN AT THE TIME OF ADMISSION TO Institute
          </Text>

          <View style={{ marginBottom: 6 }}>
            <Text style={styles.declPoint}>
              1. I have read the Rules of Admission for the year 2025-26 and I have consulted my father / guardian and after understanding these rules, I have filled in the application form.
            </Text>
            <Text style={styles.declPoint}>
              2. The information given by me in this application is true to the best of my knowledge.
            </Text>
            <Text style={styles.declPoint}>
              3. I have not been debarred from appearing at any examination held by any Government or Statutory examination authority in India.
            </Text>
            <Text style={styles.declPoint}>
              4. I fully understand that I will be offered admission strictly on the basis of my merit and availability of seat.
            </Text>
            <Text style={styles.declPoint}>
              5. I hereby abide by all the Rules, Acts and Laws enforced by Government / College Principal / College Authorities of the Institute from time to time and I also hereby give an undertaking that as long as I am student of the College, I will do nothing either inside or outside the college / Institute/ Society against the existing rules, Acts. I am fully aware that this may result into disciplinary action against me as per the Rules, Act and Laws.
            </Text>
            <Text style={styles.declPoint}>
              6. The Institute will deal strictly with students who organize, assist or lead in strikes or any way found guilty of serious breach of discipline in or outside the College campus.
            </Text>
            <Text style={styles.declPoint}>
              7. I fully understand that the Principal / Management of the college will have full right to expel me from College for my infringement of the rules and conduct and discipline as per the understanding given above or involvement in any illegal activities.
            </Text>
            <Text style={styles.declPoint}>
              8. I know that my ward will not be permitted to appear for his/her college / university examination if he/she fails to satisfy the college authorities on any of the following counts:
            </Text>
            <Text style={{ fontSize: 7, paddingLeft: 20, marginBottom: 2 }}>
              • At least 75% attendance at lectures and practical
            </Text>
            <Text style={{ fontSize: 7, paddingLeft: 20, marginBottom: 2 }}>
              • Attendance and performance at the college examination / tutorials.
            </Text>
            <Text style={{ fontSize: 7, paddingLeft: 20, marginBottom: 2 }}>
              • Good and disciplined behaviour in the college premises
            </Text>
            <Text style={{ fontSize: 7, paddingLeft: 20, marginBottom: 2 }}>
              • Obedience of the instruction of teachers, staff and other college authorities
            </Text>
            <Text style={{ fontSize: 7, paddingLeft: 20, marginBottom: 2 }}>
              • Payment of college fees as prescribed and on time.
            </Text>
            <Text style={styles.declPoint}>
              9. I have noted that it may not be possible for the college authorities to inform me about the progress of my ward from time to time. I shall therefore keep myself in touch with my ward and the teachers concerned about his/her attendance of lectures, practical and tutorials.
            </Text>
            <Text style={styles.declPoint}>
              10. I am aware that in any case my ward desires to leave the college for any reason, I shall inform the college authorities in writing so as to enable him/her to cancel the admission. (only within 15 days)
            </Text>
            <Text style={styles.declPoint}>
              11. I hold myself responsible for full payment of the fees at the time of the admission. In case any dues are not cleared within the stipulated time declared/notified by the head of the institution, the college can take the necessary action against me.
            </Text>
            <Text style={styles.declPoint}>
              12. I am aware that use of mobile phones is prohibited wherever academic activity is going on (Classroom, Laboratories and Library) & shall abide by the same.
            </Text>
            <Text style={styles.declPoint}>
              13. The student should carry identity card regularly and it should be produced when demanded by the authority of the college or institute.
            </Text>
            <Text style={styles.declPoint}>
              14. About Fees Submission: (Uniform/Books/ Exam Fees are not Included)
            </Text>
          </View>

          <View style={{ marginTop: 8, borderWidth: 1, borderColor: '#ccc', padding: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
              <Text style={{ fontSize: 8, fontWeight: 'bold' }}>Submission Mode (Non-refundable)</Text>
              <Text style={{ fontSize: 8, fontWeight: 'bold' }}>Dates</Text>
              <Text style={{ fontSize: 8, fontWeight: 'bold' }}>Fees Amount</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
              <Text style={{ fontSize: 7.5 }}>One Time</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
              <Text style={{ fontSize: 7.5 }}>Two Instalments</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 7.5 }}>Multi Instalments</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
              <Text style={{ fontSize: 7.5 }}>_________________</Text>
            </View>
          </View>

          <Text style={{ fontSize: 7.5, marginTop: 6, fontWeight: 'bold', textAlign: 'center' }}>
            Note: Admission will be finalized only after submission of all documents & full payment of fees.
          </Text>

          {/* Candidate & Parent Signatures */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 7.5, marginBottom: 2 }}>Date: ____ / ____ / ____</Text>
              <Text style={{ fontSize: 7.5, marginBottom: 2 }}>Place: _______________</Text>
              <Text style={styles.signLine}>(Signature of Parent/Guardian)</Text>
            </View>
            <View style={{ width: '48%', alignItems: 'flex-end' }}>
              <Text style={{ ...styles.signLine, marginTop: 20 }}>(Signature of Candidate)</Text>
            </View>
          </View>

          {/* Parent Declaration */}
          <View style={{ marginTop: 20, borderTopWidth: 1, paddingTop: 10 }}>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 5 }}>I hereby declare that:</Text>
            <Text style={{ fontSize: 7.5, marginBottom: 2 }}>
              1. The particulars furnished by my ward in this application form are correct to the best of my knowledge.
            </Text>
            <Text style={{ fontSize: 7.5, marginBottom: 2 }}>
              2. I undertake and abide myself to pay on behalf of my ward such fees, charges etc. by due date which the college may declare from time to time. In the event of failure on my part and / or my ward the Principal of the College may take such action against my ward, as he may deem fit.
            </Text>
            
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
              <View>
                <Text style={{ fontSize: 7.5, marginBottom: 2 }}>Date: ____ / ____ / ____</Text>
                <Text style={styles.signLine}>(Signature of Parent / Guardian)</Text>
              </View>
            </View>
          </View>

          {/* Office Use Section */}
          <View style={styles.officeUse}>
            <Text style={styles.officeTitle}>For office use only</Text>
            <View style={{ height: 30, marginTop: 5 }}></View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#999', paddingTop: 6 }}>
              <View style={styles.officeRow}>
                <Text style={styles.officeField}>Date: _____________</Text>
                <Text style={styles.officeField}>Particular: _____________</Text>
                <Text style={styles.officeField}>Remark: _____________</Text>
              </View>
              <Text style={{ ...styles.officeField, marginTop: 15, textAlign: 'right' }}>
                Name, Designation & Signature with Stamp
              </Text>
            </View>
          </View>

          {/* Footer Contact Info */}
          <View style={{ marginTop: 15, padding: 8, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#ddd' }}>
            <Text style={{ fontSize: 8, fontWeight: 'bold', textAlign: 'center', marginBottom: 3 }}>
              Swami Vivekananda Institute of Arts, Commerce, Science & Management
            </Text>
            <Text style={{ fontSize: 7.5, textAlign: 'center', marginBottom: 2 }}>
              Near Post Office (SBI Bank), Chatrapati Shivaji Maharaj Nagar,
            </Text>
            <Text style={{ fontSize: 7.5, textAlign: 'center', marginBottom: 2 }}>
              Pimpalgaon Baswant. Niphad, Nashik. 422 209.
            </Text>
            <Text style={{ fontSize: 7.5, textAlign: 'center' }}>
              ☎ 82086 65658 | ✉ swamivivekanandainstitute2021@gmail.com
            </Text>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default JuniorAdmissionPDF;