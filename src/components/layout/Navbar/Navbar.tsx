'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import useScrollSpy from '@/hooks/useScrollSpy';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'work', 'contact']);
  const { isIntroComplete } = useIntroAnimation();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 md:px-10 hidden md:block">
        <div className="relative max-w-7xl mx-auto flex items-center">
          {/* Logo - Left Side - Aligned with navbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isIntroComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer flex-shrink-0 z-10"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative group overflow-visible">
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0A84FF]/20 to-[#409CFF]/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Logo Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A84FF]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Custom Stylish SVG S Logo */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="48" stroke="url(#logo-grad)" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20" />
                  <path
                    d="M35 30C35 24.4772 39.4772 20 45 20H60C65.5228 20 70 24.4772 70 30V35C70 40.5228 65.5228 45 60 45H45C39.4772 45 35 49.4772 35 55V60C35 65.5228 39.4772 70 45 70H60C65.5228 70 70 65.5228 70 60"
                    stroke="url(#logo-grad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="0.5" stopColor="#0A84FF" />
                      <stop offset="1" stopColor="white" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Accent Detail */}
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#30D158]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Center Glass Pill Navigation - Perfectly Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="backdrop-blur-sm border border-white/[0.15] rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
              }}
            >
              <NavLinks activeSection={activeSection} />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="backdrop-blur-sm border border-white/[0.05] rounded-full px-4 py-2 shadow-lg flex justify-between items-center">
          {/* Logo */}
          <div
            className="cursor-pointer flex-shrink-0"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0A84FF]/10 to-[#409CFF]/5 border border-white/10 backdrop-blur-md">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 30C35 24.4772 39.4772 20 45 20H60C65.5228 20 70 24.4772 70 30V35C70 40.5228 65.5228 45 60 45H45C39.4772 45 35 49.4772 35 55V60C35 65.5228 39.4772 70 45 70H60C65.5228 70 70 65.5228 70 60"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1.5 hover:bg-white/[0.05] rounded-full transition-all"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          activeSection={activeSection}
        />
      </motion.nav>
    </>
  );
}
