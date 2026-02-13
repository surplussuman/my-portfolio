import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SubscribePopup = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return;

    // Check if user has already dismissed
    const dismissed = sessionStorage.getItem('popup_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const handleDismiss = () => {
    setShow(false);
    sessionStorage.setItem('popup_dismissed', 'true');
  };

  const handleSignup = () => {
    setShow(false);
    navigate('/signup');
  };

  const handleLogin = () => {
    setShow(false);
    navigate('/login');
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={handleDismiss}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-8 text-center relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1.5 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-all"
            >
              <X size={20} />
            </button>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles size={48} className="mx-auto text-yellow-300 mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Unlock Premium Content
            </h2>
            <p className="text-purple-100 text-sm">
              Subscribe to get exclusive AI insights & project deep-dives
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="space-y-3 mb-6">
              {[
                '🧠 In-depth AI project case studies',
                '📊 Technical architecture breakdowns',
                '🚀 Daily updates on ML & AI trends',
                '💡 Free — no credit card needed!',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg">{item.split(' ')[0]}</span>
                  <span className="text-sm">{item.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSignup}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 mb-3"
            >
              Sign Up Free
              <ArrowRight size={20} />
            </button>

            <button
              onClick={handleLogin}
              className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-purple-300 hover:text-purple-600 transition-all"
            >
              Already have an account? Sign In
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              It's completely free. Unlock all project details instantly.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubscribePopup;
