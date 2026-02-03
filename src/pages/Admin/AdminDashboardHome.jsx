import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, GraduationCap, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const MotionDiv = motion.div;

const AdminDashboardHome = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Overview</h2>
        <p className="text-gray-500 mt-1">Welcome back! Here is your daily summary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Users} title="Total Students" value="4,250" change="+12%" color="bg-blue-100 text-blue-700" />
        <StatCard icon={FileText} title="Applications" value="345" change="+5%" color="bg-purple-100 text-purple-700" />
        <StatCard icon={GraduationCap} title="Faculty" value="85" change="0%" color="bg-orange-100 text-orange-700" />
        <StatCard icon={AlertCircle} title="Pending Fees" value="28" change="-2%" color="bg-red-100 text-red-700" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-gray-800 text-lg">Recent Admission Requests</h3>
          <button className="text-sv-blue text-sm font-semibold hover:text-sv-maroon transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Date applied</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <TableRow name="Rohan Patil" course="B.Sc Comp Sci" date="Jan 24, 2026" status="Pending" />
              <TableRow name="Anjali Sharma" course="B.Com" date="Jan 23, 2026" status="Approved" />
              <TableRow name="Vikram Singh" course="BBA" date="Jan 22, 2026" status="Rejected" />
              <TableRow name="Sneha Deshmukh" course="Junior College" date="Jan 22, 2026" status="Approved" />
              <TableRow name="Priya Kulkarni" course="BCA" date="Jan 21, 2026" status="Pending" />
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-10"></div>
    </>
  );
};

const StatCard = ({ icon: Icon, title, value, change, color }) => {
  const IconComponent = Icon;

  return (
    <MotionDiv
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32"
    >
      <div className="flex justify-between items-start">
        <div className={`p-2.5 rounded-lg ${color} bg-opacity-20`}>
          <IconComponent size={22} className={color.split(' ')[1]} />
        </div>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {change}
        </span>
      </div>
      <div>
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wide">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </MotionDiv>
  );
};

const TableRow = ({ name, course, date, status }) => {
  const statusStyles = {
    Approved: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: AlertCircle },
    Rejected: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle },
  };

  const style = statusStyles[status];
  const StatusIcon = style.icon;

  return (
    <tr className="hover:bg-gray-50 transition-colors group">
      <td className="px-6 py-4 font-bold text-gray-800">{name}</td>
      <td className="px-6 py-4">{course}</td>
      <td className="px-6 py-4 text-gray-500">{date}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>
          <StatusIcon size={12} />
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button className="text-sv-blue hover:text-sv-maroon font-semibold text-xs uppercase tracking-wide border border-transparent hover:border-sv-maroon px-3 py-1 rounded transition-all">
          Manage
        </button>
      </td>
    </tr>
  );
};

export default AdminDashboardHome;
