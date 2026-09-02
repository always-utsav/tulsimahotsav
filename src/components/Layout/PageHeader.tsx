'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MandalaMotion } from '@/components/Decorative/MandalaMotion';

interface PageHeaderProps {
  titleHindi: string;
  titleEnglish?: string;
  subtitleHindi?: string;
  subtitleEnglish?: string;
  eyebrow?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  titleHindi,
  subtitleHindi,
  eyebrow = 'TULSI MAHOTSAV 2026',
}) => {
  return (
    <header className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden bg-gradient-to-r from-[#3A0913] via-[#4A1219] to-[#3A0913] border-b border-[#e5c158]/30 shadow-xl">
      {/* Centered Layered Rotating Mandala Artwork */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-85 z-0">
        <MandalaMotion size={680} opacity={0.85} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-[#e5c158]/40 bg-[#651F27]/40 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] animate-pulse" />
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#e5c158] uppercase">
            {eyebrow}
          </span>
        </motion.div>

        {/* Main Devanagari Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f7f3e8] drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] leading-[1.18] sm:leading-[1.15]"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
        >
          {titleHindi}
        </motion.h1>

        {/* Supporting Hindi Poetry / Description Line (Directly Below Hindi Main Heading) */}
        {subtitleHindi && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 max-w-2xl text-center"
          >
            <p
              className="font-serif text-lg sm:text-xl italic text-[#F3E8D0] font-semibold leading-relaxed"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              “{subtitleHindi}”
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
};
