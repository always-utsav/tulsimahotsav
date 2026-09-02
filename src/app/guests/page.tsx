'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { POTENTIAL_GUESTS, PREVIOUS_GUESTS, Guest } from '@/data/guestsData';
import { motion } from 'framer-motion';

export default function GuestsPage() {
  const potentialFirst10 = POTENTIAL_GUESTS.slice(0, 10);
  const potentialLast4 = POTENTIAL_GUESTS.slice(10, 14);

  const renderGuestCard = (guest: Guest, idx: number) => (
    <motion.div
      key={guest.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (idx % 5) * 0.05 }}
      className="p-3.5 sm:p-5 rounded-2xl border border-[#B28A45]/40 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-start shadow-lg hover:border-[#651F27] transition-all h-full"
    >
      {/* Circular Guest Photograph with Gold Ring */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-full border-2 border-[#B28A45]/70 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1 mb-3 sm:mb-4">
        <img
          src={guest.image || '/assets_png/sample.png'}
          alt={guest.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-full aspect-square"
        />
      </div>

      {/* Guest Name & Designation */}
      <div className="flex flex-col items-center flex-1 justify-start w-full">
        <h3
          className="font-serif text-sm sm:text-base font-bold text-[#651F27] leading-snug"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
        >
          {guest.name}
        </h3>
        {guest.designation && (
          <span
            className="font-serif text-[11px] sm:text-xs text-[#191817]/85 font-medium mt-1 leading-snug"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            {guest.designation}
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <PageShell>
      <PageHeader
        titleHindi="माननीय अतिथि"
        titleEnglish="GUESTS & ARTISTS"
        subtitleHindi="जहाँ विद्वता, कविता और कला के मूर्धन्य हस्ताक्षर पधारते हैं।"
        subtitleEnglish="Distinguished Chief Guests, Renowned Poets, and Devotional Artists gracing Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* SECTION 1: संभावित अतिथिगण (14 Guests - 5 + 5 + 4 Centered) */}
        <div>
          <div className="text-center mb-10">
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              संभावित अतिथिगण
            </h2>
          </div>

          {/* Top 10 Guests (Rows 1 & 2: 5 Cards/Row on Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto">
            {potentialFirst10.map((guest, idx) => renderGuestCard(guest, idx))}
          </div>

          {/* Remaining 4 Guests (Row 3: 4 Cards Centered on Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto mt-3 sm:mt-6">
            {potentialLast4.map((guest, idx) => renderGuestCard(guest, idx + 10))}
          </div>
        </div>

        {/* SECTION 2: पूर्व अतिथिगण (20 Guests - 5 + 5 + 5 + 5) */}
        <div>
          <div className="text-center mb-10">
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              पूर्व अतिथिगण
            </h2>
          </div>

          {/* 20 Previous Guests (4 Rows of 5 Cards on Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto">
            {PREVIOUS_GUESTS.map((guest, idx) => renderGuestCard(guest, idx))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
