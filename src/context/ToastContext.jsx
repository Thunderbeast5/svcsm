import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'; 

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((type, title, message) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, [removeToast]);

  const value = {
    addToast,
    success: (title, message) => addToast('success', title, message),
    error: (title, message) => addToast('error', title, message),
    info: (title, message) => addToast('info', title, message),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-4 w-full max-w-sm">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ type, title, message, onClose }) => {
  // Define styles based on type
  const styles = {
    success: {
      border: 'border-sv-gold',
      iconColor: 'text-sv-gold',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    error: {
      border: 'border-sv-maroon',
      iconColor: 'text-sv-maroon',
      icon: <AlertCircle className="w-6 h-6" />,
    },
    info: {
      border: 'border-sv-blue',
      iconColor: 'text-sv-blue',
      icon: <Info className="w-6 h-6" />,
    },
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div
      className={`
        relative flex items-start p-4 rounded-lg shadow-lg bg-white 
        border-l-4 ${currentStyle.border} 
        transition-all duration-300 animate-in slide-in-from-right
      `}
      role="alert"
    >
      <div className={`flex-shrink-0 ${currentStyle.iconColor}`}>
        {currentStyle.icon}
      </div>
      
      <div className="ml-3 w-0 flex-1 pt-0.5">
        <p className="text-sm font-bold text-sv-blue">
          {title}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {message}
        </p>
      </div>
      
      <div className="ml-4 flex flex-shrink-0">
        <button
          onClick={onClose}
          className="inline-flex text-gray-400 hover:text-sv-blue focus:outline-none transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
