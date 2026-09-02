'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PageShell } from '@/components/Layout/PageShell';
import { ALL_EVENTS } from '@/data/eventsData';
import { SITE_CONFIG } from '@/config/siteConfig';
import { MandalaMotion } from '@/components/Decorative/MandalaMotion';
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Users,
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const event = ALL_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <PageShell>
        <div className="py-40 text-center px-4">
          <h1 className="font-serif text-3xl text-[#F3E8D0]">Event Not Found</h1>
          <Link href="/events" className="mt-4 inline-block font-cinzel text-sm text-[#C96B2C]">
            ← Return to All Events
          </Link>
        </div>
      </PageShell>
    );
  }

  // Filter out any judging criteria items and select top 2-3 concise, important rules
  const displayRules = event.rules
    .filter((rule) => !rule.toLowerCase().includes('judging criteria'))
    .slice(0, 3);

  return (
    <PageShell>
      {/* Event Poster Top Banner — Unified Master Deep Maroon & Mandala Style */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-r from-[#3A0913] via-[#4A1219] to-[#3A0913] border-b border-[#e5c158]/30 shadow-xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-85 z-0">
          <MandalaMotion size={680} opacity={0.85} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-[#e5c158] hover:text-[#f7f3e8] uppercase tracking-widest mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO ALL EVENTS</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Number, Titles & Quick Meta */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5c158]/40 bg-[#651F27]/40 px-4 py-1.5 backdrop-blur-md mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5c158] animate-pulse" />
                <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#e5c158] uppercase">
                  {event.category === 'competition' ? `EVENT NO. ${event.number}` : `CHAPTER NO. ${event.number}`}
                </span>
              </div>

              <h1
                className="font-serif text-4xl sm:text-6xl font-extrabold text-[#f7f3e8] leading-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                {event.titleHindi}
              </h1>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {event.category === 'competition' && (
                  <a
                    href={SITE_CONFIG.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-[#e5c158] bg-[#651F27] text-[#f7f3e8] font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#85232F] hover:text-[#e5c158] shadow-[0_4px_25px_rgba(229,193,88,0.3)] transition-all transform hover:scale-105"
                  >
                    <Sparkles className="h-4 w-4 text-[#e5c158]" />
                    <span>REGISTER FOR THIS EVENT</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Large Colourful WebP Artwork */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 pointer-events-none rounded-[14px] overflow-hidden"
              >
                <img
                  src={event.illustration}
                  alt={event.titleHindi}
                  className="w-full h-full object-cover rounded-[14px] overflow-hidden shadow-lg border border-[#e5c158]/30"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Rules & Event Blueprint */}
      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-10">
        {/* Meta Bar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-[#B28A45]/30 bg-[#191817]/90 shadow-xl">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-[#C96B2C]" />
            <div className="flex flex-col">
              <span className="font-sans text-[10px] text-[#ECE0C4]/60 uppercase tracking-widest font-bold">DATE</span>
              <span className="font-sans text-xs font-semibold text-[#F3E8D0]">{event.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-[#C96B2C]" />
            <div className="flex flex-col">
              <span className="font-sans text-[10px] text-[#ECE0C4]/60 uppercase tracking-widest font-bold">TIME</span>
              <span className="font-sans text-xs font-semibold text-[#F3E8D0]">{event.time}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-[#C96B2C]" />
            <div className="flex flex-col">
              <span className="font-sans text-[10px] text-[#ECE0C4]/60 uppercase tracking-widest font-bold">VENUE</span>
              <span className="font-sans text-xs font-semibold text-[#F3E8D0]">{event.venue}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-[#C96B2C]" />
            <div className="flex flex-col">
              <span className="font-sans text-[10px] text-[#ECE0C4]/60 uppercase tracking-widest font-bold">REWARDS</span>
              <span className="font-sans text-xs font-semibold text-[#B28A45]">Trophies & Merit</span>
            </div>
          </div>
        </div>

        {/* Section: About (Hindi Description Only) */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 border-b border-[#B28A45]/30 pb-3">
            <FileText className="h-5 w-5 text-[#C96B2C]" />
            <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#651F27] uppercase tracking-wider">
              ABOUT THE EVENT · विवरण
            </h2>
          </div>
          <p
            className="font-serif text-base sm:text-lg text-[#651F27] leading-relaxed font-medium"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            {event.aboutHindi}
          </p>
        </div>

        {/* Section: Participation & Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 rounded-2xl border border-[#B28A45]/30 bg-[#191817]/60">
            <div className="flex items-center gap-3 border-b border-[#B28A45]/30 pb-3">
              <Users className="h-5 w-5 text-[#C96B2C]" />
              <h3 className="font-cinzel text-base font-bold text-[#F3E8D0] uppercase tracking-wider">
                WHO CAN PARTICIPATE
              </h3>
            </div>
            <p className="font-sans text-sm text-[#ECE0C4]/90">{event.whoCanParticipate}</p>
          </div>

          <div className="space-y-4 p-6 rounded-2xl border border-[#B28A45]/30 bg-[#191817]/60">
            <div className="flex items-center gap-3 border-b border-[#B28A45]/30 pb-3">
              <Sparkles className="h-5 w-5 text-[#C96B2C]" />
              <h3 className="font-cinzel text-base font-bold text-[#F3E8D0] uppercase tracking-wider">
                EVENT FORMAT
              </h3>
            </div>
            <ul className="space-y-2">
              {event.format.map((item, idx) => (
                <li key={idx} className="font-sans text-xs sm:text-sm text-[#ECE0C4]/90 flex items-start gap-2">
                  <span className="text-[#C96B2C] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section: Rules & Guidelines (2-3 Concise Points Only, No Judging Criteria) */}
        {displayRules.length > 0 && (
          <div className="space-y-4 p-6 rounded-2xl border border-[#B28A45]/30 bg-[#191817]/90">
            <div className="flex items-center gap-3 border-b border-[#B28A45]/30 pb-3">
              <CheckCircle2 className="h-5 w-5 text-[#C96B2C]" />
              <h3 className="font-cinzel text-base font-bold text-[#F3E8D0] uppercase tracking-wider">
                RULES & GUIDELINES · नियम एवं शर्तें
              </h3>
            </div>
            <ul className="space-y-2.5">
              {displayRules.map((rule, idx) => (
                <li key={idx} className="font-sans text-xs sm:text-sm text-[#ECE0C4]/90 flex items-start gap-3 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-[#B28A45] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom CTA */}
        {event.category === 'competition' && (
          <div className="text-center p-8 rounded-2xl border-2 border-[#B28A45] bg-gradient-to-r from-[#651F27] via-[#263A59] to-[#651F27] shadow-2xl">
            <h3
              className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E8D0]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              साहित्य और कला के इस महाकुंभ का हिस्सा बनें
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#ECE0C4]/90 mt-2 max-w-lg mx-auto">
              Secure your spot for {event.titleEnglish} at Tulsi Mahotsav 2026.
            </p>
            <a
              href={SITE_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#B28A45] bg-[#191817] text-[#F3E8D0] font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#C96B2C] transition-all transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4 text-[#C96B2C]" />
              <span>REGISTER NOW VIA CENTRAL LINK</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        )}
      </section>
    </PageShell>
  );
}
