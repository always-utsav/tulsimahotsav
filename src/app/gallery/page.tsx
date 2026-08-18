'use client';

import React, { useState, useEffect } from 'react';
import { PageShell } from '@/components/Layout/PageShell';
import { PageHeader } from '@/components/Layout/PageHeader';
import { GALLERY_IMAGES } from '@/data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const selectedImage = selectedIdx !== null ? GALLERY_IMAGES[selectedIdx] : null;

  return (
    <PageShell>
      <PageHeader
        titleHindi="स्मृतियाँ"
        titleEnglish="MOMENTS FROM THE MAHOTSAV"
        subtitleHindi="कुछ क्षण मंच पर होते हैं। कुछ हमेशा के लिए रह जाते हैं।"
        subtitleEnglish="Visual photo essay capturing light, emotion, poetry, and stage performances at Tulsi Mahotsav"
      />

      <section className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Strict 3x4 Grid on Desktop (12 Identical Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedIdx(idx)}
              className="relative rounded-2xl overflow-hidden border border-[#B28A45]/30 bg-[#F3E8D0] shadow-lg group cursor-pointer h-[210px] sm:h-[230px] md:h-[240px] flex flex-col justify-end"
            >
              {/* Uniform Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.titleEnglish}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191817] via-[#191817]/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />
              </div>

              {/* Card Footer Details */}
              <div className="relative z-10 p-6 flex items-end justify-between">
                <div>
                  <span
                    className="font-serif text-lg font-bold text-[#F3E8D0] block"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {item.titleHindi}
                  </span>
                  <span className="font-sans text-xs text-[#ECE0C4]/90 mt-0.5 block font-normal">
                    {item.captionEnglish}
                  </span>
                </div>
                <div className="p-2 rounded-full border border-[#B28A45]/40 bg-[#651F27]/80 text-[#F3E8D0] group-hover:bg-[#C96B2C] transition-colors shrink-0">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIdx !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#191817]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between z-10">
              <span className="font-cinzel text-xs font-bold text-[#C96B2C] tracking-widest uppercase">
                {selectedIdx + 1} / {GALLERY_IMAGES.length} · TULSI MAHOTSAV GALLERY
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-3 rounded-full border border-[#B28A45]/40 bg-[#651F27] text-[#F3E8D0] hover:bg-[#C96B2C] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Center Content Viewport */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedIdx((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1
                  )
                }
                className="absolute left-2 sm:left-6 z-20 p-3.5 rounded-full border border-[#B28A45]/40 bg-[#651F27]/80 text-[#F3E8D0] hover:bg-[#C96B2C] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <motion.img
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={selectedImage.src}
                alt={selectedImage.titleEnglish}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-[#B28A45]/30"
              />

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIdx((prev) =>
                    prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-2 sm:right-6 z-20 p-3.5 rounded-full border border-[#B28A45]/40 bg-[#651F27]/80 text-[#F3E8D0] hover:bg-[#C96B2C] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="text-center max-w-2xl mx-auto z-10">
              <h3
                className="font-serif text-2xl font-bold text-[#F3E8D0]"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                {selectedImage.titleHindi}
              </h3>
              <p className="font-sans text-sm text-[#ECE0C4]/90 mt-1">
                {selectedImage.captionEnglish}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
