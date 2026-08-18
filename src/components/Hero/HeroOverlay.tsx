'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_CONFIG, HeroTextPhase } from '@/config/heroConfig';

interface HeroOverlayProps {
  currentFrame: number;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ currentFrame }) => {
  // Find currently active text phase
  const activePhase = HERO_CONFIG.phases.find(
    (phase) => currentFrame >= phase.startFrame && currentFrame <= phase.endFrame
  );

  // Helper for opacity calculation inside phase
  const getPhaseOpacity = (phase: HeroTextPhase) => {
    if (currentFrame < phase.fadeInStart || currentFrame > phase.fadeOutEnd) return 0;
    if (currentFrame >= phase.fadeInEnd && currentFrame <= phase.fadeOutStart) return 1;

    if (currentFrame < phase.fadeInEnd) {
      return (currentFrame - phase.fadeInStart) / (phase.fadeInEnd - phase.fadeInStart);
    }
    if (currentFrame > phase.fadeOutStart) {
      return 1 - (currentFrame - phase.fadeOutStart) / (phase.fadeOutEnd - phase.fadeOutStart);
    }
    return 0;
  };

  // Helper to resolve Tailwind position classes
  const getPositionClasses = (position: HeroTextPhase['position']) => {
    switch (position) {
      case 'top-left':
        return 'top-28 left-6 md:top-36 md:left-16 items-start text-left max-w-xl';
      case 'top-right':
        return 'top-28 right-6 md:top-36 md:right-16 items-end text-right max-w-xl';
      case 'center-left':
        return 'top-1/2 -translate-y-1/2 left-6 md:left-20 items-start text-left max-w-xl';
      case 'center-right':
        return 'top-1/2 -translate-y-1/2 right-6 md:right-20 items-end text-right max-w-xl';
      case 'bottom-left':
        return 'bottom-20 left-6 md:bottom-28 md:left-16 items-start text-left max-w-xl';
      case 'bottom-right':
        return 'bottom-20 right-6 md:bottom-28 md:right-16 items-end text-right max-w-xl';
      default:
        return 'top-1/2 -translate-y-1/2 left-6 md:left-16 items-start text-left max-w-xl';
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-12 overflow-hidden">
      <AnimatePresence mode="wait">
        {activePhase && (
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.96 }}
            animate={{
              opacity: getPhaseOpacity(activePhase),
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{ opacity: 0, y: -20, filter: 'blur(8px)', scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute flex flex-col ${getPositionClasses(activePhase.position)}`}
          >
            {/* Accent badge / Eyebrow */}
            {activePhase.eyebrow && (
              <motion.div
                initial={{ opacity: 0, x: activePhase.textAlign === 'right' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e5c158]/30 bg-[#1a050b]/60 px-4 py-1.5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] animate-pulse" />
                <span className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#e5c158] uppercase">
                  {activePhase.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Main Display Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.03em] leading-[1.05] text-[#f7f3e8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] uppercase"
            >
              {activePhase.title}
            </motion.h1>

            {/* Subtitle */}
            {activePhase.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-4 font-sans text-sm md:text-lg font-light tracking-wide text-[#e8dfd1]/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {activePhase.subtitle}
              </motion.p>
            )}

            {/* Cultural Ornamental Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className={`mt-6 h-[1px] w-24 bg-gradient-to-r ${
                activePhase.textAlign === 'right'
                  ? 'from-transparent via-[#e5c158]/60 to-[#e5c158] origin-right'
                  : 'from-[#e5c158] via-[#e5c158]/60 to-transparent origin-left'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator overlay at bottom center (visible during early frames) */}
      {currentFrame < 60 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#e8dfd1]/70 font-medium">
            SCROLL TO EXPLORE
          </span>
          <div className="h-9 w-5 rounded-full border border-[#e5c158]/40 p-1 flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-[#e5c158]"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};
