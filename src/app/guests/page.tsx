'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { GUEST_PROFILES } from '@/data/guestsData';
import { Sparkles, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GuestsPage() {
  return (
    <PageShell>
      <PageHeader
        titleHindi="माननीय अतिथि"
        titleEnglish="GUESTS & ARTISTS"
        subtitleHindi="जहाँ विद्वता, कविता और कला के मूर्धन्य हस्ताक्षर पधारते हैं।"
        subtitleEnglish="Distinguished Chief Guests, Renowned Poets, and Devotional Artists gracing Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {GUEST_PROFILES.map((guest, idx) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col rounded-2xl border border-[#B28A45]/40 bg-[#F3E8D0]/90 overflow-hidden shadow-xl p-6 text-center group hover:border-[#651F27] transition-all"
            >
              {/* Cultural Photo Frame Treatment */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#191817] border border-[#B28A45]/40 mb-6 p-3 shadow-inner">
                <img
                  src={guest.image}
                  alt={guest.nameEnglish}
                  className="w-full h-full object-cover rounded-lg filter drop-shadow opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                {!guest.isConfirmed && (
                  <div className="absolute inset-0 bg-[#191817]/70 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-[#F3E8D0]">
                    <Info className="h-8 w-8 text-[#C96B2C] mb-2" />
                    <span className="font-cinzel text-xs font-bold uppercase tracking-widest">
                      ANNOUNCEMENT SOON
                    </span>
                    <span
                      className="font-serif text-xs text-[#ECE0C4]/80 mt-1"
                      style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                    >
                      शीघ्र घोषित किया जाएगा
                    </span>
                  </div>
                )}
              </div>

              {/* Guest Information */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-sans text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest block mb-1">
                    {guest.category.replace('_', ' ').toUpperCase()}
                  </span>
                  <h3
                    className="font-serif text-2xl font-bold text-[#651F27]"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {guest.nameHindi}
                  </h3>
                  <span className="font-cinzel text-xs font-bold text-[#263A59] uppercase tracking-wider block mt-1">
                    {guest.nameEnglish}
                  </span>
                  <p className="font-sans text-xs text-[#651F27] mt-2 font-semibold">
                    {guest.roleEnglish}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B28A45]/30 flex flex-col gap-2 italic">
                  {/* <p
                    className="font-serif text-sm text-[#651F27] font-semibold"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    “{guest.quoteHindi}”
                  </p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guest Announcement Notice Box */}
        <div className="mt-16 text-center p-8 rounded-2xl border border-[#B28A45]/40 bg-[#ECE0C4]/80 max-w-3xl mx-auto shadow-sm">
          <Sparkles className="h-6 w-6 text-[#C96B2C] mx-auto mb-2 animate-pulse" />
          <h4
            className="font-serif text-xl font-bold text-[#651F27]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            आधिकारिक मुख्य अतिथि एवं कवि सूची की घोषणा
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#191817]/85 mt-2 font-medium">
            The full lineup of distinguished Chief Guests, renowned poets from across India, and devotional artists will be announced officially closer to the mahotsav dates.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
