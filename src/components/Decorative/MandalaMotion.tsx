'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MandalaMotionProps {
  className?: string;
  size?: number; // e.g. 600
  opacity?: number; // e.g. 0.85
}

export const MandalaMotion: React.FC<MandalaMotionProps> = ({
  className = '',
  size = 650,
  opacity = 0.85,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      {/* Outer Layer: Transparent No-BG Colourful Mandala — Slow Clockwise Rotation */}
      <motion.img
        src="/assets_no_bg/ornamental-mandala.webp"
        alt=""
        loading="lazy"
        decoding="async"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(101,31,39,0.15)]"
      />

      {/* Inner Layer: Transparent No-BG Inner Element — Counter-Clockwise Rotation */}
      <motion.img
        src="/assets_no_bg/madala-animation-inner-element.webp"
        alt=""
        loading="lazy"
        decoding="async"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[14%] w-[72%] h-[72%] object-contain"
      />
    </div>
  );
};
