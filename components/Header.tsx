'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-400 ${
          isScrolled ? 'bg-blue-950/85 backdrop-blur-xl border-b border-white/10 py-3.5' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo */}
        <Link href="/" className="font-bold">
          <motion.div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1.3rem',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #60a5fa, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Saxman Consulting
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="relative text-blue-200/75 text-sm font-normal tracking-wide transition-colors duration-250 hover:text-blue-100"
                style={{
                  letterSpacing: '0.02em',
                }}
              >
                {item.name}
                <span 
                  className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-gradient-to-r from-blue-600 to-green-500 transform scale-x-0 transition-transform duration-300 origin-left"
                  style={{ transformOrigin: 'left' }}
                />
              </Link>
            </motion.li>
          ))}
          
          {/* CTA Button */}
          <motion.button
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white border-none px-5.5 py-1.5 rounded-full font-medium text-sm cursor-pointer transition-all duration-300"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '0.01em',
            }}
            whileHover={{ 
              y: -1,
              boxShadow: "0 0 24px rgba(37,99,235,0.5), 0 0 40px rgba(16,185,129,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            Browse Properties
          </motion.button>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          whileTap={{ scale: 0.9 }}
        >
          <span 
            className={`block w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-3 rotate-45' : ''
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-blue-100 rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? '-translate-y-3 -rotate-45' : ''
            }`} 
          />
        </motion.button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-blue-950/97 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'all' }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center gap-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={item.href}
                    className="font-bold text-blue-100 text-2xl transition-colors duration-200 hover:text-green-400"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white border-none px-5.5 py-1.5 rounded-full font-medium text-sm cursor-pointer transition-all duration-300"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.01em',
                }}
                whileHover={{ 
                  y: -1,
                  boxShadow: "0 0 24px rgba(37,99,235,0.5), 0 0 40px rgba(16,185,129,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                Browse Properties
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
