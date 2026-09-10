'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MobileHomepageMandalaProps {
  className?: string;
}

/**
 * MobileHomepageMandala
 * Dedicated, isolated Mobile Homepage Hero Mandala component.
 * Reproduces the exact 2-layer rotation animation system used on internal pages
 * (Schedule, Events, Guest, Team, Gallery, etc.) while remaining completely independent.
 */
export const MobileHomepageMandala: React.FC<MobileHomepageMandalaProps> = ({
  className = '',
}) => {
  return (
    <section
      className={`relative w-full pt-[52px] sm:pt-[56px] overflow-hidden bg-gradient-to-r from-[#3A0913] via-[#4A1219] to-[#3A0913] border-b border-[#e5c158]/30 min-h-[280px] sm:min-h-[340px] flex items-center justify-center select-none shadow-xl ${className}`}
    >
      {/* Centered Layered Rotating Mandala Artwork — Exact Reproduction of Reference Implementation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-85 z-0">
        <div
          className="relative flex items-center justify-center pointer-events-none select-none w-[680px] h-[680px]"
          style={{ opacity: 0.85 }}
          aria-hidden="true"
        >
          {/* Outer Layer: Transparent No-BG Colourful Mandala — Slow Clockwise Rotation */}
          <motion.img
            src="/assets_no_bg/ornamental-mandala.webp"
            alt="Tulsi Mahotsav Mandala"
            loading="lazy"
            decoding="async"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(101,31,39,0.15)]"
          />

          {/* Inner Layer: Transparent No-BG Inner Element — Counter-Clockwise Rotation */}
          <motion.img
            src="/assets_webp/madala-animation-inner-element.webp"
            alt=""
            loading="lazy"
            decoding="async"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[14%] w-[72%] h-[72%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};
