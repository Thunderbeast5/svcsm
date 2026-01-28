import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, BookOpen, FileText, Settings, LogOut, 
  Menu, X, Bell, Search, GraduationCap, TrendingUp, Clock, AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sidebar Menu Items
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'admissions', label: 'Admissions', icon: Users, badge: '12' },
    { id: 'courses', label: 'Manage Courses', icon: BookOpen },
    { id: 'notices', label: 'Notices & News', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      
      {/* SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-sv-blue text-white transition-all duration-300 shadow-xl ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } lg:relative`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 bg-blue-950/50 border-b border-white/10">
          {isSidebarOpen ? (
            <span className="font-bold text-lg tracking-wide text-sv-gold">SVCMS ADMIN</span>
          ) : (
            <span className="font-bold text-lg mx-auto text-sv-gold">SV</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all group ${
                activeTab === item.id 
                  ? 'bg-sv-gold text-sv-blue font-bold shadow-md' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={20} className={activeTab === item.id ? 'text-sv-blue' : 'text-gray-400 group-hover:text-white'} />
              
              {isSidebarOpen && (
                <div className="flex-1 flex justify-between items-center">
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-sv-maroon text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="absolute bottom-0 w-full p-4 border-t border-white/10 bg-blue-950/30">
          <button 
            onClick={handleLogout}
            className={`flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors w-full px-3 py-2 ${!isSidebarOpen && 'justify-center'}`}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-sv-blue w-64"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
               <div className="text-right hidden md:block">
                 <p className="text-sm font-bold text-gray-800">Administrator</p>
                 <p className="text-xs text-gray-500">Super Admin</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-sv-maroon text-white flex items-center justify-center font-bold">A</div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back, Admin!</h2>
            <p className="text-gray-500 mt-1">Here is what's happening at SVCMS today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard icon={Users} title="Total Students" value="4,250" change="+12%" color="bg-blue-50 text-blue-600" />
            <StatCard icon={FileText} title="Applications" value="345" change="+5%" color="bg-purple-50 text-purple-600" />
            <StatCard icon={GraduationCap} title="Faculty" value="85" change="0%" color="bg-orange-50 text-orange-600" />
            <StatCard icon={AlertCircle} title="Pending Fees" value="28" change="-2%" color="bg-red-50 text-red-600" />
          </div>

          {/* Recent Applications Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800 text-lg">Recent Admission Requests</h3>
              <button className="text-sv-blue text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs">
                  <tr>
                    <th className="px-6 py-4">Student Name</th>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <TableRow name="Rohan Patil" course="B.Sc Computer Science" date="Jan 24, 2026" status="Pending" />
                  <TableRow name="Anjali Sharma" course="B.Com" date="Jan 23, 2026" status="Approved" />
                  <TableRow name="Vikram Singh" course="BBA" date="Jan 22, 2026" status="Rejected" />
                  <TableRow name="Sneha Deshmukh" course="Junior College (Sci)" date="Jan 22, 2026" status="Approved" />
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// Helper Components
const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={24} />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </motion.div>
);

const TableRow = ({ name, course, date, status }) => {
  const statusColors = {
    Approved: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Rejected: 'bg-red-100 text-red-700'
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{name}</td>
      <td className="px-6 py-4">{course}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button className="text-sv-blue hover:text-sv-maroon font-semibold">Edit</button>
      </td>
    </tr>
  );
};

export default AdminDashboard;