import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, X, UserPlus, Info, Trash2 } from 'lucide-react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc,
  limit,
  where
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for notifications
  useEffect(() => {
    // Query last 20 notifications, ordered by date
    const q = query(
      collection(db, 'notifications'),
      orderBy('createdAt', 'desc'),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotifications(notes);
      
      // Calculate unread count
      const unread = notes.filter(n => !n.read).length;
      setUnreadCount(unread);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (id, e) => {
    if (e) e.stopPropagation();
    try {
      const noteRef = doc(db, 'notifications', id);
      await updateDoc(noteRef, { read: true });
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const markAllAsRead = async () => {
    const unreadNotes = notifications.filter(n => !n.read);
    const updates = unreadNotes.map(note => 
      updateDoc(doc(db, 'notifications', note.id), { read: true })
    );
    await Promise.all(updates);
  };

  const deleteNotification = async (id, e) => {
    if (e) e.stopPropagation();
    try {
      await deleteDoc(doc(db, 'notifications', id));
    } catch (err) {
      console.error('Error deleting notification:', err);
    }
  };

  const handleNotificationClick = async (notification) => {
    if (!notification.read) {
      await markAsRead(notification.id);
    }
    
    if (notification.link) {
      navigate(notification.link);
      setIsOpen(false);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'junior_admission':
      case 'senior_admission':
        return <UserPlus size={16} className="text-white" />;
      default:
        return <Info size={16} className="text-white" />;
    }
  };

  const getIconBg = (type) => {
    switch (type) {
      case 'junior_admission':
        return 'bg-blue-500';
      case 'senior_admission':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    const now = new Date();
    const diff = now - date;
    
    // Less than 1 minute
    if (diff < 60000) return 'Just now';
    
    // Less than 1 hour
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    
    // Less than 24 hours
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    
    // Format date
    return date.toLocaleDateString();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-gray-800">Notifications</h3>
              {unreadCount > 0 && (
                <button 
                  onClick={markAllAsRead}
                  className="text-xs font-medium text-sv-blue hover:text-sv-maroon transition-colors flex items-center gap-1"
                >
                  <Check size={12} />
                  Mark all read
                </button>
              )}
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                  <Bell size={32} className="text-gray-300 mb-2" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {notifications.map((note) => (
                    <div 
                      key={note.id}
                      onClick={() => handleNotificationClick(note)}
                      className={`
                        p-4 hover:bg-gray-50 transition-colors cursor-pointer relative group
                        ${!note.read ? 'bg-blue-50/40' : ''}
                      `}
                    >
                      <div className="flex gap-3">
                        <div className={`
                          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm mt-1
                          ${getIconBg(note.type)}
                        `}>
                          {getIcon(note.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm ${!note.read ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                            {note.title}
                          </p>
                          <p className="text-sm text-gray-500 mt-0.5 break-words">
                            {note.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                            {formatTime(note.createdAt)}
                          </p>
                        </div>
                        
                        {!note.read && (
                          <div className="flex-shrink-0 self-start mt-2">
                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        )}
                        
                        <button
                          onClick={(e) => deleteNotification(note.id, e)}
                          className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                          title="Delete notification"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-2 border-t border-gray-100 bg-gray-50">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-1.5 text-xs text-gray-600 hover:text-gray-800 text-center font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminNotifications;
