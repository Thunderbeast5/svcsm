import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

const formatCsvValue = (value) => {
  if (value === null || value === undefined) return '';
  if (value?.toDate && typeof value.toDate === 'function') {
    const d = value.toDate();
    return d instanceof Date && !Number.isNaN(d.getTime()) ? d.toISOString() : '';
  }
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map((v) => String(v ?? '')).join(' | ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const downloadCsvWithColumns = (filename, columns, rows) => {
  const escapeCell = (cell) => {
    const str = formatCsvValue(cell);
    const escaped = str.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const headers = columns.map((c) => c.header);
  const csvLines = [headers.map((h) => escapeCell(h)).join(',')];
  rows.forEach((r) => {
    csvLines.push(columns.map((c) => escapeCell(c.getValue(r))).join(','));
  });

  const csv = csvLines.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

const JuniorAdmissionRow = ({ row }) => {
  const standard = row.standard || '-';
  const stream = row.streamScience ? 'Science' : row.streamCommerce ? 'Commerce' : '-';
  const student = `${row.surname || ''} ${row.fathersName || ''}`.trim() || '-';
  const createdAt = row.createdAt?.toDate ? row.createdAt.toDate() : null;
  const date = createdAt ? createdAt.toLocaleDateString() : '-';

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-bold text-gray-800">{row.appNo || '-'}</td>
      <td className="px-6 py-4 font-semibold text-gray-800">{student}</td>
      <td className="px-6 py-4">{standard}</td>
      <td className="px-6 py-4">{stream}</td>
      <td className="px-6 py-4 text-gray-500">{date}</td>
    </tr>
  );
};

const AdminJuniorAdmissions = () => {
  const [juniorAdmissions, setJuniorAdmissions] = useState([]);
  const [isLoadingAdmissions, setIsLoadingAdmissions] = useState(true);
  const [admissionsError, setAdmissionsError] = useState('');

  const handleExport = () => {
    const exportRows = juniorAdmissions;

    const exportColumns = [
      { header: 'Application Number', getValue: (r) => r?.appNo },
      { header: 'Std', getValue: (r) => r?.standard },
      {
        header: 'Stream',
        getValue: (r) => (r?.streamScience ? 'Science' : r?.streamCommerce ? 'Commerce' : r?.stream || ''),
      },
      { header: 'Last Name', getValue: (r) => r?.surname },
      { header: 'First Name', getValue: (r) => r?.firstName },
      { header: 'Middle Name', getValue: (r) => r?.middleName },
      { header: 'Gender', getValue: (r) => r?.gender },
      { header: 'Mother Name', getValue: (r) => r?.mothersName },
      { header: 'Father Name', getValue: (r) => r?.fathersName || r?.fullNameFather },
      { header: 'Father Occupation', getValue: (r) => r?.occupation },
      { header: 'Office Address', getValue: (r) => r?.officeAddress },
      { header: 'Parent Mobile Number', getValue: (r) => r?.parentMobile },
      { header: 'Candidate Mobile Number', getValue: (r) => r?.candidateMobile },
      { header: 'Email', getValue: (r) => r?.email },
      { header: 'DOB', getValue: (r) => r?.dobString || r?.birthDateString },
      { header: 'Place Of Birth', getValue: (r) => r?.placeOfBirth || r?.birthPlace },
      { header: 'State', getValue: (r) => r?.birthState },
      { header: 'Caste', getValue: (r) => r?.caste },
      { header: 'Address', getValue: (r) => r?.permanentAddress || r?.correspondenceAddress },
      {
        header: 'Previous Exam Details',
        getValue: (r) => {
          const parts = [
            r?.sscStream ? `Stream: ${r.sscStream}` : '',
            r?.sscYear ? `Year: ${r.sscYear}` : '',
            r?.sscBoard ? `Board: ${r.sscBoard}` : '',
            r?.sscPercentage ? `Percentage: ${r.sscPercentage}` : '',
            r?.sscMarksObtained ? `Marks: ${r.sscMarksObtained}` : '',
            r?.sscTotalMarks ? `Out Of: ${r.sscTotalMarks}` : '',
          ].filter(Boolean);
          return parts.join(', ');
        },
      },
    ];

    const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    downloadCsvWithColumns(`junior-admissions-${ts}.csv`, exportColumns, exportRows);
  };

  useEffect(() => {
    const q = query(collection(db, 'juniorAdmissions'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const rows = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setJuniorAdmissions(rows);
        setIsLoadingAdmissions(false);
      },
      (err) => {
        setAdmissionsError(err?.message || 'Failed to load admissions');
        setIsLoadingAdmissions(false);
      }
    );

    return unsubscribe;
  }, []);

  const admissionsCount = juniorAdmissions.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 text-lg">Junior Admission Submissions</h3>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleExport}
            disabled={juniorAdmissions.length === 0}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export to Excel
          </button>
          <div className="text-xs text-gray-500 font-semibold">Total: {admissionsCount}</div>
        </div>
      </div>

      {admissionsError && (
        <div className="p-6 text-sm text-red-700 bg-red-50 border-b border-red-100">{admissionsError}</div>
      )}

      {isLoadingAdmissions ? (
        <div className="p-10 text-center text-sm text-gray-500">Loading submissions...</div>
      ) : juniorAdmissions.length === 0 ? (
        <div className="p-10 text-center text-sm text-gray-500">No submissions yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">App No</th>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Standard</th>
                <th className="px-6 py-4">Stream</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {juniorAdmissions.map((row) => (
                <JuniorAdmissionRow key={row.id} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminJuniorAdmissions;
