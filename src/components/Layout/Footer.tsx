'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/siteConfig';
import { Sparkles, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#380E15] text-[#F3E8D0] pt-0 pb-16 overflow-hidden border-t-2 border-[#B28A45]/50 flex flex-col justify-between">
      {/* Top Ornamental Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#e5c158] via-[#C96B2C] to-[#e5c158] z-20" />

      {/* 1. EXISTING FOOTER ARTWORK WITH CINEMATIC CTA OVERLAY */}
      <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden min-h-[320px] sm:min-h-[420px] flex items-center justify-center">
        {/* Full-width Artwork Banner Image */}
        <img
          src={SITE_CONFIG.assets.footer}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter drop-shadow-[0_6px_15px_rgba(0,0,0,0.3)] opacity-75 pointer-events-none"
        />

        {/* Soft Background Gradient for Readable Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#380E15] via-[#380E15]/60 to-[#380E15]/40" />

        {/* CTA Text Overlaid Directly On Top of Artwork */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-4">
          <h2
            className="font-serif text-3xl sm:text-5xl font-extrabold text-[#f7f3e8] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            तुलसी महोत्सव की सांस्कृतिक यात्रा में सहभागी बनें।
          </h2>
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e5c158] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            REGISTER · EXPLORE · EXPERIENCE
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#F3E8D0] max-w-xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Be a part of Tulsi Mahotsav 2026 at MITS-DU, Gwalior. Register now to showcase your talent and celebrate culture with us.
          </p>
        </div>
      </div>

      {/* 2. REMAINING FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col gap-10 mt-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-[#B28A45]/40">
          {/* Left Column: Brand Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-14 w-14 rounded-full border-2 border-[#e5c158] bg-[#651F27] overflow-hidden shadow-xl shrink-0 flex items-center justify-center">
                <img
                  src={SITE_CONFIG.assets.logo}
                  alt="Tulsi Mahotsav Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-serif text-3xl font-extrabold tracking-tight text-[#f7f3e8]"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  {SITE_CONFIG.hindiName}
                </span>
                <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#e5c158] uppercase">
                  MITS-DU · GWALIOR
                </span>
              </div>
            </div>

            <div className="mt-1 flex flex-col gap-1 text-sm text-[#F3E8D0]/90 font-medium" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              <p className="block">कीरति भनिति भूति भलि सोई। सुरसरि सम सब कर हित होई॥</p>
  
            </div>


          </div>

          {/* Right Column: Register CTA & Contact Emails */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <a
              href={SITE_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 min-h-[44px] rounded-full border-2 border-[#e5c158] bg-gradient-to-r from-[#651F27] via-[#85232F] to-[#651F27] text-[#f7f3e8] font-sans text-xs sm:text-sm font-bold tracking-[0.18em] uppercase hover:text-[#e5c158] shadow-[0_4px_20px_rgba(229,193,88,0.25)] transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4 text-[#e5c158] shrink-0" />
              <span className="font-cinzel tracking-[0.18em] font-bold">REGISTER NOW</span>
            </a>

            <div className="flex flex-col items-center lg:items-end gap-1 text-xs font-sans text-[#F3E8D0]/90">
              <span className="font-semibold text-[#e5c158]">CONTACT US:</span>
              <a
                href={`mailto:${SITE_CONFIG.emails.official}`}
                className="flex items-center gap-1.5 hover:text-[#e5c158] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#e5c158]" />
                <span>{SITE_CONFIG.emails.official}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.emails.samiti}`}
                className="flex items-center gap-1.5 hover:text-[#e5c158] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#e5c158]" />
                <span>{SITE_CONFIG.emails.samiti}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. COPYRIGHT BAR */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F3E8D0]/80 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-cinzel font-bold text-[#e5c158] tracking-widest">
              26–27 SEPTEMBER 2026
            </span>
          </div>
          <p>© 2026 TULSI MAHOTSAV · HINDI SAMITI, MITS-DU GWALIOR</p>
        </div>
      </div>
    </footer>
  );
};
