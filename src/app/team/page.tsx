'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { TEAM_MEMBERS, TeamMember } from '@/data/teamData';
import { Code, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const webTeam = TEAM_MEMBERS.filter((m) => m.category === 'web_team');
  const leadership = TEAM_MEMBERS.filter((m) => m.category === 'leadership');
  const coreLeads = TEAM_MEMBERS.filter((m) => m.category === 'core_lead');

  // Leadership split for Desktop: Top 5 (Nitesh, Baldev, Ajay, Yuvraj, Devansh) and Bottom 2 (Gaurang, Ananya)
  const leadershipTop5 = leadership.slice(0, 5);
  const leadershipBottom2 = leadership.slice(5, 7);

  // Domain Heads split for Desktop centering: Top 25 (5 full rows of 5) and remaining 3 (centered row)
  const coreLeadsTop = coreLeads.slice(0, 25);
  const coreLeadsBottom = coreLeads.slice(25);

  const renderLeadershipCard = (member: TeamMember, idx: number, isAnanyaTiwari: boolean) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className={`p-3.5 sm:p-5 rounded-2xl border border-[#B28A45]/40 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-lg hover:border-[#651F27] transition-all w-full ${
        isAnanyaTiwari
          ? 'col-span-2 justify-self-center w-full max-w-[calc(50%-0.375rem)] lg:max-w-none'
          : ''
      }`}
    >
      {/* Member photo container with locked portrait 3:4 aspect ratio */}
      <div className="relative w-full aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1 mb-2.5 sm:mb-3">
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
      <div className="flex flex-col items-center w-full">
        <span className="font-sans text-[9px] sm:text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest mb-0.5">
          LEADERSHIP
        </span>
        <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#651F27] leading-tight">
          {member.name}
        </h3>
        <span
          className="font-serif text-xs sm:text-sm text-[#191817]/90 font-semibold mt-1 leading-snug block"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
        >
          {member.roleHindi}
        </span>
      </div>
    </motion.div>
  );

  const renderDomainHeadCard = (member: TeamMember, idx: number) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (idx % 5) * 0.03 }}
      className="p-3.5 sm:p-5 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all w-full"
    >
      {/* Member photo container with locked portrait 3:4 aspect ratio */}
      <div className="relative w-full aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1 mb-2.5 sm:mb-3">
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
      <div className="flex flex-col items-center w-full">
        {member.subCategory && (
          <span className="font-sans text-[9px] sm:text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest mb-0.5">
            {member.subCategory}
          </span>
        )}
        <h3 className="font-serif text-xs sm:text-base font-bold text-[#651F27] leading-tight">
          {member.name}
        </h3>
        <span
          className="font-serif text-xs sm:text-sm text-[#191817]/90 font-semibold mt-1 leading-snug block"
          style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
        >
          {member.roleHindi}
        </span>
      </div>
    </motion.div>
  );

  return (
    <PageShell>
      <PageHeader
        titleHindi="हमारी टीम"
        titleEnglish="THE PEOPLE BEHIND THE MAHOTSAV"
        subtitleHindi="समर्पण, निष्ठा और कला-दृष्टि का संगम।"
        subtitleEnglish="The student committee, domain leads, and website developers organizing Tulsi Mahotsav 2026"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16">
        {/* SECTION 1: FACULTY COORDINATOR (FIRST) */}
        <div>
          <div className="text-center mb-8">
            
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27] leading-tight text-center"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              संकाय समन्वयक
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 p-5 sm:p-6 rounded-2xl border-2 border-[#B28A45] bg-[#F3E8D0]/90 shadow-xl"
            >
              {/* Member photo container with locked portrait 3:4 aspect ratio */}
              <div className="relative w-32 sm:w-36 aspect-[3/4] rounded-xl border-2 border-[#B28A45]/60 bg-[#191817] overflow-hidden shrink-0 shadow-md p-1">
                <img
                  src="/assets_png/sample.png"
                  alt="Dr. Shubhi Kansal"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-lg aspect-[3/4]"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="font-sans text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  <Sparkles className="h-3 w-3" /> FACULTY COORDINATOR
                </span>
                <h3 className="font-serif text-xl font-bold text-[#651F27] mt-0.5">Dr. Shubhi Kansal</h3>
                <span
                  className="font-serif text-sm sm:text-base font-semibold text-[#191817]/90 mt-1"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  संकाय समन्वयक
                </span>
                <span
                  className="font-serif text-xs font-medium text-[#651F27] mt-0.5"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  हिंदी समिति, MITS-DU
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: DIGITAL & DEVELOPMENT ARCHITECTS (SECOND) */}
        <div>
          <div className="text-center mb-10">
            
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27] leading-tight text-center"
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

        {/* SECTION 3: FESTIVAL LEADERSHIP (THIRD) */}
        <div>
          <div className="text-center mb-10">
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27] leading-tight text-center"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              संयोजक एवं समिति प्रमुख
            </h2>
          </div>

          {/* MOBILE VIEW (< lg): Single continuous 2-column grid for all 7 leadership cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-7xl mx-auto lg:hidden">
            {leadership.map((member, idx) =>
              renderLeadershipCard(member, idx, member.id === 'l7')
            )}
          </div>

          {/* DESKTOP VIEW (lg:): Row 1 has Top 5 + Row 2 has Bottom 2 Centered */}
          <div className="hidden lg:block space-y-6 max-w-7xl mx-auto">
            {/* Row 1: Top 5 Leadership Members */}
            <div className="grid grid-cols-5 gap-6">
              {leadershipTop5.map((member, idx) =>
                renderLeadershipCard(member, idx, false)
              )}
            </div>

            {/* Row 2: Bottom 2 Members Centered (Gaurang & Ananya) with exact 1/5th column width */}
            <div className="flex justify-center gap-6">
              {leadershipBottom2.map((member, idx) => (
                <div key={member.id} className="w-[calc(20%-1.2rem)] flex">
                  {renderLeadershipCard(member, idx + 5, false)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: DOMAIN HEADS (FOURTH) */}
        <div>
          <div className="text-center mb-10">
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#651F27] leading-tight text-center"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              प्रतियोगिता एवं संचालन दल
            </h2>
          </div>

          {/* MOBILE VIEW (< lg): Single continuous 2-column grid for ALL 28 domain head cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-7xl mx-auto lg:hidden">
            {coreLeads.map((member, idx) => renderDomainHeadCard(member, idx))}
          </div>

          {/* DESKTOP VIEW (lg:): Top 25 (5 full rows of 5) + Bottom 3 (Prem, Krash, Tanushka) Centered */}
          <div className="hidden lg:block space-y-6 max-w-7xl mx-auto">
            {/* Top 25 Domain Head Cards (5 full rows of 5 on desktop) */}
            <div className="grid grid-cols-5 gap-6">
              {coreLeadsTop.map((member, idx) => renderDomainHeadCard(member, idx))}
            </div>

            {/* Leftover 3 Domain Head Cards (Prem Sharma, Krash Dandotiya, Tanushka Sengar) Centered Horizontally on Desktop */}
            {coreLeadsBottom.length > 0 && (
              <div className="flex justify-center gap-6">
                {coreLeadsBottom.map((member, idx) => (
                  <div key={member.id} className="w-[calc(20%-1.2rem)] flex">
                    {renderDomainHeadCard(member, idx + 25)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
