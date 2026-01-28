import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate('/admin/dashboard', { replace: true });
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setErrorMessage(err?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-sv-blue z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sv-maroon/5 rounded-full blur-[100px] z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10 border-t-4 border-sv-gold"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-sv-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-sv-blue">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Portal</h2>
          <p className="text-gray-500 text-sm">Sign in to manage the institute</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username / Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input 
                type="text" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sv-blue focus:border-sv-blue transition-all"
                placeholder="admin@svcms.edu.in"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sv-blue focus:border-sv-blue transition-all"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-xs text-sv-maroon hover:underline font-medium">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          {errorMessage && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {errorMessage}
            </div>
          )}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-sv-blue hover:bg-blue-900 text-white font-bold py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>Sign In <ArrowRight size={18} /></>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">
            Protected area. IP Address logged for security. <br/>
            &copy; 2026 SVCMS Admin System.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;