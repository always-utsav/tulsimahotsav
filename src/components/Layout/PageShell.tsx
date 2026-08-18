'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { PaperTexture } from '@/components/Decorative/PaperTexture';
import { PageTransition } from '@/components/Layout/PageTransition';

interface PageShellProps {
  children: React.ReactNode;
  isHomeHeroPage?: boolean;
  heroScrollProgress?: number;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  isHomeHeroPage = false,
  heroScrollProgress = 1,
}) => {
  return (
    <div className="relative min-h-screen bg-[#F3E8D0] text-[#191817] selection:bg-[#C96B2C] selection:text-[#F3E8D0] overflow-x-hidden font-sans">
      {/* Global Aged Day Texture Background Surface */}
      <PaperTexture />

      {/* Persistent Navbar System */}
      <Navbar scrollProgress={heroScrollProgress} isInternalPage={!isHomeHeroPage} />

      {/* Main Page Content */}
      <main className="relative z-10 w-full min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Cultural Programme Closing Footer */}
      <Footer />
    </div>
  );
};
