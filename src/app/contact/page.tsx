'use client';

import React from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { SITE_CONFIG } from '@/config/siteConfig';
import { Mail, MapPin, Sparkles, ExternalLink, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        titleHindi="संवाद"
        titleEnglish="LET'S TALK & REACH US"
        subtitleHindi="विचारों का आदान-प्रदान और जिज्ञासाओं का समाधान।"
        subtitleEnglish="Get in touch with the student organizing committee, Hindi Samiti, and event leads"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-12">
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Top Row: Three Contact-Person Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Box 1: Devansh Rai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all"
            >
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest block mb-2">
                  FOR ANY QUERIES
                </span>
                <h3
                  className="font-serif text-2xl font-bold text-[#651F27]"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  देवांश राय
                </h3>
                <p className="font-sans text-sm font-semibold text-[#651F27] mt-0.5">
                  (Devansh Rai)
                </p>
                <p className="font-sans text-xs text-[#191817]/70 mt-1 font-semibold">
                  Single Point of Contact
                </p>
              </div>
              <a
                href="tel:+919977827476"
                className="mt-6 inline-flex items-center gap-2 text-xs font-sans font-bold text-[#651F27] hover:text-[#C96B2C] uppercase"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Mob No. : +91 99778 27476</span>
              </a>
            </motion.div>

            {/* Box 2: Baldev Kaurav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all"
            >
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest block mb-2">
                  FOR ANY QUERIES
                </span>
                <h3
                  className="font-serif text-2xl font-bold text-[#651F27]"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  बलदेव कौरव
                </h3>
                <p className="font-sans text-sm font-semibold text-[#651F27] mt-0.5">
                  (Baldev Kaurav)
                </p>
                <p className="font-sans text-xs text-[#191817]/70 mt-1 font-semibold">
                  Single Point of Contact
                </p>
              </div>
              <a
                href="tel:+919329434855"
                className="mt-6 inline-flex items-center gap-2 text-xs font-sans font-bold text-[#651F27] hover:text-[#C96B2C] uppercase"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Mob No. : +91 93294 34855</span>
              </a>
            </motion.div>

            {/* Box 3: Nitesh Gurjar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all"
            >
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest block mb-2">
                  FOR ANY QUERIES
                </span>
                <h3
                  className="font-serif text-2xl font-bold text-[#651F27]"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  नितेश गुर्जर
                </h3>
                <p className="font-sans text-sm font-semibold text-[#651F27] mt-0.5">
                  (Nitesh Gurjar)
                </p>
                <p className="font-sans text-xs text-[#191817]/70 mt-1 font-semibold">
                  Single Point of Contact
                </p>
              </div>
              <a
                href="tel:+919399191446"
                className="mt-6 inline-flex items-center gap-2 text-xs font-sans font-bold text-[#651F27] hover:text-[#C96B2C] uppercase"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>Mob No. : +91 93991 91446</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom Row: Official Festival Email Card (Centered) */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-md p-8 rounded-2xl border border-[#B28A45]/30 bg-[#F3E8D0]/90 text-center flex flex-col items-center justify-between shadow-md hover:border-[#651F27] transition-all"
            >
              <div>
                <span className="font-cinzel text-[10px] font-bold text-[#C96B2C] uppercase tracking-widest block mb-2">
                  OFFICIAL EMAIL
                </span>
                <h3
                  className="font-serif text-2xl font-bold text-[#651F27]"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  तुलसी महोत्सव ईमेल
                </h3>
                <p className="font-sans text-xs text-[#191817]/70 mt-1 font-semibold">
                  General Queries & Registrations
                </p>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.emails.official}`}
                className="mt-6 inline-flex items-center gap-2 text-xs font-sans font-bold text-[#651F27] hover:text-[#C96B2C] lowercase break-all"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>{SITE_CONFIG.emails.official}</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Location & Institution Address */}
        <div className="p-8 rounded-2xl border border-[#B28A45]/40 bg-[#ECE0C4]/80 text-center max-w-3xl mx-auto flex flex-col items-center shadow-sm">
          <MapPin className="h-8 w-8 text-[#C96B2C] mb-3" />
          <h3
            className="font-serif text-2xl font-bold text-[#651F27]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            {SITE_CONFIG.institutionHindi}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#191817]/85 mt-2 font-medium">
            Madhav Institute of Technology and Science (MITS-DU), Gwalior, Madhya Pradesh, India
          </p>

          <a
            href={SITE_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#B28A45] bg-[#651F27] text-[#F3E8D0] font-cinzel text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#263A59] transition-all"
          >
            <Sparkles className="h-4 w-4 text-[#C96B2C]" />
            <span>CENTRAL REGISTRATION LINK</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
