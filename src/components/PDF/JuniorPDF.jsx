import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Register a standard font (optional, default is Helvetica)
// Font.register({ family: 'Roboto', src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf' });

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#800000', paddingBottom: 10, marginBottom: 10 },
  logoSection: { width: '15%' },
  titleSection: { width: '85%', textAlign: 'center' },
  collegeName: { fontSize: 16, fontWeight: 'bold', color: '#1a365d', textTransform: 'uppercase' },
  subTitle: { fontSize: 10, marginTop: 4, color: '#800000' },
  formTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, textDecoration: 'underline' },
  
  // Sections
  section: { marginVertical: 5 },
  row: { flexDirection: 'row', marginBottom: 4 },
  label: { width: '30%', fontWeight: 'bold' },
  value: { width: '70%', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 2 },
  
  // Boxes
  photoBox: { width: 100, height: 120, borderWidth: 1, borderColor: '#000', position: 'absolute', right: 0, top: 0, alignItems: 'center', justifyContent: 'center' },
  
  // Table
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0, marginTop: 10 },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: { width: "25%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 9, padding: 4 }
});

const JuniorPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Header matching your document */}
      <View style={styles.header}>
        <View style={styles.logoSection}>
           {/* Replace with your actual base64 logo or URL */}
           {/* <Image src="/logo.png" /> */} 
           <Text>LOGO</Text>
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.collegeName}>Swami Vivekananda Institute</Text>
          <Text style={styles.subTitle}>Junior Institute of Arts, Commerce & Science, Pimpalgaon Baswant</Text>
          <Text style={{ fontSize: 9, marginTop: 4 }}>Reg. No. ID/PU/NS/C/148/2009 | Ph: 82086 65658</Text>
        </View>
      </View>

      <Text style={styles.formTitle}>ADMISSION FORM: 2026-27</Text>

      {/* Photo Box Area (Top Right) */}
      <View style={{ height: 130, position: 'relative' }}>
        <View style={{ width: '70%' }}>
          <View style={styles.row}>
             <Text style={styles.label}>Course Applied:</Text>
             <Text style={styles.value}>{data.stream} ({data.standard})</Text>
          </View>
          <View style={styles.row}>
             <Text style={styles.label}>Application No:</Text>
             <Text style={styles.value}>SV/2026/{Math.floor(1000 + Math.random() * 9000)}</Text>
          </View>
        </View>
        <View style={styles.photoBox}>
          <Text>Paste Photo</Text>
        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={{ backgroundColor: '#eee', padding: 4, fontWeight: 'bold', marginBottom: 6 }}>1. PERSONAL INFORMATION</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{data.lastName} {data.firstName} {data.middleName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mother's Name:</Text>
          <Text style={styles.value}>{data.motherName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{data.dob}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{data.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Caste Category:</Text>
          <Text style={styles.value}>{data.category}</Text>
        </View>
      </View>

      {/* Contact Details */}
      <View style={styles.section}>
        <Text style={{ backgroundColor: '#eee', padding: 4, fontWeight: 'bold', marginBottom: 6 }}>2. CONTACT DETAILS</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Mobile No:</Text>
          <Text style={styles.value}>{data.mobile}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email ID:</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.address}</Text>
        </View>
      </View>

      {/* Previous Academic Record Table */}
      <View style={styles.section}>
        <Text style={{ backgroundColor: '#eee', padding: 4, fontWeight: 'bold', marginBottom: 6 }}>3. PREVIOUS ACADEMIC DETAILS</Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Class</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>School/Board</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Passing Year</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Percentage</Text></View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>10th (SSC)</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{data.sscBoard}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{data.sscYear}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{data.sscPercentage}%</Text></View>
          </View>
        </View>
      </View>

      {/* Declaration Footer */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 9, fontStyle: 'italic' }}>I hereby declare that the information given above is true to the best of my knowledge.</Text>
        <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>
          <View style={{ borderTopWidth: 1, width: 150, alignItems: 'center' }}>
            <Text>Parent's Signature</Text>
          </View>
          <View style={{ borderTopWidth: 1, width: 150, alignItems: 'center' }}>
            <Text>Student's Signature</Text>
          </View>
        </View>
      </View>

    </Page>
  </Document>
);

export default JuniorPDF;