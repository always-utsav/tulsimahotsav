'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroCanvas } from '@/components/Hero/HeroCanvas';
import { HeroOverlay } from '@/components/Hero/HeroOverlay';
import { HeroLoader } from '@/components/Hero/HeroLoader';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { PaperTexture } from '@/components/Decorative/PaperTexture';
import { MandalaMotion } from '@/components/Decorative/MandalaMotion';
import { DecorativeOrbitalSystem } from '@/components/Decorative/DecorativeOrbitalSystem';

import { HERO_CONFIG } from '@/config/heroConfig';
import { SITE_CONFIG } from '@/config/siteConfig';
import { COMPETITIONS, FEATURED_NIGHTS } from '@/data/eventsData';
import { HOME_GALLERY_IMAGES } from '@/data/galleryData';
import { getHeroCompleted, setHeroCompleted } from '@/utils/heroState';

import { Sparkles, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  const initialCompleted = getHeroCompleted();
  const [loadProgress, setLoadProgress] = useState(initialCompleted ? 1 : 0);
  const [isInitialReady, setIsInitialReady] = useState(initialCompleted);

  // Continuous target frame index (1 to 290)
  const targetFrameRef = useRef<number>(initialCompleted ? HERO_CONFIG.totalFrames : 1);
  const [currentFrame, setCurrentFrame] = useState(initialCompleted ? HERO_CONFIG.totalFrames : 1);
  const touchStartYRef = useRef<number | null>(null);

  // Sync state for rendering react overlay & navbar
  useEffect(() => {
    let animationFrameId: number;

    const updateFrameState = () => {
      const target = targetFrameRef.current;
      setCurrentFrame((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.05) return target;
        return prev + diff * 0.25;
      });
      animationFrameId = requestAnimationFrame(updateFrameState);
    };

    animationFrameId = requestAnimationFrame(updateFrameState);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Desktop Mouse Wheel & Mobile Touch Interceptor (SCROLL-LATCHED HERO ENGINE)
  useEffect(() => {
    const TOTAL_FRAMES = HERO_CONFIG.totalFrames;
    const SENSITIVITY = 0.35;
    const isMobile = window.innerWidth <= 768;
    // Slower mobile progression so hero takes ~5-6 deliberate finger swipes
    const TOUCH_SENSITIVITY = isMobile ? 0.18 : 0.75;

    let hasHeldFinalFrame = false;

    const handleWheel = (e: WheelEvent) => {
      const current = targetFrameRef.current;
      const scrollY = window.scrollY;

      // Scrolling DOWN
      if (e.deltaY > 0) {
        if (current < TOTAL_FRAMES) {
          e.preventDefault();
          targetFrameRef.current = Math.min(TOTAL_FRAMES, current + e.deltaY * SENSITIVITY * 0.1);
        }
      }
      // Scrolling UP
      else if (e.deltaY < 0) {
        if (scrollY <= 15 && current > 1) {
          e.preventDefault();
          targetFrameRef.current = Math.max(1, current + e.deltaY * SENSITIVITY * 0.1);
        }
      }
    };

    // Mobile Touch Event Handling (Scroll-Latched Final Frame Hold)
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || touchStartYRef.current === null) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;

      const current = targetFrameRef.current;
      const scrollY = window.scrollY;

      if (deltaY > 0) {
        // Swiping DOWN
        if (current < TOTAL_FRAMES) {
          if (e.cancelable) e.preventDefault();
          const next = Math.min(TOTAL_FRAMES, current + deltaY * TOUCH_SENSITIVITY);
          targetFrameRef.current = next;
          if (next >= TOTAL_FRAMES) {
            hasHeldFinalFrame = false;
          }
        } else if (current >= TOTAL_FRAMES && !hasHeldFinalFrame) {
          // HOLD AT FINAL FRAME for the current gesture before allowing page scroll
          if (e.cancelable) e.preventDefault();
          hasHeldFinalFrame = true;
        }
      } else if (deltaY < 0) {
        // Swiping UP
        if (scrollY <= 15 && current > 1) {
          if (e.cancelable) e.preventDefault();
          targetFrameRef.current = Math.max(1, current + deltaY * TOUCH_SENSITIVITY);
          hasHeldFinalFrame = false;
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleLoadProgress = (progress: number, isReady: boolean) => {
    setLoadProgress(progress);
    if (isReady && !isInitialReady) {
      setIsInitialReady(true);
    }
  };

  const normalizedProgress = (currentFrame - 1) / (HERO_CONFIG.totalFrames - 1);

  // Mark hero completed once user reaches past 0.95 progress
  useEffect(() => {
    if (normalizedProgress >= 0.95) {
      setHeroCompleted(true);
    }
  }, [normalizedProgress]);

  return (
    <div className="relative bg-[#0a0204] text-[#f7f3e8] min-h-screen selection:bg-[#e5c158] selection:text-[#0a0204] overflow-x-hidden font-sans">
      {/* Code-based Pure CSS Paper Grain Texture */}
      <PaperTexture />

      {/* Hero Preloader */}
      <AnimatePresence>
        {!isInitialReady && <HeroLoader progress={loadProgress} />}
      </AnimatePresence>

      {/* Persistent Navbar */}
      <Navbar scrollProgress={normalizedProgress} />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-screen h-screen overflow-hidden bg-[#0a0204]">
        <HeroCanvas
          currentFrameIndex={currentFrame}
          onLoadProgress={handleLoadProgress}
        />
        <HeroOverlay currentFrame={Math.round(currentFrame)} />
      </section>

      {/* 2. MAIN CONTENT SURFACE (WARM MUTED PARCHMENT TAN BASE) */}
      <div className="relative z-10 w-full bg-[#F4EAD3] text-[#191817]">
        
        {/* Orbital System transition accent */}
        <DecorativeOrbitalSystem variant="center" />

        {/* SECTION 01 — FESTIVAL INTRODUCTION */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B28A45]/50 bg-[#651F27]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C96B2C] animate-pulse" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#651F27] uppercase">
                {SITE_CONFIG.institutionHindi}
              </span>
            </div>

            {/* Devanagari Title */}
            <h2
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#651F27] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              एक उत्सव। अनेक स्वर।
            </h2>

            {/* English Subtitle */}
            <p className="mt-1 font-cinzel text-sm sm:text-lg font-bold tracking-[0.22em] text-[#C96B2C] uppercase">
              A festival of words, ideas, music, art and expression.
            </p>

            {/* Literary Editorial Paragraph */}
            <div className="mt-4 space-y-4 max-w-3xl text-left sm:text-center">
              <p className="font-sans text-base sm:text-lg text-[#191817] leading-relaxed font-normal">
                Tulsi Mahotsav is a celebration of young voices and Indian cultural expression — a space where poetry finds an audience, ideas find a stage, music fills the evening and art becomes part of a shared memory.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#2A2826] leading-relaxed">
                Rooted in the spirit of Hindi and contemporary student creativity, the Mahotsav brings together competitions, literary gatherings, music, performance and cultural evenings across two memorable days.
              </p>

              <p
                className="font-serif text-lg sm:text-xl text-[#651F27] italic font-semibold mt-4 block"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                “यह केवल मंच पर आने का अवसर नहीं — अपनी आवाज़ को पहचानने का अवसर है।”
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 02 — FESTIVAL DATES SECTION */}
        <section className="relative py-28 px-4 sm:px-8 bg-gradient-to-r from-[#3A0913] via-[#4A1219] to-[#3A0913] border-y border-[#e5c158]/30 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-85 z-0">
            <MandalaMotion size={680} opacity={0.85} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.35em] text-[#e5c158] uppercase">
              THE FESTIVAL DATES
            </span>

            {/* Dramatic Numeral Treatment */}
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-6xl sm:text-8xl md:text-9xl font-black text-[#f7f3e8] tracking-tighter drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                26 — 27
              </span>
              <span className="font-cinzel text-2xl sm:text-4xl font-bold tracking-[0.3em] text-[#e5c158] uppercase mt-2 drop-shadow">
                SEPTEMBER 2026
              </span>
            </div>

            <p
              className="font-serif text-xl sm:text-3xl text-[#F3E8D0] italic font-semibold mt-2"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              दो दिन। अनेक मंच। अनगिनत अभिव्यक्तियाँ।
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#F3E8D0]/90 font-medium flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-[#e5c158]" />
              <span>{SITE_CONFIG.location}</span>
            </p>

            {/* REGISTER NOW Button */}
            <a
              href={SITE_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-3.5 min-h-[48px] rounded-full border-2 border-[#e5c158] bg-[#651F27] text-[#f7f3e8] font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#85232F] hover:text-[#e5c158] shadow-[0_4px_25px_rgba(229,193,88,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4 text-[#e5c158] shrink-0" />
              <div className="flex flex-col items-center justify-center text-center leading-tight gap-[3px]">
                <span className="font-cinzel tracking-[0.2em] font-bold">REGISTER FOR TULSI MAHOTSAV</span>
                <span
                  className="text-[10px] font-serif text-[#ECE0C4]/90 font-medium leading-none"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  पंजीकरण
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* SECTION 03 — NINE COMPETITIONS INDEX */}
        <section className="relative py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#C96B2C] uppercase mb-2">
              COMPETITIONS INDEX · प्रतियोगिताएँ
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-[#651F27] leading-tight"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              अपनी प्रतिभा को मंच दें
            </h2>
            <p className="font-sans text-sm text-[#191817]/80 mt-2 max-w-xl">
              Nine distinct competitive arenas celebrating speech, poetry, music, dance, writing, fine art, quizzes, and visual media.
            </p>
          </div>

          <div className="space-y-20">
            {COMPETITIONS.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative border-b border-[#B28A45]/30 pb-16"
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center justify-between gap-8 lg:gap-16`}
                  >
                    <div className="flex-1 flex items-start gap-6 sm:gap-8">
                      <span className="font-cinzel text-5xl sm:text-7xl font-black text-[#651F27]/30 group-hover:text-[#C96B2C] transition-colors shrink-0">
                        {event.number}
                      </span>
                      <div className="flex flex-col">
                        <h3
                          className="font-serif text-2xl sm:text-4xl font-bold text-[#651F27] group-hover:text-[#C96B2C] transition-colors leading-tight"
                          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                        >
                          {event.titleHindi}
                        </h3>
                        <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C96B2C] uppercase mt-2">
                          {event.titleEnglish}
                        </span>
                        <p
                          className="font-serif text-sm sm:text-base text-[#651F27] italic font-semibold mt-2.5"
                          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                        >
                          “{event.taglineHindi}”
                        </p>
                        <p className="font-sans text-xs sm:text-sm text-[#191817]/85 mt-2 leading-relaxed">
                          {event.aboutEnglish}
                        </p>

                        <div className="mt-5 flex items-center gap-2 font-cinzel text-xs font-bold text-[#651F27] group-hover:text-[#C96B2C] uppercase tracking-wider">
                          <span>EXPLORE EVENT & RULES</span>
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Event Logo Container */}
                    <div className="w-full sm:w-auto flex justify-center shrink-0">
                      <div className="relative w-52 sm:w-72 md:w-80 h-52 sm:h-72 md:h-80 pointer-events-none p-3 sm:p-4 rounded-3xl border-2 border-[#651F27]/70 bg-[#F3E8D0]/40 shadow-md group-hover:border-[#651F27] transition-all">
                        <img
                          src={event.illustration}
                          alt={event.titleEnglish}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(101,31,39,0.2)] group-hover:scale-105 transition-all duration-500 rounded-2xl"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C96B2C] hover:text-[#651F27] uppercase transition-colors"
            >
              <span>VIEW ALL COMPETITION RULES & GUIDELINES</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 04 — SANDHYA / SANSKRITIK MAHOTSAV ADHYAY SECTION */}
        <section className="relative py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#380E15] via-[#4A1219] to-[#380E15] border-y border-[#e5c158]/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#e5c158] uppercase mb-2 block">
                THE EVENING CHAPTERS · प्रमुख अध्याय
              </span>
              <h2
                className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f3e8] tracking-wide leading-tight"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                संध्या एवं सांस्कृतिक महोत्सव अध्याय
              </h2>
            </div>

            <div className="space-y-16">
              {FEATURED_NIGHTS.map((night, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={night.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center gap-8 lg:gap-12 p-6 sm:p-10 rounded-3xl border border-[#e5c158]/35 bg-[#28080F]/90 shadow-[0_10px_35px_rgba(0,0,0,0.4)] overflow-hidden`}
                  >
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#100305] border border-[#e5c158]/30 shrink-0">
                      <img
                        src={night.illustration}
                        alt={night.titleEnglish}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                      <span className="font-cinzel text-xs font-bold text-[#e5c158] tracking-widest uppercase mb-1">
                        CHAPTER {night.number} · {night.date}
                      </span>
                      <h3
                        className="font-serif text-3xl sm:text-4xl font-bold text-[#f7f3e8]"
                        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                      >
                        {night.titleHindi}
                      </h3>
                      <span className="font-cinzel text-sm sm:text-base font-bold text-[#e5c158] uppercase tracking-wider mt-1.5">
                        {night.titleEnglish}
                      </span>
                      <p
                        className="font-serif text-base text-[#F3E8D0] italic font-semibold mt-3"
                        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                      >
                        “{night.taglineHindi}”
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#e8dfd1]/90 mt-3 leading-relaxed">
                        {night.aboutEnglish}
                      </p>

                      <div className="mt-6 pt-4 border-t border-[#e5c158]/25 w-full flex items-center justify-between text-xs font-sans">
                        <span className="text-[#F3E8D0] font-semibold">{night.venue}</span>
                        <span className="font-bold text-[#e5c158]">{night.time}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 05 — PAST GLIMPSES (CENTERED FESTIVAL MOMENTS HEADING) */}
        <section className="relative py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 gap-2">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#C96B2C] uppercase block mb-1">
              FESTIVAL MOMENTS · स्मृतियाँ
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-[#651F27] leading-tight"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              महोत्सव की कुछ झलकियाँ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_GALLERY_IMAGES.slice(0, 3).map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative rounded-2xl overflow-hidden border border-[#B28A45]/30 bg-[#F4EAD3] shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.titleEnglish}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191817] via-transparent to-transparent opacity-75" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col">
                  <span
                    className="font-serif text-lg font-bold text-[#F3E8D0]"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {img.titleHindi}
                  </span>
                  <span className="font-sans text-xs text-[#ECE0C4]/90 mt-0.5">
                    {img.captionEnglish}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C96B2C] hover:text-[#651F27] uppercase transition-colors"
            >
              <span>EXPLORE FULL GALLERY →</span>
            </Link>
          </div>
        </section>

        {/* SECTION 06 — RULEBOOK SECTION */}
        <section className="relative py-20 px-4 sm:px-8 lg:px-12 border-t border-[#B28A45]/30 bg-[#ECE0C4]/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[#C96B2C] uppercase block mb-1.5">
              RULEBOOK · नियमावली
            </span>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold text-[#651F27] leading-tight mb-3"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              तुलसी महोत्सव की नियमावली
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#191817]/80 max-w-xl mb-10 leading-relaxed font-medium">
              प्रतियोगिताओं के संपूर्ण नियम, पात्रता एवं दिशा-निर्देश देखने अथवा डाउनलोड करने हेतु आधिकारिक नियमावली चुनें।
            </p>

            {/* Two Rectangular Clickable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Card 1: Hindi Rulebook */}
              <a
                href={SITE_CONFIG.rulebooks.hindi}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-[#B28A45]/60 bg-[#F3E8D0] shadow-md hover:border-[#651F27] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col text-left">
                  <span
                    className="font-serif text-xl sm:text-2xl font-bold text-[#651F27] group-hover:text-[#C96B2C] transition-colors"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    हिंदी नियमावली
                  </span>
                  <span className="font-cinzel text-xs font-bold text-[#C96B2C] tracking-wider uppercase mt-1">
                    Hindi Rulebook
                  </span>
                </div>
                <div className="h-10 w-10 rounded-full border border-[#B28A45]/50 bg-[#651F27]/10 flex items-center justify-center text-[#651F27] group-hover:bg-[#651F27] group-hover:text-[#F3E8D0] transition-colors shrink-0">
                  <span className="font-sans text-lg font-bold">→</span>
                </div>
              </a>

              {/* Card 2: English Rulebook */}
              <a
                href={SITE_CONFIG.rulebooks.english}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-[#B28A45]/60 bg-[#F3E8D0] shadow-md hover:border-[#651F27] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#651F27] group-hover:text-[#C96B2C] transition-colors">
                    English Rulebook
                  </span>
                  <span className="font-cinzel text-xs font-bold text-[#C96B2C] tracking-wider uppercase mt-1">
                    English Rulebook
                  </span>
                </div>
                <div className="h-10 w-10 rounded-full border border-[#B28A45]/50 bg-[#651F27]/10 flex items-center justify-center text-[#651F27] group-hover:bg-[#651F27] group-hover:text-[#F3E8D0] transition-colors shrink-0">
                  <span className="font-sans text-lg font-bold">→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* RESTRUCTURED GRAND FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
