'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileCinematicSplashProps {
  onComplete: () => void;
}

type SplashStage = 'video' | 'glass' | 'heroReveal' | 'morph' | 'done';

export const MobileCinematicSplash: React.FC<MobileCinematicSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<SplashStage>('video');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll while splash experience is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Explicit JavaScript Autoplay Trigger & Failsafe Timer
  useEffect(() => {
    if (stage === 'video') {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch((err) => {
          console.warn('[MobileCinematicSplash] Autoplay prevented, triggering fallback:', err);
          setStage('glass');
        });
      }

      const failsafeTimer = setTimeout(() => {
        setStage('glass');
      }, 4200); // 4.2s failsafe max video duration

      return () => clearTimeout(failsafeTimer);
    }
  }, [stage]);

  // Staged Just-In-Time Asset Preloader (Prevents initial request bursts)
  useEffect(() => {
    // Stage 2: Preload home-page-hero.webp while video plays (1.5s delay)
    if (stage === 'video') {
      const timer = setTimeout(() => {
        const img = new Image();
        img.src = '/assets_webp/home-page-hero.webp';
      }, 1500);
      return () => clearTimeout(timer);
    }

    // Stage 4/5: Preload outer mandala hero asset during heroReveal hold (1.0s delay)
    if (stage === 'heroReveal') {
      const timer = setTimeout(() => {
        const img = new Image();
        img.src = '/assets_no_bg/ornamental-mandala.webp';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Stage transition sequence controller
  useEffect(() => {
    if (stage === 'glass') {
      // Hold dark maroon glass atmosphere briefly before centered artwork reveal
      stageTimeoutRef.current = setTimeout(() => {
        setStage('heroReveal');
      }, 500);
    } else if (stage === 'heroReveal') {
      // Extended hold (2.4s) for centered home-page-hero.webp as sole visual focus before morph
      stageTimeoutRef.current = setTimeout(() => {
        setStage('morph');
      }, 2400);
    } else if (stage === 'morph') {
      // Synchronized morph & continuous handoff to live mobile homepage
      stageTimeoutRef.current = setTimeout(() => {
        setStage('done');
        onComplete();
      }, 950);
    }

    return () => {
      if (stageTimeoutRef.current) clearTimeout(stageTimeoutRef.current);
    };
  }, [stage, onComplete]);

  // Video event handlers
  const handleVideoEnded = () => {
    if (stage === 'video') {
      setStage('glass');
    }
  };

  const handleVideoError = () => {
    // Graceful fallback to maroon glass & artwork reveal if video load/autoplay fails
    if (stage === 'video') {
      setStage('glass');
    }
  };

  if (stage === 'done') return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden bg-transparent pointer-events-auto select-none"
    >
      {/* STAGE 2: FULL-SCREEN 9:16 CINEMATIC VIDEO WITH VIGNETTE */}
      <AnimatePresence>
        {stage === 'video' && (
          <motion.div
            key="splash-video-stage"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 z-30 w-full h-full overflow-hidden bg-[#0a0204]"
          >
            <video
              ref={videoRef}
              src="/assets_webp/mobile-hero-2.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              onError={handleVideoError}
              className="w-full h-full object-cover block"
            />

            {/* 9:16 Film Vignette Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-[#0a0204]/40 to-[#0a0204]/90 z-30" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0204]/80 to-transparent z-30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0204]/80 to-transparent z-30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* STAGE 4: DARK MAROON BLURRED GLASSMORPHIC ATMOSPHERE */}
      {/* Dissolves smoothly (opacity: 1 -> 0) during 'morph' stage to reveal homepage & navbar underneath */}
      {stage !== 'video' && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'morph' ? 0 : 1 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-10 bg-[#0a0204] bg-radial-gradient from-[#2d0a15]/85 via-[#1a050b]/95 to-[#0a0204] backdrop-blur-2xl"
        />
      )}

      {/* CONTINUOUS HERO ARTWORK BRIDGE (home-page-hero.webp) */}
      {/* Persists continuously across glass -> heroReveal -> morph without unmounting */}
      {(stage === 'glass' || stage === 'heroReveal' || stage === 'morph') && (
        <motion.div
          key="hero-artwork-bridge"
          initial={{ opacity: 0, scale: 1.06, filter: 'blur(14px)', y: 0 }}
          animate={
            stage === 'morph'
              ? {
                  opacity: [1, 1, 0],
                  scale: 0.82,
                  y: '-26vh',
                  filter: 'blur(0px)',
                }
              : stage === 'heroReveal'
              ? {
                  opacity: 1,
                  scale: 1.0,
                  y: 0,
                  filter: 'blur(0px)',
                }
              : {
                  opacity: 0,
                  scale: 1.06,
                  y: 0,
                  filter: 'blur(14px)',
                }
          }
          transition={
            stage === 'morph'
              ? {
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { times: [0, 0.75, 1], duration: 0.95 },
                }
              : { duration: 1.25, ease: [0.16, 1, 0.3, 1] }
          }
          className="absolute inset-0 z-20 w-full h-full flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="relative w-full max-w-md flex justify-center">
            <img
              src="/assets_webp/home-page-hero.webp"
              alt="Tulsi Mahotsav 2026"
              className="w-full h-auto object-contain block drop-shadow-2xl"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
