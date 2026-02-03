import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Settings, LogOut, 
  Menu, Bell, Search, GraduationCap, AlertCircle, CheckCircle, XCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const JuniorAdmissionRow = ({ row }) => {
  const standard = row.standard || '-';
  const stream = row.streamScience ? 'Science' : row.streamCommerce ? 'Commerce' : '-';
  const student = `${row.surname || ''} ${row.fathersName || ''}`.trim() || '-';
  const createdAt = row.createdAt?.toDate ? row.createdAt.toDate() : null;
  const date = createdAt ? createdAt.toLocaleDateString() : '-';
  const status = row.status || 'Pending';

  const statusStyles = {
    Approved: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: AlertCircle },
    Rejected: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle },
  };

  const style = statusStyles[status] || statusStyles.Pending;
  const StatusIcon = style.icon;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-bold text-gray-800">{row.appNo || '-'}</td>
      <td className="px-6 py-4 font-semibold text-gray-800">{student}</td>
      <td className="px-6 py-4">{standard}</td>
      <td className="px-6 py-4">{stream}</td>
      <td className="px-6 py-4 text-gray-500">{date}</td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>
          <StatusIcon size={12} />
          {status}
        </span>
      </td>
    </tr>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [juniorAdmissions, setJuniorAdmissions] = useState([]);
  const [isLoadingAdmissions, setIsLoadingAdmissions] = useState(true);
  const [admissionsError, setAdmissionsError] = useState('');

  // Sidebar Menu Items
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'admissions', label: 'Admissions', icon: Users },
    { id: 'courses', label: 'Manage Courses', icon: BookOpen },
    { id: 'notices', label: 'Notices & News', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const admissionsCount = juniorAdmissions.length;

  const menuItemsWithBadges = menuItems.map((item) => {
    if (item.id === 'admissions') return { ...item, badge: admissionsCount ? String(admissionsCount) : null };
    return item;
  });

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

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      
      {/* SIDEBAR: Fixed width, full height */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className="bg-sv-blue text-white flex flex-col shadow-2xl z-20 flex-shrink-0"
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-center border-b border-white/10">
           {isSidebarOpen ? (
             <span className="font-bold text-xl tracking-wider text-sv-gold">SVCMS ADMIN</span>
           ) : (
             <span className="font-bold text-xl text-sv-gold">SV</span>
           )}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItemsWithBadges.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all group whitespace-nowrap overflow-hidden ${
                activeTab === item.id 
                  ? 'bg-sv-gold text-sv-blue font-bold shadow-md' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="min-w-[20px]">
                <item.icon size={20} className={activeTab === item.id ? 'text-sv-blue' : 'text-gray-400 group-hover:text-white'} />
              </div>
              
              {isSidebarOpen && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex-1 flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-sv-maroon text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </motion.div>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 bg-blue-950/30">
          <button 
            onClick={handleLogout}
            className={`flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors w-full px-3 py-2 ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA: Flex grow, manages its own scroll */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              {menuItemsWithBadges.find(i => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-sv-blue focus:bg-white w-64 transition-all"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            {/* Profile Dropdown Trigger */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 ml-2">
               <div className="text-right hidden md:block leading-tight">
                 <p className="text-sm font-bold text-gray-800">Administrator</p>
                 <p className="text-xs text-gray-500">Super Admin</p>
               </div>
               <div className="w-9 h-9 rounded-full bg-sv-maroon text-white flex items-center justify-center font-bold shadow-sm">A</div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
          {activeTab === 'dashboard' && (
            <>
              {/* Welcome Banner */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Overview</h2>
                <p className="text-gray-500 mt-1">Welcome back! Here is your daily summary.</p>
              </div>

              {/* KPI Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon={Users} title="Total Students" value="4,250" change="+12%" color="bg-blue-100 text-blue-700" />
                <StatCard icon={FileText} title="Applications" value="345" change="+5%" color="bg-purple-100 text-purple-700" />
                <StatCard icon={GraduationCap} title="Faculty" value="85" change="0%" color="bg-orange-100 text-orange-700" />
                <StatCard icon={AlertCircle} title="Pending Fees" value="28" change="-2%" color="bg-red-100 text-red-700" />
              </div>

              {/* Recent Applications Table */}
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

              <div className="h-10"></div> {/* Bottom Spacer */}
            </>
          )}

          {activeTab === 'admissions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-bold text-gray-800 text-lg">Junior Admission Submissions</h3>
                <div className="text-xs text-gray-500 font-semibold">Total: {admissionsCount}</div>
              </div>

              {admissionsError && (
                <div className="p-6 text-sm text-red-700 bg-red-50 border-b border-red-100">
                  {admissionsError}
                </div>
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
                        <th className="px-6 py-4">Status</th>
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
          )}

          {activeTab !== 'dashboard' && activeTab !== 'admissions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10 text-center text-sm text-gray-500">
              This section will be implemented next.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// --- Helper Components ---

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32"
  >
    <div className="flex justify-between items-start">
      <div className={`p-2.5 rounded-lg ${color} bg-opacity-20`}>
        <Icon size={22} className={color.split(' ')[1]} />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wide">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </motion.div>
);

const TableRow = ({ name, course, date, status }) => {
  const statusStyles = {
    Approved: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: AlertCircle },
    Rejected: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle }
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

export default AdminDashboard;