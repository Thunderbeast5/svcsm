import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

const SeniorAdmissionRow = ({ row }) => {
  const year = row.year || '-';
  const course = row.course || '-';
  const student = `${row.lastName || ''} ${row.firstName || ''}`.trim() || '-';
  const createdAt = row.createdAt?.toDate ? row.createdAt.toDate() : null;
  const date = createdAt ? createdAt.toLocaleDateString() : '-';

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-bold text-gray-800">{row.appNo || '-'}</td>
      <td className="px-6 py-4 font-semibold text-gray-800">{student}</td>
      <td className="px-6 py-4">{year}</td>
      <td className="px-6 py-4">{course}</td>
      <td className="px-6 py-4 text-gray-500">{date}</td>
    </tr>
  );
};

const AdminSeniorAdmissions = () => {
  const [seniorAdmissions, setSeniorAdmissions] = useState([]);
  const [isLoadingAdmissions, setIsLoadingAdmissions] = useState(true);
  const [admissionsError, setAdmissionsError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'seniorAdmissions'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const rows = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setSeniorAdmissions(rows);
        setIsLoadingAdmissions(false);
      },
      (err) => {
        setAdmissionsError(err?.message || 'Failed to load admissions');
        setIsLoadingAdmissions(false);
      }
    );

    return unsubscribe;
  }, []);

  const admissionsCount = seniorAdmissions.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 text-lg">Senior Admission Submissions</h3>
        <div className="text-xs text-gray-500 font-semibold">Total: {admissionsCount}</div>
      </div>

      {admissionsError && (
        <div className="p-6 text-sm text-red-700 bg-red-50 border-b border-red-100">{admissionsError}</div>
      )}

      {isLoadingAdmissions ? (
        <div className="p-10 text-center text-sm text-gray-500">Loading submissions...</div>
      ) : seniorAdmissions.length === 0 ? (
        <div className="p-10 text-center text-sm text-gray-500">No submissions yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">App No</th>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {seniorAdmissions.map((row) => (
                <SeniorAdmissionRow key={row.id} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminSeniorAdmissions;
