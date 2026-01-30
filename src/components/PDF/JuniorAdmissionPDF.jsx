import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Import your logo if available
// import logo from '../../assets/logo-name.png'; 

const styles = StyleSheet.create({
  page: { 
    padding: 30, 
    fontSize: 11, 
    fontFamily: 'Times-Roman',
    lineHeight: 1.6
  },
  
  // Header with Logo
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
    fontSize: 16,
    fontFamily: 'Times-Bold',
    textAlign: 'center',
    marginBottom: 5
  },
  instituteSubtitle: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 3
  },
  contactInfo: { 
    fontSize: 9, 
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
  appNoText: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5
  },

  formTitle: { 
    marginTop: 8, 
    fontSize: 13, 
    fontFamily: 'Times-Bold',
    textAlign: 'center',
    marginBottom: 4
  },
  formFees: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Times-Bold'
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
    backgroundColor: '#f5f5f5'
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14
  },
  
  // Form Sections
  sectionTitle: { 
    backgroundColor: '#e8e8e8', 
    padding: 6, 
    fontSize: 12, 
    fontFamily: 'Times-Bold', 
    marginTop: 15, 
    marginBottom: 10,
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
    fontSize: 11, 
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
    fontSize: 11,
    minHeight: 16
  },
  valueFixed: {
    borderBottomWidth: 1, 
    borderBottomColor: '#666', 
    paddingLeft: 4,
    paddingBottom: 3,
    paddingTop: 2,
    fontSize: 11,
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
    fontSize: 11,
    marginRight: 8
  },

  // Digit Boxes for Mobile/Date
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
    fontSize: 11,
    fontFamily: 'Times-Bold'
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
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  tableCol: { 
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  tableColLast: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },

  // Documents Box
  docsBox: {
    borderWidth: 1.5,
    borderColor: '#666',
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#d3d3d3'
  },
  docsTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    marginBottom: 5
  },
  docItem: {
    fontSize: 10,
    marginBottom: 3,
    paddingLeft: 5
  },

  // Signature Section
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10
  },
  signBox: {
    width: '48%'
  },
  signLine: {
    marginTop: 20,
    paddingTop: 4,
    fontSize: 10,
    textAlign: 'center'
  },

  // Declaration Section
  declarationSection: { 
    marginTop: 15,
    paddingTop: 12
  },
  declTitle: { 
    fontSize: 13, 
    fontFamily: 'Times-Bold', 
    textAlign: 'center', 
    marginBottom: 10,
    textDecoration: 'underline'
  },
  declPoint: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'justify',
    lineHeight: 1.5
  },

  // Office Use Section
  officeUse: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    backgroundColor: '#f9f9f9'
  },
  officeTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    marginBottom: 6
  },
  officeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  officeField: {
    fontSize: 10
  }
});

const JuniorAdmissionPDF = ({ data }) => {
  // Helper function to render digit boxes
  const renderDigitBoxes = (prefix, count) => {
    const digits = [];
    for (let i = 0; i < count; i++) {
      const value = data[`${prefix}${i}`] || '';
      digits.push(
        <View key={i} style={styles.digitBox}>
          <Text>{value}</Text>
        </View>
      );
    }
    return <View style={styles.digitBoxContainer}>{digits}</View>;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoSection}>
            {/* If you have logo, uncomment this: */}
            {/* <Image src={logo} style={styles.logoImage} /> */}
            <Text style={styles.instituteName}>
              Swami Vivekananda Junior Inst. of Arts, Commerce & Science, Pimpalgaon Baswant.
            </Text>
            <Text style={styles.instituteSubtitle}>
              Admission Form: 2026-27
            </Text>
            <Text style={styles.contactInfo}>
              ☎ 82086 65658 | ✉ swamivivekanandainstitute2021@gmail.com
            </Text>
          </View>
          
          <View style={styles.headerRight}>
            <View style={styles.photoBox}>
              {data.photoData ? (
                <Image src={data.photoData} style={styles.photoImage} />
              ) : (
                <Text style={styles.photoText}>Self Attested Photo</Text>
              )}
            </View>
            <View style={styles.appNoText}>
              <Text>Application Form No.</Text>
              <Text style={{ marginTop: 2 }}>{data.appNo || '________'}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.formTitle}>
          Swami Vivekananda Institute of Arts, Commerce & Science, Pimpalgaon Baswant, Nashik
        </Text>
        <Text style={styles.formFees}>Form Fees: Rs. 100/-</Text>

        {/* Course Selection */}
        <View style={styles.courseRow}>
          <Text style={{ fontSize: 11, fontFamily: 'Times-Bold', marginRight: 10 }}>Course:</Text>
          
          <View style={styles.courseItem}>
            <View style={data.standard === '11th' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>11th</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.standard === '12th' ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>12th</Text>
          </View>

          <Text style={{ fontSize: 11, fontFamily: 'Times-Bold', marginLeft: 12, marginRight: 5 }}>Board:</Text>
          <View style={styles.courseItem}>
            <View style={data.boardStateBoard ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>State Board</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.boardCET ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>CET</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.boardJEE ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>JEE</Text>
          </View>

          <Text style={{ fontSize: 11, fontFamily: 'Times-Bold', marginLeft: 12, marginRight: 5 }}>Stream:</Text>
          <View style={styles.courseItem}>
            <View style={data.streamArts ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Arts</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.streamCommerce ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Commerce</Text>
          </View>
          <View style={styles.courseItem}>
            <View style={data.streamScience ? styles.checkedBox : styles.checkbox} />
            <Text style={styles.checkboxLabel}>Science</Text>
          </View>
        </View>

        {/* Section 1: Personal Information */}
        <Text style={styles.sectionTitle}>1. PERSONAL INFORMATION</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>A) Full Name of Candidate: Mr./Miss.</Text>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, marginRight: 10 }}>
            <Text style={{ fontSize: 9, marginRight: 4 }}>(Surname)</Text>
            <Text style={styles.value}>{data.surname || ''}</Text>
          </View>
          <View style={{ ...styles.col, marginRight: 10 }}>
            <Text style={{ fontSize: 9, marginRight: 4 }}>(Middle Name)</Text>
            <Text style={styles.value}>{data.middleName || ''}</Text>
          </View>
          <View style={styles.col}>
            <Text style={{ fontSize: 9, marginRight: 4 }}>(Father's Name)</Text>
            <Text style={styles.value}>{data.fathersName || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) (In Devanagari Script):</Text>
          <Text style={styles.value}>{data.nameDevanagari || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(C) Mother's Name:</Text>
          <Text style={styles.value}>{data.motherName || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(D) Gender:</Text>
          <View style={data.gender === 'Male' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>Male</Text>
          <View style={data.gender === 'Female' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>Female</Text>
        </View>

        {/* Section 2: Father and Guardian Information */}
        <Text style={styles.sectionTitle}>2. FATHER & GUARDIAN INFORMATION</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>(A) Full Name of Father:</Text>
          <Text style={styles.value}>{data.fullNameFather || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) Full Name of Guardian (For non-localities):</Text>
          <Text style={styles.value}>{data.guardianName || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(C) Relationship of Guardian with the Candidate:</Text>
          <Text style={styles.value}>{data.guardianRelation || ''}</Text>
        </View>

        {/* Section 3: Address */}
        <Text style={styles.sectionTitle}>3. ADDRESS & CONTACT INFORMATION</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Permanent Address:</Text>
          <Text style={styles.value}>{data.permanentAddress || ''}</Text>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.col, marginRight: 10 }}>
            <Text style={styles.label}>(A) Occupation & Designation:</Text>
            <Text style={styles.value}>{data.occupation || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(B) Office Address:</Text>
          <Text style={styles.value}>{data.officeAddress || ''}</Text>
        </View>

        <View style={styles.row}>
          <View style={{ width: '48%', marginRight: 15 }}>
            <Text style={{ ...styles.label, marginBottom: 5 }}>(C) Parent/Guardian's Mobile No.:</Text>
            {renderDigitBoxes('parentMobile', 10)}
          </View>
          <View style={{ width: '48%' }}>
            <Text style={{ ...styles.label, marginBottom: 5 }}>(D) Candidate Mobile No.:</Text>
            {renderDigitBoxes('candidateMobile', 10)}
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.col, marginRight: 10 }}>
            <Text style={styles.label}>(E) Telephone No. (With STD Code):</Text>
            <Text style={styles.value}>{data.telephone || ''}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>(F) E-Mail ID:</Text>
          <Text style={styles.value}>{data.email || ''}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Full Address of Correspondence:</Text>
          <Text style={styles.value}>{data.correspondenceAddress || ''}</Text>
        </View>

        {/* Section 4: Birth Details */}
        <Text style={styles.sectionTitle}>4. DATE OF BIRTH & PLACE</Text>
        
        <View style={styles.row}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <Text style={{ ...styles.label, marginBottom: 5, marginRight: 6 }}>(i) Date:</Text>
            {renderDigitBoxes('birthDate', 2)}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <Text style={{ ...styles.label, marginBottom: 5, marginRight: 6 }}>(ii) Month:</Text>
            {renderDigitBoxes('birthMonth', 2)}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ ...styles.label, marginBottom: 5, marginRight: 6 }}>(iii) Year:</Text>
            {renderDigitBoxes('birthYear', 4)}
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.col, marginRight: 10 }}>
            <Text style={styles.label}>Place of Birth:</Text>
            <Text style={styles.value}>{data.birthPlace || ''}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>State:</Text>
            <Text style={styles.value}>{data.birthState || ''}</Text>
          </View>
        </View>

        {/* Section 5: Caste */}
        <Text style={styles.sectionTitle}>5. CASTE CATEGORY</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Cast:</Text>
          <View style={data.caste === 'SC' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>SC</Text>
          <View style={data.caste === 'ST' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>ST</Text>
          <View style={data.caste === 'DT-VJ' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>DT-VJ</Text>
          <View style={data.caste === 'NT-B' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>NT-B</Text>
          <View style={data.caste === 'NT-C' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>NT-C</Text>
          <View style={data.caste === 'NT-D' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>NT-D</Text>
        </View>
        <View style={styles.row}>
          <View style={data.caste === 'OBC' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>OBC</Text>
          <View style={data.caste === 'SBC' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>SBC</Text>
          <View style={data.caste === 'OPEN' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>OPEN</Text>
          <View style={data.caste === 'General' ? styles.checkedBox : styles.checkbox} />
          <Text style={styles.checkboxLabel}>General</Text>
        </View>

        {/* Section 6: Previous Year Details */}
        <Text style={styles.sectionTitle}>6. PREVIOUS YEAR DETAILS</Text>
        
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Class</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Art/Com/Sci</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Year of Passing</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Marks Obtained/Total Marks</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Percentage</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Board</Text>
            </View>
          </View>

          {/* SSC Row */}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text>Std. X (10th)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{data.sscStream || ''}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{data.sscYear || ''}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>
                {data.sscMarksObtained || ''} {data.sscTotalMarks ? `/ ${data.sscTotalMarks}` : ''}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text>{data.sscPercentage || ''}</Text>
            </View>
            <View style={styles.tableColLast}>
              <Text>{data.sscBoard || ''}</Text>
            </View>
          </View>

          {/* HSC Row - Only if 12th standard */}
          {data.standard === '12th' && (
            <View style={{ ...styles.tableRow, borderBottomWidth: 0 }}>
              <View style={styles.tableCol}>
                <Text>Std. XI (11th)</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{data.hscStream || ''}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{data.hscYear || ''}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>
                  {data.hscMarksObtained || ''} {data.hscTotalMarks ? `/ ${data.hscTotalMarks}` : ''}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{data.hscPercentage || ''}</Text>
              </View>
              <View style={styles.tableColLast}>
                <Text>{data.hscBoard || ''}</Text>
              </View>
            </View>
          )}
        </View>

        {/* DOCUMENTS REQUIRED */}
        <View style={styles.docsBox}>
          <Text style={styles.docsTitle}>• DOCUMENTS REQUIRED AT THE TIME OF ADMISSION (Original + 2 Xerox Copies)</Text>
          <View style={{ marginTop: 6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <View style={data.docLeavingCert ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.docItem}>1. School/College Leaving Certificate (Duly counter signed by Principal/College Authorities)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <View style={data.docMigration ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.docItem}>2. Migration Certificate (If necessary)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
              <View style={data.docMarksheet ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.docItem}>3. Previous Year Marksheet (SSC/11th)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={data.docAadhar ? styles.checkedBox : styles.checkbox} />
              <Text style={styles.docItem}>4. Aadhar Card</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 8 }}>
          <Text style={{ fontSize: 10, textAlign: 'justify', lineHeight: 1.5 }}>
            I hereby agree that, I have attached copies of only mentioned documents to my application and understand that my application will be approved on the basis of above documents supplied by me at the time of submitting this application.
          </Text>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureRow}>
          <View style={styles.signBox}>
            <Text style={{ fontSize: 10, marginBottom: 3 }}>Date: ____ / ____ / ____</Text>
            <Text style={{ fontSize: 10, marginBottom: 3 }}>Place: _______________</Text>
          </View>
          <View style={styles.signBox}>
            <Text style={styles.signLine}>Signature of Applicant</Text>
          </View>
        </View>

        {/* PAGE BREAK FOR DECLARATION - PAGE 3 */}
        <View break style={{ marginTop: 20 }}>
          <Text style={styles.declTitle}>
            DECLARATION TO BE SIGNED BY THE CANDIDATE & PARENT/GUARDIAN AT THE TIME OF ADMISSION TO Institute
          </Text>

          <View style={{ marginBottom: 8 }}>
            <Text style={styles.declPoint}>
              1. I have read the Rules of Admission for the year 2026-27 and I have consulted my father/guardian and after understanding these rules, I have filled in the application form.
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
              5. I hereby abide by all the Rules, Acts and Laws enforced by Government/College Principal/College Authorities of the Institute from time to time and I also hereby give an undertaking that as long as I am student of the College, I will do nothing either inside or outside the college/Institute/Society against the existing rules, Acts. I am fully aware that this may result into disciplinary action against me as per the Rules, Act and Laws.
            </Text>
            <Text style={styles.declPoint}>
              6. The Institute will deal strictly with students who organize, assist or lead in strikes or any way found guilty of serious breach of discipline in or outside the College campus.
            </Text>
            <Text style={styles.declPoint}>
              7. I fully understand that the Principal/Management of the college will have full right to expel me from College for my infringement of the rules and conduct and discipline as per the understanding given above or involvement in any illegal activities.
            </Text>
            <Text style={styles.declPoint}>
              8. I know that my ward will not be permitted to appear for his/her college/university examination if he/she fails to satisfy the college authorities on any of the following counts:
            </Text>
            <Text style={{ fontSize: 9, paddingLeft: 20, marginBottom: 3 }}>
              • At least 75% attendance at lectures and practical
            </Text>
            <Text style={{ fontSize: 9, paddingLeft: 20, marginBottom: 3 }}>
              • Attendance and performance at the college examination/tutorials
            </Text>
            <Text style={{ fontSize: 9, paddingLeft: 20, marginBottom: 3 }}>
              • Good and disciplined behaviour in the college premises
            </Text>
            <Text style={{ fontSize: 9, paddingLeft: 20, marginBottom: 3 }}>
              • Obedience of the instruction of teachers, staff and other college authorities
            </Text>
            <Text style={{ fontSize: 9, paddingLeft: 20, marginBottom: 3 }}>
              • Payment of college fees as prescribed and on time
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
              14. About Fees Submission: (Uniform/Books/Exam Fees are not Included)
            </Text>
          </View>

          <View style={{ marginTop: 10, borderWidth: 1, borderColor: '#999', padding: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={{ fontSize: 10, fontFamily: 'Times-Bold' }}>Submission Mode (Non-refundable)</Text>
              <Text style={{ fontSize: 10, fontFamily: 'Times-Bold' }}>Dates</Text>
              <Text style={{ fontSize: 10, fontFamily: 'Times-Bold' }}>Fees Amount</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>One Time</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
              <Text style={{ fontSize: 9 }}>Two Instalments</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 9 }}>Multi Instalments</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
              <Text style={{ fontSize: 9 }}>_________________</Text>
            </View>
          </View>

          <Text style={{ fontSize: 10, marginTop: 8, fontFamily: 'Times-Bold', textAlign: 'center' }}>
            Note: Admission will be finalized only after submission of all documents & full payment of fees.
          </Text>

          {/* Candidate & Parent Signatures */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 10, marginBottom: 3 }}>Date: ____ / ____ / ____</Text>
              <Text style={{ fontSize: 10, marginBottom: 3 }}>Place: _______________</Text>
              <Text style={styles.signLine}>(Signature of Parent/Guardian)</Text>
            </View>
            <View style={{ width: '48%', alignItems: 'flex-end' }}>
              <Text style={{ ...styles.signLine, marginTop: 20 }}>(Signature of Candidate)</Text>
            </View>
          </View>

          {/* Parent Declaration */}
          <View style={{ marginTop: 25, borderTopWidth: 1, paddingTop: 12 }}>
            <Text style={{ fontSize: 11, fontFamily: 'Times-Bold', marginBottom: 6 }}>I hereby declare that:</Text>
            <Text style={{ fontSize: 10, marginBottom: 4, lineHeight: 1.5 }}>
              1. The particulars furnished by my ward in this application form are correct to the best of my knowledge.
            </Text>
            <Text style={{ fontSize: 10, marginBottom: 4, lineHeight: 1.5 }}>
              2. I undertake and abide myself to pay on behalf of my ward such fees, charges etc. by due date which the college may declare from time to time. In the event of failure on my part and/or my ward the Principal of the College may take such action against my ward, as he may deem fit.
            </Text>
            
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>
              <View>
                <Text style={{ fontSize: 10, marginBottom: 3 }}>Date: ____ / ____ / ____</Text>
                <Text style={styles.signLine}>(Signature of Parent/Guardian)</Text>
              </View>
            </View>
          </View>

          {/* Office Use Section */}
          <View style={styles.officeUse}>
            <Text style={styles.officeTitle}>For office use only</Text>
            <View style={{ height: 35, marginTop: 6 }}></View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#999', paddingTop: 8 }}>
              <View style={styles.officeRow}>
                <Text style={styles.officeField}>Date: _____________</Text>
                <Text style={styles.officeField}>Particular: _____________</Text>
                <Text style={styles.officeField}>Remark: _____________</Text>
              </View>
              <Text style={{ ...styles.officeField, marginTop: 18, textAlign: 'right' }}>
                Name, Designation & Signature with Stamp
              </Text>
            </View>
          </View>

          {/* Footer Contact Info */}
          <View style={{ marginTop: 18, padding: 10, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#ddd' }}>
            <Text style={{ fontSize: 10, fontFamily: 'Times-Bold', textAlign: 'center', marginBottom: 3 }}>
              Swami Vivekananda Institute of Arts, Commerce, Science & Management
            </Text>
            <Text style={{ fontSize: 9, textAlign: 'center', marginBottom: 2 }}>
              Near Post Office (SBI Bank), Chatrapati Shivaji Maharaj Nagar,
            </Text>
            <Text style={{ fontSize: 9, textAlign: 'center', marginBottom: 2 }}>
              Pimpalgaon Baswant. Niphad, Nashik. 422 209.
            </Text>
            <Text style={{ fontSize: 9, textAlign: 'center' }}>
              ☎ 82086 65658 | ✉ swamivivekanandainstitute2021@gmail.com
            </Text>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default JuniorAdmissionPDF;