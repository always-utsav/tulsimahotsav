'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroLoaderProps {
  progress: number; // 0 to 1
}

export const HeroLoader: React.FC<HeroLoaderProps> = ({ progress }) => {
  const percentage = Math.round(progress * 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0204] px-4"
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#2d0a15]/40 via-transparent to-transparent pointer-events-none" />

      {/* Center Cultural Emblem & Loader */}
      <div className="relative flex flex-col items-center max-w-sm text-center">
        {/* Animated Emblem */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="relative mb-8 h-20 w-20 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full stroke-[#e5c158]/50 fill-none stroke-[1.5]">
            <circle cx="50" cy="50" r="45" strokeDasharray="6 6" />
            <circle cx="50" cy="50" r="35" />
            <polygon points="50,15 60,40 85,50 60,60 50,85 40,60 15,50 40,40" stroke="#e5c158" strokeWidth="1" />
          </svg>
          <div className="absolute h-3 w-3 rounded-full bg-[#e5c158] shadow-[0_0_12px_#e5c158]" />
        </motion.div>

        {/* Title */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#f7f3e8] uppercase mb-2">
          Tulsi Mahotsav
        </h2>
        <p className="font-sans text-[11px] tracking-[0.3em] text-[#e5c158]/80 uppercase mb-8">
          Preparing Cinematic Experience
        </p>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-[#1a050b] rounded-full overflow-hidden border border-[#e5c158]/20 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#c59b27] via-[#e5c158] to-[#f3db83] shadow-[0_0_10px_#e5c158]"
            style={{ width: `${percentage}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Percentage Counter */}
        <span className="mt-3 font-cinzel text-xs tracking-widest text-[#e8dfd1]/70 font-semibold">
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
};
