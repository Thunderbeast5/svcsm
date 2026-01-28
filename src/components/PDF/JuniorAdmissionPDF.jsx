import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// IMPORT YOUR LOGO HERE (Ensure this path is correct)
import logo from '../../assets/logo-name.png'; 

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 9, fontFamily: 'Helvetica' },
  
  // Header Layout: Logo (15%) | Text (65%) | Photo (20%)
  header: { 
    borderBottomWidth: 2, 
    borderBottomColor: '#800000', 
    paddingBottom: 5, 
    marginBottom: 10, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoSection: { width: '15%', paddingRight: 10 },
  logoImage: { width: 60, height: 60, objectFit: 'contain' },
  headerLeft: { width: '65%' },
  headerRight: { width: '20%', alignItems: 'center' },

  // Typography
  title: { fontSize: 14, fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' },
  subTitle: { fontSize: 10, color: '#800000', marginBottom: 2 },
  address: { fontSize: 8, color: '#444' },
  
  // Form Styling
  sectionTitle: { backgroundColor: '#eee', padding: 3, fontSize: 10, fontWeight: 'bold', marginTop: 8, marginBottom: 4 },
  row: { flexDirection: 'row', marginBottom: 2 },
  col: { flexDirection: 'row', alignItems: 'center' },
  label: { width: 90, fontSize: 9, fontWeight: 'bold' },
  value: { borderBottomWidth: 1, borderBottomColor: '#ccc', flex: 1, paddingLeft: 2, height: 12 },
  
  // Specific Elements
  photoBox: { width: 80, height: 90, borderWidth: 1, borderColor: '#000', alignItems: 'center', justifyContent: 'center', marginBottom: 5 },
  checkbox: { width: 10, height: 10, borderWidth: 1, borderColor: '#000', marginRight: 4 },
  checkedBox: { width: 10, height: 10, backgroundColor: '#000', marginRight: 4 },
  
  // Tables
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, borderColor: '#000', marginTop: 5 },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableColHeader: { width: "25%", borderRightWidth: 1, borderBottomWidth: 1, padding: 4, backgroundColor: '#f0f0f0', fontWeight: 'bold' },
  tableCol: { width: "25%", borderRightWidth: 1, borderBottomWidth: 1, padding: 4 },

  // Declaration
  declarationSection: { marginTop: 10, borderTopWidth: 1, paddingTop: 10 },
  declTitle: { fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginBottom: 6 },
  declText: { fontSize: 8, textAlign: 'justify', marginBottom: 3, lineHeight: 1.2 },
  declFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  signLine: { borderTopWidth: 1, width: 150, textAlign: 'center', paddingTop: 4 }
});

// Helper component for checkboxes
const Checkbox = ({ label, checked }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
    <View style={checked ? styles.checkedBox : styles.checkbox} />
    <Text>{label}</Text>
  </View>
);

const JuniorAdmissionPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* --- HEADER --- */}
      <View style={styles.header}>
        {/* 1. Logo */}
        <View style={styles.logoSection}>
           <Image src={logo} style={styles.logoImage} />
        </View>

        {/* 2. College Info */}
        <View style={styles.headerLeft}>
          <Text style={styles.title}>SWAMI VIVEKANANDA JUNIOR INSTITUTE</Text>
          <Text style={styles.subTitle}>Arts, Commerce & Science, Pimpalgaon Baswant</Text>
          <Text style={styles.address}>Near Post Office, Shivaji Nagar, Niphad, Nashik - 422209</Text>
          <Text style={styles.address}>Email: swamivivekanandainstitute2021@gmail.com | Ph: 82086 65658</Text>
          <Text style={{ marginTop: 5, fontSize: 12, fontWeight: 'bold', textDecoration: 'underline' }}>ADMISSION FORM: 2026-27</Text>
        </View>

        {/* 3. Photo Box */}
        <View style={styles.headerRight}>
          <View style={styles.photoBox}>
            <Text style={{ fontSize: 8 }}>Photo</Text>
          </View>
          <Text style={{ fontSize: 8 }}>App No: {data.appNo || 'OFFICE USE'}</Text>
        </View>
      </View>

      {/* --- COURSE SELECTION --- */}
      <View style={styles.row}>
        <Text style={styles.label}>Course:</Text>
        <Checkbox label="11th" checked={data.standard === '11th'} />
        <Checkbox label="12th" checked={data.standard === '12th'} />
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Stream:</Text>
        <Checkbox label="Arts" checked={data.stream === 'Arts'} />
        <Checkbox label="Commerce" checked={data.stream === 'Commerce'} />
        <Checkbox label="Science" checked={data.stream === 'Science'} />
      </View>

      {/* --- 1. PERSONAL INFORMATION --- */}
      <Text style={styles.sectionTitle}>1. STUDENT DETAILS</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{data.lastName} {data.firstName} {data.middleName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>In Devnagari:</Text>
        <Text style={{ ...styles.value, fontFamily: 'Helvetica' }}>{data.nameDevnagari}</Text> 
      </View>
      
      <View style={styles.row}>
        <View style={{ ...styles.col, width: '50%' }}>
           <Text style={styles.label}>Mother's Name:</Text>
           <Text style={styles.value}>{data.motherName}</Text>
        </View>
        <View style={{ ...styles.col, width: '50%' }}>
           <Text style={{ ...styles.label, width: 60 }}>Gender:</Text>
           <Checkbox label="Male" checked={data.gender === 'Male'} />
           <Checkbox label="Female" checked={data.gender === 'Female'} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={{ ...styles.col, width: '50%' }}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{data.dob}</Text>
        </View>
        <View style={{ ...styles.col, width: '50%' }}>
          <Text style={{ ...styles.label, width: 60 }}>Place:</Text>
          <Text style={styles.value}>{data.birthPlace}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Caste Category:</Text>
        <Text style={styles.value}>{data.category} ({data.casteName})</Text>
      </View>

      {/* --- 2. ADDRESS & CONTACT --- */}
      <Text style={styles.sectionTitle}>2. ADDRESS & CONTACT</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Perm. Address:</Text>
        <Text style={styles.value}>{data.permanentAddress}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Local Address:</Text>
        <Text style={styles.value}>{data.localAddress || data.permanentAddress}</Text>
      </View>
      <View style={styles.row}>
        <View style={{ ...styles.col, width: '50%' }}>
          <Text style={styles.label}>Student Mobile:</Text>
          <Text style={styles.value}>{data.studentMobile}</Text>
        </View>
        <View style={{ ...styles.col, width: '50%' }}>
          <Text style={{ ...styles.label, width: 60 }}>Email:</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>
      </View>

      {/* --- 3. PARENT DETAILS --- */}
      <Text style={styles.sectionTitle}>3. PARENT / GUARDIAN INFO</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Father Name:</Text>
        <Text style={styles.value}>{data.fatherName}</Text>
      </View>
      <View style={styles.row}>
        <View style={{ ...styles.col, width: '50%' }}>
          <Text style={styles.label}>Occupation:</Text>
          <Text style={styles.value}>{data.parentOccupation}</Text>
        </View>
        <View style={{ ...styles.col, width: '50%' }}>
           <Text style={{ ...styles.label, width: 80 }}>Parent Mobile:</Text>
           <Text style={styles.value}>{data.parentMobile}</Text>
        </View>
      </View>

      {/* --- 4. ACADEMIC RECORD --- */}
      <Text style={styles.sectionTitle}>4. PREVIOUS YEAR DETAILS</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Standard</Text>
          <Text style={styles.tableColHeader}>Board / School</Text>
          <Text style={styles.tableColHeader}>Year of Passing</Text>
          <Text style={styles.tableColHeader}>Marks / Percentage</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>10th (SSC)</Text>
          <Text style={styles.tableCol}>{data.sscBoard}</Text>
          <Text style={styles.tableCol}>{data.sscYear}</Text>
          <Text style={styles.tableCol}>{data.sscMarks}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>11th (FYJC)</Text>
          <Text style={styles.tableCol}>{data.fyjcBoard || '-'}</Text>
          <Text style={styles.tableCol}>{data.fyjcYear || '-'}</Text>
          <Text style={styles.tableCol}>{data.fyjcMarks || '-'}</Text>
        </View>
      </View>

      {/* --- 5. COMPULSORY DECLARATION --- */}
      <View style={styles.declarationSection} break>
         <Text style={styles.declTitle}>DECLARATION BY STUDENT & PARENT</Text>
         <Text style={styles.declText}>1. I have read the Rules of Admission for the year 2026-27 and I have consulted my guardian.</Text>
         <Text style={styles.declText}>2. The information given by me in this application is true to the best of my knowledge.</Text>
         <Text style={styles.declText}>3. I have not been debarred from appearing at any examination held by any Government authority.</Text>
         <Text style={styles.declText}>4. I fully understand that I will be offered admission strictly on the basis of my merit.</Text>
         <Text style={styles.declText}>5. I hereby abide by all the Rules, Acts, and Laws enforced by the College Authorities. I understand that involvement in illegal activities or breach of discipline will result in expulsion.</Text>
         <Text style={styles.declText}>6. The Institute will deal strictly with students who organize or lead strikes.</Text>
         <Text style={styles.declText}>7. I know that I will not be permitted to appear for exams if I fail to satisfy 75% attendance.</Text>
         <Text style={styles.declText}>8. I hold myself responsible for full payment of fees at the time of admission.</Text>
         <Text style={styles.declText}>9. I am aware that the use of mobile phones is prohibited in Classrooms, Labs, and Libraries.</Text>
         <Text style={styles.declText}>10. I undertake to pay on behalf of my ward such fees by the due date. In the event of failure, the Principal may take action.</Text>

         <View style={styles.declFooter}>
            <View>
               <Text style={styles.signLine}>Signature of Parent/Guardian</Text>
               <Text style={{ textAlign: 'center', fontSize: 8 }}>Date: {new Date().toLocaleDateString()}</Text>
            </View>
            <View>
               <Text style={styles.signLine}>Signature of Applicant</Text>
            </View>
         </View>
      </View>

      {/* --- OFFICE USE --- */}
      <View style={{ marginTop: 20, borderWidth: 1, padding: 5, borderStyle: 'dashed' }}>
         <Text style={{ fontSize: 9, fontWeight: 'bold' }}>FOR OFFICE USE ONLY</Text>
         <View style={{ height: 40 }}></View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 8 }}>Received Fees: Rs ________</Text>
            <Text style={{ fontSize: 8 }}>Receipt No: ________</Text>
            <Text style={{ fontSize: 8 }}>Clerk Sign: ________</Text>
         </View>
      </View>

    </Page>
  </Document>
);

export default JuniorAdmissionPDF;