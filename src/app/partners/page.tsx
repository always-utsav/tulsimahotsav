'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { PARTNERS_DATA } from '@/data/partnersData';
import { SITE_CONFIG } from '@/config/siteConfig';
import { Award, Handshake, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHeader
        titleHindi="साझेदार एवं प्रायोजक"
        titleEnglish="PARTNERS & SPONSORS"
        subtitleHindi="सेवक सचिव सकल पुरबासी। जे हमारे अरि मित्र उदासी॥"
        subtitleEnglish="Acknowledging the esteemed institutions, media partners, and patrons supporting Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {PARTNERS_DATA.map((group, idx) => (
          <div key={group.tier} className="text-center">
            
            <h2
              className="font-serif text-2xl sm:text-3xl font-bold text-[#651F27] mb-8"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              {group.titleHindi}
            </h2>

            <div
              className={`grid gap-6 ${
                group.tier === 'title'
                  ? 'grid-cols-1 max-w-xl mx-auto'
                  : group.sponsors.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto justify-center'
                  : 'grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto'
              }`}
            >
              {group.sponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 flex flex-col items-center justify-center text-center shadow-md hover:border-[#651F27] transition-all"
                >
                  <Award className="h-10 w-10 text-[#651F27] mb-3 opacity-80" />
                  <span className="font-cinzel text-sm font-bold text-[#651F27] uppercase tracking-wider">
                    {sponsor.placeholderLabel}
                  </span>
                  <span
  className="font-serif text-xs text-[#191817]/75 mt-1 font-medium"
  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
>
  {sponsor.subtitleHindi}
</span>

<span className="mt-3 font-cinzel text-[10px] font-bold text-[#C96B2C] uppercase tracking-[0.18em]">
  {sponsor.status}
</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Partnership Invitation Banner */}
        <div className="mt-16 text-center p-8 sm:p-12 rounded-2xl border-2 border-[#B28A45] bg-[#651F27] text-[#F3E8D0] shadow-2xl max-w-4xl mx-auto">
          <Handshake className="h-10 w-10 text-[#C96B2C] mx-auto mb-4" />
          <h3
            className="font-serif text-2xl sm:text-4xl font-bold text-[#F3E8D0]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            तुलसी महोत्सव 2026 के साथ जुड़ें
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#ECE0C4]/90 mt-3 max-w-xl mx-auto">
            Become an official sponsor or brand partner for Central India’s premier youth literary and cultural festival.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.emails.official}`}
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#B28A45] bg-[#263A59] text-[#F3E8D0] font-cinzel text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#191817] transition-all"
          >
            <Mail className="h-4 w-4 text-[#C96B2C]" />
            <span>PARTNER WITH US · CONTACT OUR TEAM</span>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
