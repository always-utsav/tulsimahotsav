'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';
import { useAudio } from '@/context/AudioContext';

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
  const { isPlaying, toggleMusic } = useAudio();

  // Global State B triggers when scrollProgress reaches 0.95 OR on internal routes
  const isGlobalState = isInternalPage || scrollProgress >= 0.95;

  // Exact 8 Nav Items (English only, no Hindi subtitle)
  const navItems = [
    { nameLine1: 'HOME', nameLine2: '', href: '/' },
    { nameLine1: 'SCHEDULE', nameLine2: '', href: '/schedule' },
    { nameLine1: 'EVENTS', nameLine2: '', href: '/events' },
    { nameLine1: 'GUEST', nameLine2: '', href: '/guests' },
    { nameLine1: 'TEAM', nameLine2: '', href: '/team' },
    { nameLine1: 'GALLERY', nameLine2: '', href: '/gallery' },
    { nameLine1: 'PARTNERS', nameLine2: '', href: '/partners' },
    { nameLine1: 'CONTACT', nameLine2: '', href: '/contact' },
  ];

  const registerItem = {
    nameLine1: 'REGISTER',
    nameLine2: 'NOW',
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
            : 'bg-gradient-to-b from-[#0a0204]/90 via-[#0a0204]/40 to-transparent border-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center">
          {/* Mobile Top Bar Left Title */}
          <div className="lg:hidden flex items-center shrink-0">
            <Link
              href="/"
              className={`font-serif text-sm sm:text-base font-bold transition-colors ${
                isGlobalState ? 'text-[#651F27]' : 'text-[#F3E8D0]'
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
                  className={`relative group py-1.5 px-2.5 rounded-lg flex flex-col items-center justify-center text-center transition-colors duration-300 ${
                    isActive
                      ? isGlobalState
                        ? 'text-[#651F27]'
                        : 'text-[#e5c158]'
                      : isGlobalState
                      ? 'text-[#191817]/85 hover:text-[#651F27]'
                      : 'text-[#e8dfd1]/80 hover:text-[#f7f3e8]'
                  }`}
                >
                  {/* Primary English Label Only */}
                  <span className="font-cinzel text-[11px] xl:text-xs font-bold tracking-[0.12em] uppercase leading-tight flex flex-col items-center">
                    <span>{item.nameLine1}</span>
                    {item.nameLine2 && <span>{item.nameLine2}</span>}
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

            {/* Tulsi Naad Music Toggle Button — Desktop */}
            <button
              onClick={toggleMusic}
              className={`ml-2 inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 min-h-[38px] rounded-full border text-[11px] font-sans font-bold tracking-[0.12em] uppercase transition-all duration-300 transform hover:scale-105 shadow-md shrink-0 ${
                isGlobalState
                  ? 'border-[#B28A45] bg-[#ECE0C4]/90 text-[#651F27] hover:bg-[#651F27] hover:text-[#F3E8D0] shadow-[0_4px_12px_rgba(101,31,39,0.15)]'
                  : 'border-[#e5c158]/50 bg-[#1a050b]/80 text-[#f7f3e8] hover:text-[#e5c158] shadow-[0_4px_12px_rgba(229,193,88,0.15)]'
              }`}
              title={isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
              aria-label={isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
            >
              {isPlaying ? (
                <Volume2 className="h-3.5 w-3.5 text-[#C96B2C] animate-pulse shrink-0" />
              ) : (
                <VolumeX className="h-3.5 w-3.5 text-[#B28A45] shrink-0" />
              )}
              <span className="font-cinzel tracking-[0.1em] font-bold whitespace-nowrap">
                {isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
              </span>
            </button>

            {/* REGISTER NOW Button (English Only) */}
            <a
              href={registerItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 inline-flex items-center justify-center gap-2 px-5 py-2 min-h-[38px] rounded-full border text-[11px] font-sans font-bold tracking-[0.14em] uppercase transition-all duration-300 transform hover:scale-105 shadow-md shrink-0 ${
                isGlobalState
                  ? 'border-[#B28A45] bg-[#651F27] text-[#F3E8D0] hover:bg-[#263A59] shadow-[0_4px_15px_rgba(101,31,39,0.3)]'
                  : 'border-[#e5c158]/60 bg-gradient-to-r from-[#1a050b] via-[#2d0a15] to-[#1a050b] text-[#f7f3e8] hover:text-[#e5c158] shadow-[0_4px_15px_rgba(229,193,88,0.2)]'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C96B2C] shrink-0" />
              <span className="font-cinzel tracking-[0.15em] font-bold">
                {registerItem.nameLine1} {registerItem.nameLine2}
              </span>
            </a>
          </div>

          {/* Mobile Action Group: Music Toggle + Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {/* Tulsi Naad Music Toggle Button — Mobile */}
            <button
              onClick={toggleMusic}
              className={`px-2.5 py-1.5 min-h-[36px] rounded-lg border text-[10px] font-sans font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shrink-0 ${
                isGlobalState
                  ? 'border-[#B28A45]/50 bg-[#651F27] text-[#F3E8D0] shadow-sm'
                  : 'border-[#e5c158]/40 bg-[#1a050b]/85 text-[#f7f3e8] shadow-sm'
              }`}
              title={isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
              aria-label={isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
            >
              {isPlaying ? (
                <Volume2 className="h-3.5 w-3.5 text-[#C96B2C] animate-pulse shrink-0" />
              ) : (
                <VolumeX className="h-3.5 w-3.5 opacity-85 shrink-0" />
              )}
              <span className="font-cinzel tracking-wider text-[10px] font-bold whitespace-nowrap">
                {isPlaying ? 'Silence the Naad' : 'Feel the Tulsi Naad'}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isGlobalState
                  ? 'border-[#B28A45]/40 bg-[#651F27] text-[#F3E8D0]'
                  : 'border-[#e5c158]/30 bg-[#1a050b]/80 text-[#f7f3e8]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:hidden fixed inset-0 top-[52px] z-40 border-b-2 px-6 py-8 overflow-y-auto flex flex-col justify-between ${
              isGlobalState
                ? 'bg-[#F4EAD3] border-[#B28A45]/50 text-[#191817]'
                : 'bg-[#1a050b]/98 backdrop-blur-2xl border-[#e5c158]/40 text-[#f7f3e8]'
            }`}
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
                    className={`flex items-center justify-between py-3 border-b group transition-colors ${
                      isGlobalState
                        ? 'border-[#B28A45]/20'
                        : 'border-[#e5c158]/20'
                    } ${
                      isActive
                        ? isGlobalState
                          ? 'text-[#651F27] font-bold'
                          : 'text-[#e5c158] font-bold'
                        : isGlobalState
                        ? 'text-[#191817] hover:text-[#651F27]'
                        : 'text-[#f7f3e8]/90 hover:text-[#e5c158]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs font-bold text-[#C96B2C] tracking-widest">
                        0{idx + 1}
                      </span>
                      <span className="font-cinzel text-base font-bold tracking-[0.15em] uppercase">
                        {item.nameLine1} {item.nameLine2}
                      </span>
                    </div>
                    <span className="text-lg opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                );
              })}

              {/* Mobile REGISTER NOW Link (English Only) */}
              <a
                href={registerItem.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mt-4 flex items-center justify-between py-3.5 px-5 rounded-xl border-2 shadow-lg ${
                  isGlobalState
                    ? 'border-[#B28A45] bg-[#651F27] text-[#F3E8D0]'
                    : 'border-[#e5c158] bg-[#2d0a15] text-[#f7f3e8]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs font-bold text-[#C96B2C] tracking-widest">
                    09
                  </span>
                  <span
                    className={`font-cinzel text-base font-bold tracking-[0.15em] uppercase ${
                      isGlobalState ? 'text-[#F3E8D0]' : 'text-[#f7f3e8]'
                    }`}
                  >
                    REGISTER NOW
                  </span>
                </div>
                <Sparkles className="h-4 w-4 text-[#C96B2C]" />
              </a>
            </div>

            <div
              className={`mt-8 text-center pt-4 border-t font-sans text-xs ${
                isGlobalState ? 'border-[#B28A45]/20 text-[#191817]/60' : 'border-[#e5c158]/20 text-[#e8dfd1]/60'
              }`}
            >
              <p>Tulsi Mahotsav 2026 · Hindi Samiti MITS-DU</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
