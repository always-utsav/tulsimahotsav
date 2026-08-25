'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

interface NavbarProps {
  scrollProgress?: number; // 0 to 1 (1 means hero finished at frame 290)
  isInternalPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrollProgress = 0,
  isInternalPage = false,
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global State B triggers when scrollProgress reaches 0.95 OR on internal routes
  const isGlobalState = isInternalPage || scrollProgress >= 0.95;

  // Exact 9 Nav Items as mandated (No logo, 2-line stacked English over Hindi)
  const navItems = [
    { nameLine1: 'HOME', nameLine2: '', hindi: 'मुख्य पृष्ठ', href: '/' },
    { nameLine1: 'SCHEDULE', nameLine2: '', hindi: 'समय सारणी', href: '/schedule' },
    { nameLine1: 'EVENT', nameLine2: 'DETAILS', hindi: 'कार्यक्रम विवरण', href: '/events' },
    { nameLine1: 'GUEST', nameLine2: '', hindi: 'अतिथि', href: '/guests' },
    { nameLine1: 'TEAM', nameLine2: '', hindi: 'टीम', href: '/team' },
    { nameLine1: 'GALLERY', nameLine2: '', hindi: 'चित्र दीर्घा', href: '/gallery' },
    { nameLine1: 'PARTNERS &', nameLine2: 'SPONSORS', hindi: 'सहयोगी एवं प्रायोजक', href: '/partners' },
    { nameLine1: 'CONTACT', nameLine2: 'US', hindi: 'संपर्क', href: '/contact' },
  ];

  const registerItem = {
    nameLine1: 'REGISTER',
    nameLine2: 'NOW',
    hindi: 'अभी पंजीकरण करे',
    href: SITE_CONFIG.registrationUrl,
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <nav
        className={`w-full px-4 sm:px-6 lg:px-10 transition-all duration-500 border-b ${
          isGlobalState
            ? 'bg-[#F4EAD3] lg:bg-[#F4EAD3]/95 lg:backdrop-blur-xl border-[#B28A45]/40 shadow-[0_4px_20px_rgba(101,31,39,0.12)] py-2 sm:py-2.5'
            : 'bg-[#F4EAD3] lg:bg-gradient-to-b lg:from-[#0a0204]/90 lg:via-[#0a0204]/40 lg:to-transparent border-b-[#B28A45]/30 lg:border-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center">
          {/* Mobile Top Bar Left Title */}
          <div className="lg:hidden flex items-center">
            <Link
              href="/"
              className={`font-serif text-base font-bold transition-colors ${
                isGlobalState ? 'text-[#651F27]' : 'text-[#651F27] lg:text-[#F3E8D0]'
              }`}
            >
              तुलसी महोत्सव 2026
            </Link>
          </div>

          {/* Desktop Navigation Links Container */}
          <div className="hidden lg:flex items-center justify-between w-full gap-2 xl:gap-4">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group py-1 px-2.5 rounded-lg flex flex-col items-center justify-center text-center transition-colors duration-300 ${
                    isActive
                      ? isGlobalState
                        ? 'text-[#651F27]'
                        : 'text-[#e5c158]'
                      : isGlobalState
                      ? 'text-[#191817]/85 hover:text-[#651F27]'
                      : 'text-[#e8dfd1]/80 hover:text-[#f7f3e8]'
                  }`}
                >
                  {/* Top Line: Primary English Label */}
                  <span className="font-cinzel text-[11px] xl:text-xs font-bold tracking-[0.12em] uppercase leading-tight flex flex-col items-center">
                    <span>{item.nameLine1}</span>
                    {item.nameLine2 && <span>{item.nameLine2}</span>}
                  </span>

                  {/* Bottom Line: Hindi Label */}
                  <span
                    className={`font-serif text-[10px] xl:text-[11px] tracking-normal leading-tight mt-0.5 transition-colors ${
                      isActive
                        ? 'text-[#C96B2C] font-semibold'
                        : isGlobalState
                        ? 'text-[#651F27]/75 group-hover:text-[#651F27]'
                        : 'text-[#B28A45]/80 group-hover:text-[#ECE0C4]'
                    }`}
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {item.hindi}
                  </span>

                  {/* Underline Accent */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${
                      isGlobalState
                        ? 'bg-gradient-to-r from-[#651F27] via-[#C96B2C] to-[#B28A45]'
                        : 'bg-gradient-to-r from-[#e5c158] to-[#df8a28]'
                    } ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`}
                  />
                </Link>
              );
            })}

            {/* REGISTER NOW Button — Vertically centered 2-line text, clean gap, NO external-link icon */}
            <a
              href={registerItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full border text-[11px] font-sans font-bold tracking-[0.14em] uppercase transition-all duration-300 transform hover:scale-105 shadow-md shrink-0 ${
                isGlobalState
                  ? 'border-[#B28A45] bg-[#651F27] text-[#F3E8D0] hover:bg-[#263A59] shadow-[0_4px_15px_rgba(101,31,39,0.3)]'
                  : 'border-[#e5c158]/60 bg-gradient-to-r from-[#1a050b] via-[#2d0a15] to-[#1a050b] text-[#f7f3e8] hover:text-[#e5c158] shadow-[0_4px_15px_rgba(229,193,88,0.2)]'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C96B2C] shrink-0" />
              <div className="flex flex-col items-center justify-center text-center leading-tight gap-[3px]">
                <span className="font-cinzel tracking-[0.15em] font-bold">
                  {registerItem.nameLine1} {registerItem.nameLine2}
                </span>
                <span
                  className="text-[9.5px] font-serif text-[#ECE0C4]/90 font-medium leading-none"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  {registerItem.hindi}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border transition-colors border-[#B28A45]/40 bg-[#651F27] text-[#F3E8D0]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer — Solid Light Cream Background */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-[52px] z-40 bg-[#F4EAD3] border-b-2 border-[#B28A45]/50 px-6 py-8 overflow-y-auto flex flex-col justify-between"
          >
            <div className="flex flex-col gap-3">
              <span className="font-cinzel text-[10px] tracking-[0.3em] text-[#C96B2C] uppercase font-bold mb-2">
                INDEX · विषय-सूची
              </span>

              {navItems.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 border-b border-[#B28A45]/20 group transition-colors ${
                      isActive ? 'text-[#651F27] font-bold' : 'text-[#191817] hover:text-[#651F27]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs font-bold text-[#C96B2C] tracking-widest">
                        0{idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-cinzel text-base font-bold tracking-[0.15em] uppercase">
                          {item.nameLine1} {item.nameLine2}
                        </span>
                        <span
                          className="font-serif text-xs text-[#651F27]/80 -mt-0.5"
                          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                        >
                          {item.hindi}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                );
              })}

              {/* Mobile REGISTER NOW Link — Clean gap, NO external-link icon */}
              <a
                href={registerItem.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-between py-3.5 px-5 rounded-xl border-2 border-[#B28A45] bg-[#651F27] text-[#F3E8D0] shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs font-bold text-[#C96B2C] tracking-widest">
                    09
                  </span>
                  <div className="flex flex-col items-start justify-center gap-[3px]">
                    <span className="font-cinzel text-base font-bold tracking-[0.15em] uppercase text-[#F3E8D0]">
                      REGISTER NOW
                    </span>
                    <span
                      className="font-serif text-xs text-[#ECE0C4]/90 font-medium leading-none"
                      style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                    >
                      {registerItem.hindi}
                    </span>
                  </div>
                </div>
                <Sparkles className="h-4 w-4 text-[#C96B2C]" />
              </a>
            </div>

            <div className="mt-8 text-center pt-4 border-t border-[#B28A45]/20 font-sans text-xs text-[#191817]/60">
              <p>Tulsi Mahotsav 2026 · Hindi Samiti MITS-DU</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
