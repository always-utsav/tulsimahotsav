'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { ALL_EVENTS, COMPETITIONS, FEATURED_NIGHTS } from '@/data/eventsData';
import { SITE_CONFIG } from '@/config/siteConfig';
import { Calendar, ArrowRight, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventsMasterPage() {
  const [filter, setFilter] = useState<'all' | 'competition' | 'featured_night'>('all');

  const filteredEvents =
    filter === 'all'
      ? ALL_EVENTS
      : ALL_EVENTS.filter((e) => e.category === filter);

  return (
    <PageShell>
      <PageHeader
        titleHindi="प्रतियोगिताएँ एवं सांस्कृतिक कार्यक्रम"
        titleEnglish="COMPETITIONS & CULTURAL EVENTS"
        subtitleHindi="जहाँ हर मंच पर प्रतिभा, विचार और संगीत का महासंगम होता है।"
        subtitleEnglish="Explore all 9 competitive events and 6 major evening chapters of Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full border-2 border-[#B28A45]/40 bg-[#ECE0C4]/60 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 sm:px-8 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.18em] transition-all ${
                filter === 'all'
                  ? 'bg-[#651F27] text-[#F3E8D0] border border-[#B28A45]'
                  : 'text-[#191817]/80 hover:text-[#651F27]'
              }`}
            >
              ALL EVENTS ({ALL_EVENTS.length})
            </button>
            <button
              onClick={() => setFilter('competition')}
              className={`px-5 sm:px-8 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.18em] transition-all ${
                filter === 'competition'
                  ? 'bg-[#651F27] text-[#F3E8D0] border border-[#B28A45]'
                  : 'text-[#191817]/80 hover:text-[#651F27]'
              }`}
            >
              COMPETITIONS ({COMPETITIONS.length})
            </button>
            <button
              onClick={() => setFilter('featured_night')}
              className={`px-5 sm:px-8 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.18em] transition-all ${
                filter === 'featured_night'
                  ? 'bg-[#651F27] text-[#F3E8D0] border border-[#B28A45]'
                  : 'text-[#191817]/80 hover:text-[#651F27]'
              }`}
            >
              CULTURAL EVENTS ({FEATURED_NIGHTS.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-[#B28A45]/40 bg-[#F3E8D0]/90 overflow-hidden shadow-lg hover:border-[#651F27] transition-all group"
            >
              {/* Event Poster Header */}
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden bg-[#651F27] p-3 border-b-2 border-[#B28A45]/40">
                <img
                  src={event.illustration}
                  alt={event.titleHindi}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full border border-[#B28A45] bg-[#F3E8D0] text-[#651F27] text-[10px] font-sans font-extrabold uppercase tracking-widest shadow-md">
                  {event.category === 'competition' ? `EVENT ${event.number}` : `CHAPTER ${event.number}`}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3
                    className="font-serif text-xl font-bold text-[#651F27] group-hover:text-[#C96B2C] transition-colors leading-tight"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {event.titleHindi}
                  </h3>
                  <p className="font-sans text-xs text-[#191817]/85 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {event.aboutEnglish}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B28A45]/30 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-sans text-[#191817]/80 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#C96B2C]" />
                      {event.date}
                    </span>
                    <span className="font-semibold text-[#651F27]">{event.time.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-1.5 font-cinzel text-xs font-bold text-[#651F27] hover:text-[#C96B2C] uppercase transition-colors"
                    >
                      <span>VIEW DETAILS & RULES</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {event.category === 'competition' && (
                      <a
                        href={SITE_CONFIG.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full border border-[#B28A45]/40 text-[#651F27] hover:bg-[#651F27] hover:text-[#F3E8D0] transition-colors"
                        title="Register Now"
                      >
                        <Trophy className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
