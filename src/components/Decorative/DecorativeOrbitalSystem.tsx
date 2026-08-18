'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/siteConfig';

interface DecorativeOrbitalSystemProps {
  className?: string;
  variant?: 'left' | 'right' | 'center';
}

export const DecorativeOrbitalSystem: React.FC<DecorativeOrbitalSystemProps> = ({
  className = '',
  variant = 'left',
}) => {
  // Completely remove midCircle, leftStrip, and rightStrip from render tree
  if (variant === 'center') {
    return null;
  }

  const isLeft = variant === 'left';

  return (
    <div
      className={`pointer-events-none absolute ${
        isLeft ? '-left-20 top-1/4' : '-right-20 top-1/3'
      } z-0 hidden lg:block opacity-25 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[400px] h-[400px]"
      >
        {/* Only leftCircle / rightCircle mandala remains untouched */}
        <motion.img
          src={isLeft ? SITE_CONFIG.assets.leftCircle : SITE_CONFIG.assets.rightCircle}
          alt=""
          animate={{ rotate: isLeft ? 360 : -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};
