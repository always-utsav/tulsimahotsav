'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MobileHomepageMandalaHeroProps {
  className?: string;
}

/**
 * MobileHomepageMandalaHero
 * Dedicated, isolated Mobile Homepage Hero Mandala component.
 * Reproduces the exact visual construction of the reference PageHeader + MandalaMotion system:
 * - Outer ornamental-mandala.webp rotates clockwise (360 deg over 90s, linear, infinite).
 * - Inner madala-animation-inner-element.webp remains COMPLETELY STATIC in the center.
 * - Rendered over the dark maroon gradient background (from-[#3A0913] via-[#4A1219] to-[#3A0913]).
 * - Completely isolated from the shared MandalaMotion component used on internal pages.
 */
export const MobileHomepageMandalaHero: React.FC<MobileHomepageMandalaHeroProps> = ({
  className = '',
}) => {
  return (
    <section
      className={`relative w-full pt-[52px] sm:pt-[56px] pb-8 sm:pb-12 overflow-hidden bg-gradient-to-r from-[#3A0913] via-[#4A1219] to-[#3A0913] border-b border-[#e5c158]/30 min-h-[380px] sm:min-h-[440px] flex items-center justify-center select-none shadow-xl ${className}`}
    >
      {/* Centered Layered Mandala Visual System (Artwork Layer: 0.90 Opacity) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ opacity: 0.90 }}
      >
        <div
          className="relative flex items-center justify-center pointer-events-none select-none w-[680px] h-[680px]"
          aria-hidden="true"
        >
          {/* Outer Layer: Transparent No-BG Colourful Mandala — Slow Clockwise Rotation (90s, linear, infinite) */}
          <motion.img
            src="/assets_no_bg/ornamental-mandala.webp"
            alt="Tulsi Mahotsav Mandala"
            loading="lazy"
            decoding="async"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(101,31,39,0.15)]"
          />

          {/* Inner Layer: Static home-page-hero.webp Center Artwork — COMPLETELY STATIC (NO ROTATION) */}
          <img
            src="/assets_webp/home-page-hero.webp"
            alt="Tulsi Mahotsav 2026"
            loading="lazy"
            decoding="async"
            className="absolute inset-[25%] w-[50%] h-[50%] object-contain block drop-shadow-xl"
          />
        </div>
      </div>

      {/* Lower Central Full-Width Festival Title Overlay Layer (Text Layer: 1.00 Opacity) */}
      <div className="absolute left-1/2 bottom-[8%] sm:bottom-[10%] -translate-x-1/2 w-full max-w-[90%] mx-auto z-10 pointer-events-none text-center flex flex-col items-center justify-center">
        <h1
          className="text-[33px] xs:text-[26px] sm:text-3xl md:text-4xl font-black tracking-[0.05em] text-[#F7F3E8] uppercase leading-none whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-cinzel-dec), serif',
            WebkitTextStroke: '0.5px #3A0913',
            textShadow:
              '0 2px 0 #3A0913, 0 3px 8px rgba(0,0,0,0.75), 0 0 14px rgba(58,9,19,0.5)',
          }}
        >
          TULSI MAHOTSAV
        </h1>
        <div className="flex items-center justify-center gap-2 mt-1 sm:mt-1.5">
          <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-r from-transparent to-[#E5C158]" />
          <span
            className="text-base sm:text-sm font-bold tracking-[0.25em] text-[#E5C158] uppercase"
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              textShadow: '0 1px 4px rgba(0,0,0,0.8)',
            }}
          >
            2026
          </span>
          <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-l from-transparent to-[#E5C158]" />
        </div>
      </div>
    </section>
  );
};
