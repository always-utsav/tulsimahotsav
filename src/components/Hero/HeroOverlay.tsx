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

  // Resolve responsive position classes:
  // Mobile (< md): Phase 1 -> Right-Bottom, Phase 2 -> Top-Left, Phase 3 -> Left-Bottom
  // Desktop (md:): Phase 1 -> Top-Left, Phase 2 -> Center-Right, Phase 3 -> Bottom-Left (100% UNTOUCHED)
  const getPhasePositionClasses = (phaseId: string) => {
    switch (phaseId) {
      case 'opening':
        // Mobile: RIGHT BOTTOM | Desktop: TOP LEFT (unaltered)
        return 'bottom-[18vh] right-[6vw] items-end text-right max-w-[80vw] sm:max-w-[340px] md:top-36 md:left-16 md:bottom-auto md:right-auto md:items-start md:text-left md:max-w-xl';

      case 'expansion':
        // Mobile: TOP LEFT | Desktop: CENTER RIGHT (unaltered)
        return 'top-[15vh] left-[6vw] items-start text-left max-w-[80vw] sm:max-w-[340px] md:top-1/2 md:-translate-y-1/2 md:right-20 md:left-auto md:items-end md:text-right md:max-w-xl';

      case 'anticipation':
        // Mobile: LEFT BOTTOM | Desktop: BOTTOM LEFT (unaltered)
        return 'bottom-[18vh] left-[6vw] items-start text-left max-w-[80vw] sm:max-w-[340px] md:bottom-28 md:left-16 md:top-auto md:right-auto md:items-start md:text-left md:max-w-xl';

      default:
        return 'top-1/2 -translate-y-1/2 left-6 md:left-16 items-start text-left max-w-xl';
    }
  };

  const isRightAlignedMobile = activePhase?.id === 'opening';

  // Smooth fade-out for Scroll Indicator as user begins scrolling (fades 15 -> 40)
  const scrollIndicatorOpacity =
    currentFrame <= 15 ? 1 : Math.max(0, 1 - (currentFrame - 15) / 25);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-12 overflow-hidden">
      <AnimatePresence mode="wait">
        {activePhase && (
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.97 }}
            animate={{
              opacity: getPhaseOpacity(activePhase),
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
            }}
            exit={{ opacity: 0, y: -15, filter: 'blur(6px)', scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute flex flex-col ${getPhasePositionClasses(activePhase.id)}`}
          >
            {/* Accent badge / Eyebrow */}
            {activePhase.eyebrow && (
              <motion.div
                initial={{ opacity: 0, x: isRightAlignedMobile ? 15 : -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`mb-2 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5c158]/30 bg-[#1a050b]/70 px-3.5 sm:px-4 py-1 backdrop-blur-md ${
                  isRightAlignedMobile ? 'self-end md:self-start' : activePhase.id === 'expansion' ? 'self-start md:self-end' : 'self-start md:self-start'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] animate-pulse" />
                <span className="font-sans text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.22em] text-[#e5c158] uppercase">
                  {activePhase.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Main Display Title (Hindi Headline) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-[#f7f3e8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              {activePhase.title}
            </motion.h1>

            {/* Subtitle (English Supporting Line - Tightened Gap on Mobile) */}
            {activePhase.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mt-1.5 md:mt-4 font-sans text-xs sm:text-sm md:text-lg font-light tracking-wide text-[#e8dfd1]/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {activePhase.subtitle}
              </motion.p>
            )}

            {/* Cultural Ornamental Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className={`mt-3 md:mt-6 h-[1px] w-16 md:w-24 bg-gradient-to-r ${
                isRightAlignedMobile
                  ? 'from-transparent via-[#e5c158]/60 to-[#e5c158] origin-right md:from-[#e5c158] md:via-[#e5c158]/60 md:to-transparent md:origin-left'
                  : activePhase.id === 'expansion'
                  ? 'from-[#e5c158] via-[#e5c158]/60 to-transparent origin-left md:from-transparent md:via-[#e5c158]/60 md:to-[#e5c158] md:origin-right'
                  : 'from-[#e5c158] via-[#e5c158]/60 to-transparent origin-left'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator overlay at center bottom (fades out as scrolling begins) */}
      {currentFrame < 42 && (
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none z-20"
        >
          <span className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.3em] uppercase text-[#e8dfd1]/80 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            SCROLL TO EXPLORE
          </span>
          <div className="h-8 sm:h-9 w-4 sm:w-5 rounded-full border border-[#e5c158]/50 p-1 flex justify-center backdrop-blur-sm shadow-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-[#e5c158]"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};