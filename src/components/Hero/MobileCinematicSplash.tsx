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
 * - Robust audio-first autoplay: attempts unmuted autoplay, silently falls back to muted autoplay if restricted by browser policy.
 * - Single-flight playback state machine: retries on canplay if media is buffering on cold load; never dismisses splash prematurely on slow networks.
 * - Exits ONLY when video genuinely finishes (onEnded) or unrecoverable error occurs (onError), using a smooth 700ms fade transition.
 */
export const MobileCinematicSplash: React.FC<MobileCinematicSplashProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTriggeredExit = useRef(false);
  const isPlayingRef = useRef(false);
  const isAttemptingRef = useRef(false);

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

  // Completion trigger after 700ms fade out transition completes
  useEffect(() => {
    if (isFadingOut) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 750);
      return () => clearTimeout(completionTimer);
    }
  }, [isFadingOut, onComplete]);

  // Audio-First Autoplay Handler
  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || isPlayingRef.current || isAttemptingRef.current) return;
    isAttemptingRef.current = true;

    try {
      // Attempt 1: Unmuted Autoplay (Audio Enabled by Default)
      video.muted = false;
      await video.play();
      isPlayingRef.current = true;
    } catch (err) {
      console.warn('[MobileCinematicSplash] Unmuted autoplay restricted, attempting muted fallback:', err);
      try {
        // Attempt 2: Muted Autoplay Fallback (Silent Fallback)
        video.muted = true;
        await video.play();
        isPlayingRef.current = true;
      } catch (mutedErr) {
        console.warn('[MobileCinematicSplash] Autoplay pending media stream or gesture:', mutedErr);
        // Do NOT set isPlayingRef = true here so onCanPlay can retry when bytes arrive!
      }
    } finally {
      isAttemptingRef.current = false;
    }
  }, []);

  // Trigger initial playback attempt on mount
  useEffect(() => {
    attemptPlay();
  }, [attemptPlay]);

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
        preload="auto"
        onCanPlay={attemptPlay}
        onPlaying={() => {
          isPlayingRef.current = true;
        }}
        onEnded={triggerExit}
        onError={(e) => {
          console.warn('[MobileCinematicSplash] Unrecoverable video load error, completing splash:', e);
          triggerExit();
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
