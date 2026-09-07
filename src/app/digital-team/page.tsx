'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { TEAM_MEMBERS } from '@/data/teamData';
import { motion } from 'framer-motion';

export default function DigitalTeamPage() {
  const webTeam = TEAM_MEMBERS.filter((m) => m.category === 'web_team');

  return (
    <PageShell>
      <PageHeader
        titleHindi="वेब एवं डिजिटल टीम"
        titleEnglish="WEBSITE & DIGITAL TEAM"
        subtitleHindi="कल्पना से निर्माण तक"
        subtitleEnglish="The architects and developers behind the Tulsi Mahotsav digital experience"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {webTeam.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl border-2 border-[#B28A45] bg-[#F3E8D0]/90 shadow-xl"
            >
              {/* Member photo container with locked portrait 3:4 aspect ratio */}
              <div className="relative w-32 sm:w-36 aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1">
                <img
                  src={member.image || '/assets_png/sample.png'}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-lg aspect-[3/4]"
                  style={{
                    objectPosition: member.objectPosition || 'center center',
                  }}
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="font-sans text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  WEBSITE TEAM
                </span>
                <h3 className="font-serif text-xl font-bold text-[#651F27] mt-0.5">{member.name}</h3>
                <span
                  className="font-serif text-xs text-[#191817]/85 font-medium mt-1"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  {member.roleHindi}
                </span>
                <span className="font-sans text-xs font-semibold text-[#651F27]">
                  {member.roleEnglish}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
