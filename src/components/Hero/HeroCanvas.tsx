'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FramePreloader } from '@/utils/framePreloader';
import { HERO_CONFIG } from '@/config/heroConfig';

interface HeroCanvasProps {
  currentFrameIndex: number; // 1 to 290
  onLoadProgress?: (progress: number, isInitialReady: boolean) => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ currentFrameIndex, onLoadProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const preloaderRef = useRef<FramePreloader | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(currentFrameIndex);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Preloader once
  useEffect(() => {
    const preloader = new FramePreloader(
      HERO_CONFIG.totalFrames,
      HERO_CONFIG.framePathPattern,
      HERO_CONFIG.initialPreloadCount
    );
    preloaderRef.current = preloader;

    preloader.startLoading((progress, isInitialReady) => {
      if (isInitialReady) {
        setIsLoaded(true);
      }
      if (onLoadProgress) {
        onLoadProgress(progress, isInitialReady);
      }
    });

    return () => {
      preloader.destroy();
    };
  }, [onLoadProgress]);

  // Sync target frame when prop changes
  useEffect(() => {
    targetFrameRef.current = Math.max(1, Math.min(HERO_CONFIG.totalFrames, currentFrameIndex));
  }, [currentFrameIndex]);

  // Render Loop with smooth target-frame LERP
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let isSubscribed = true;

    const render = () => {
      if (!isSubscribed) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) < 0.01) {
        currentFrameRef.current = target;
      } else {
        currentFrameRef.current += diff * 0.22; // Smooth 22% interpolation step
      }

      const activeFrameIndex = Math.round(currentFrameRef.current);
      const img = preloaderRef.current?.getFrame(activeFrameIndex);

      if (img && ctx) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // Clear canvas
        ctx.fillStyle = '#0a0204';
        ctx.fillRect(0, 0, width, height);

        // Always COVER full screen without letterboxing on both Mobile & Desktop
        const imgWidth = img.naturalWidth || 2560;
        const imgHeight = img.naturalHeight || 1440;
        const imgAspect = imgWidth / imgHeight;
        const canvasAspect = width / height;

        let drawWidth: number;
        let drawHeight: number;

        if (canvasAspect > imgAspect) {
          drawWidth = width;
          drawHeight = width / imgAspect;
        } else {
          drawHeight = height;
          drawWidth = height * imgAspect;
        }

        const offsetX = (width - drawWidth) / 2;
        const offsetY = (height - drawHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      isSubscribed = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Handle Resize & DPR Scaling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0204]">
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Subtle Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-[#0a0204]/30 to-[#0a0204]/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0204]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0204]/80 to-transparent" />
    </div>
  );
};
