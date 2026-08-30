'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export const GlobalCornerDiyas: React.FC = () => {
  const pathname = usePathname();
  const isTeamPage = pathname === '/team' || pathname?.startsWith('/team');

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-30 overflow-hidden select-none ${
        isTeamPage ? 'hidden lg:block' : ''
      }`}
    >
      {/* Bottom Left Diya */}
      <img
        src="/assets_webp/diya-left-corner.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="fixed bottom-0 left-0 w-28 sm:w-36 md:w-44 lg:w-56 h-auto object-contain pointer-events-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300"
      />

      {/* Bottom Right Diya */}
      <img
        src="/assets_webp/diya-right-corner.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="fixed bottom-0 right-0 w-28 sm:w-36 md:w-44 lg:w-56 h-auto object-contain pointer-events-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300"
      />
    </div>
  );
};

