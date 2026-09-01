'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { TEAM_MEMBERS } from '@/data/teamData';
import { Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const webTeam = TEAM_MEMBERS.filter((m) => m.category === 'web_team');
  const leadership = TEAM_MEMBERS.filter((m) => m.category === 'leadership');
  const coreLeads = TEAM_MEMBERS.filter((m) => m.category === 'core_lead');

  return (
    <PageShell>
      <PageHeader
        titleHindi="हमारी टीम"
        titleEnglish="THE PEOPLE BEHIND THE MAHOTSAV"
        subtitleHindi="समर्पण, निष्ठा और कला-दृष्टि का संगम।"
        subtitleEnglish="The student committee, domain leads, and website developers organizing Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* SECTION 1: DIGITAL & DEVELOPMENT ARCHITECTS (FIRST) */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B28A45]/40 bg-[#651F27]/10 px-4 py-1 mb-2">
              <Code className="h-3.5 w-3.5 text-[#C96B2C]" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#651F27] uppercase">
                DIGITAL & DEVELOPMENT ARCHITECTS
              </span>
            </div>
            <h2
              className="font-serif text-3xl font-bold text-[#651F27]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              वेबसाइट एवं डिजिटल टीम
            </h2>
          </div>

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
                    <Sparkles className="h-3 w-3" /> WEBSITE TEAM
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
        </div>

        {/* SECTION 2: FESTIVAL LEADERSHIP (2 Cards/Row on Mobile, 5 Cards/Row on Desktop, Ananya Centered on Mobile) */}
        <div>
          <div className="text-center mb-10">
      
            <h2
              className="font-serif text-3xl font-bold text-[#651F27]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              संयोजक एवं समिति प्रमुख
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto">
            {leadership.map((member, idx) => {
              const isAnanyaTiwari = member.id === 'l5';
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`p-3.5 sm:p-5 rounded-2xl border border-[#B28A45]/40 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-lg hover:border-[#651F27] transition-all ${
                    isAnanyaTiwari
                      ? 'col-span-2 justify-self-center w-full max-w-[calc(50%-0.375rem)] md:col-span-1 md:max-w-none'
                      : ''
                  }`}
                >
                  {/* Member photo container with locked portrait 3:4 aspect ratio */}
                  <div className="relative w-full aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1 mb-2.5 sm:mb-4">
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
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-[9px] sm:text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest mb-0.5">
                      LEADERSHIP
                    </span>
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-[#651F27] leading-tight">{member.name}</h3>
                    <span
                      className="font-serif text-[11px] sm:text-xs text-[#191817]/85 font-medium mt-0.5 leading-tight"
                      style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                    >
                      {member.roleHindi}
                    </span>
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#651F27] mt-0.5 leading-tight">
                      {member.roleEnglish}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: DOMAIN HEADS (2 Cards/Row on Mobile, 5 Cards/Row on Desktop) */}
        <div>
          <div className="text-center mb-10">
            
            <h2
              className="font-serif text-3xl font-bold text-[#651F27]"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              प्रतियोगिता एवं संचालन दल
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto">
            {coreLeads.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="p-3.5 sm:p-5 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all"
              >
                {/* Member photo container with locked portrait 3:4 aspect ratio */}
                <div className="relative w-full aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1 mb-2.5 sm:mb-4">
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
                <div className="flex flex-col items-center">
                  {member.subCategory && (
                    <span className="font-sans text-[9px] sm:text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest mb-0.5">
                      {member.subCategory}
                    </span>
                  )}
                  <h3 className="font-serif text-xs sm:text-base font-bold text-[#651F27] leading-tight">{member.name}</h3>
                  <span
                    className="font-serif text-[10px] sm:text-xs text-[#191817]/85 font-medium mt-0.5 leading-tight"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {member.roleHindi}
                  </span>
                  <span className="font-sans text-[9.5px] sm:text-[11px] font-semibold text-[#651F27] mt-0.5 leading-tight">
                    {member.roleEnglish}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
