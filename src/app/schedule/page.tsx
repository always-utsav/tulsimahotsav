'use client';

import React, { useState } from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { SCHEDULE_DATA } from '@/data/scheduleData';
import { SITE_CONFIG } from '@/config/siteConfig';
import { Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<'01' | '02'>('01');
  const currentSchedule = SCHEDULE_DATA.find((s) => s.dayNumber === activeDay) || SCHEDULE_DATA[0];

  return (
    <PageShell>
      <PageHeader
        titleHindi="समय की लय"
        titleEnglish="FESTIVAL SCHEDULE"
        subtitleHindi="जहाँ हर पल कला, काव्य और संस्कृति का संगीत रचता है।"
        subtitleEnglish="Detailed timeline for 26 & 27 September 2026 at MITS-DU Gwalior"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full border-2 border-[#B28A45]/40 bg-[#ECE0C4]/60 backdrop-blur-md shadow-lg">
            {SCHEDULE_DATA.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                className={`px-6 sm:px-10 py-3 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] transition-all duration-300 ${
                  activeDay === day.dayNumber
                    ? 'bg-[#651F27] text-[#F3E8D0] shadow-md border border-[#B28A45]'
                    : 'text-[#191817]/80 hover:text-[#651F27]'
                }`}
              >
                <span>DAY {day.dayNumber}</span>
                <span className="ml-2 text-[10px] opacity-75">({day.dateDisplay.split(' ')[0]} SEPT)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Banner */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-2xl sm:text-4xl font-bold text-[#651F27]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            {currentSchedule.dayHindi}
          </h2>
          <p className="font-cinzel text-xs sm:text-sm font-bold text-[#C96B2C] tracking-widest uppercase mt-1">
            {currentSchedule.dayEnglish}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#B28A45]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {currentSchedule.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 transition-all ${
                  item.isHighlight
                    ? 'border-[#B28A45] bg-[#C96B2C] shadow-[0_0_12px_rgba(201,107,44,0.8)] scale-125'
                    : 'border-[#B28A45] bg-[#F3E8D0] group-hover:bg-[#651F27]'
                }`}
              />

              <div className="p-6 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 shadow-md hover:border-[#651F27] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[#C96B2C] tracking-wider uppercase">
                    <Clock className="h-3.5 w-3.5" />
                    {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs text-[#191817]/70 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-[#B28A45]" />
                    {item.venue}
                  </span>
                </div>

                <h3
                  className="font-serif text-xl sm:text-2xl font-bold text-[#651F27] group-hover:text-[#C96B2C] transition-colors"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  {item.titleHindi}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#191817]/85 mt-1 font-normal">
                  {item.titleEnglish}
                </p>

                {item.isHighlight && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B28A45]/40 bg-[#651F27]/10 text-[10px] font-sans font-bold text-[#651F27] uppercase tracking-wider">
                    <Sparkles className="h-3 w-3 text-[#C96B2C]" />
                    <span>FEATURED HIGHLIGHT</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Box */}
        <div className="mt-16 text-center p-6 rounded-2xl border border-[#B28A45]/30 bg-[#ECE0C4]/80 max-w-2xl mx-auto shadow-sm">
          <p className="font-sans text-xs text-[#191817]/80 font-medium">
            * Note: Schedule timings and venues are subject to minor adjustments by the organizing team. Please report 15 minutes prior to competition start time.
          </p>
          <a
            href={SITE_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B28A45] bg-[#651F27] text-xs font-cinzel font-bold text-[#F3E8D0] uppercase tracking-widest hover:bg-[#263A59] transition-colors"
          >
            <span>REGISTER FOR EVENTS NOW →</span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
