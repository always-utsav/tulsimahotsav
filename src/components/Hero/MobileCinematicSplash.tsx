'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MobileCinematicSplashProps {
  onComplete: () => void;
}

/**
 * MobileCinematicSplash
 * Direct Mobile Splash Experience:
 * - Plays mobile-hero-2.mp4 fullscreen on mobile with audio enabled by default.
 * - If browser blocks unmuted autoplay, gracefully falls back to muted autoplay.
 * - On video end (or failsafe), smoothly fades out over ~700ms directly revealing the mobile homepage underneath.
 */
export const MobileCinematicSplash: React.FC<MobileCinematicSplashProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTriggeredExit = useRef(false);

  // Lock body scroll while splash experience is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const triggerExit = useCallback(() => {
    if (hasTriggeredExit.current) return;
    hasTriggeredExit.current = true;
    setIsFadingOut(true);
  }, []);

  // Completion trigger after fade out transition completes
  useEffect(() => {
    if (isFadingOut) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 750);
      return () => clearTimeout(completionTimer);
    }
  }, [isFadingOut, onComplete]);

  // Audio-First Autoplay with Muted Fallback & Video Failsafe Timer
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = false;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn(
            '[MobileCinematicSplash] Unmuted autoplay blocked by browser policy, falling back to muted autoplay:',
            err
          );
          // Fallback: Enable muted mode and retry autoplay
          video.muted = true;
          video.play().catch((mutedErr) => {
            console.warn('[MobileCinematicSplash] Muted autoplay also blocked, bypassing splash:', mutedErr);
            onComplete();
          });
        });
      }
    }

    const videoFailsafeTimer = setTimeout(() => {
      triggerExit();
    }, 4200); // 4.2s failsafe max video duration

    return () => clearTimeout(videoFailsafeTimer);
  }, [triggerExit, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] w-screen h-screen overflow-hidden bg-[#0a0204] pointer-events-auto select-none"
    >
      <video
        ref={videoRef}
        src="/assets_webp/mobile-hero-2.mp4"
        autoPlay
        playsInline
        onEnded={triggerExit}
        onError={() => {
          console.warn('[MobileCinematicSplash] Video load error, bypassing splash');
          onComplete();
        }}
        className="w-full h-full object-cover block"
      />

      {/* 9:16 Film Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-[#0a0204]/40 to-[#0a0204]/90 z-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0204]/80 to-transparent z-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0204]/80 to-transparent z-30" />
    </motion.div>
  );
};
