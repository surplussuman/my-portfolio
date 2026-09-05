import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogOut, User } from 'lucide-react';
import { navigation } from '../PortfolioData';
import { useAuth } from '../context/AuthContext';
import { useToast } from './ToastContainer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { addToast } = useToast();

  const linkClass = ({ isActive }) =>
    `text-sm transition-all duration-300 font-medium ${
      isActive ? 'text-purple-600 font-semibold' : 'text-gray-600 hover:text-purple-600'
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              SJ
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} end={item.href === '/'} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-2 ml-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <User size={13} className="text-purple-600" />
                  <span className="text-gray-800 font-medium text-xs">
                    {user?.first_name || user?.username || 'User'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    addToast('Successfully logged out', 'success');
                  }}
                  className="p-1.5 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-3 px-3 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-purple-50"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 pb-3 space-y-3"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm transition-colors font-medium ${
                    isActive ? 'text-purple-600 font-semibold' : 'text-gray-600 hover:text-purple-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <User size={13} className="text-purple-600" />
                  <span className="text-gray-800 font-medium text-xs">
                    {user?.first_name || user?.username || 'User'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                    addToast('Successfully logged out', 'success');
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-3 px-3 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
