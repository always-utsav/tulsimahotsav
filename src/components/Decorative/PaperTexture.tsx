'use client';

import React from 'react';

export const PaperTexture: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-40 mix-blend-multiply transition-opacity duration-700"
      style={{
        backgroundImage: `
          radial-gradient(at 15% 15%, rgba(215, 195, 160, 0.35) 0px, transparent 50%),
          radial-gradient(at 85% 85%, rgba(205, 185, 150, 0.3) 0px, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(245, 235, 215, 0.15) 0%, rgba(225, 205, 170, 0.25) 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperNoise)' opacity='0.07'/%3E%3C/svg%3E")
        `,
      }}
      aria-hidden="true"
    />
  );
};
