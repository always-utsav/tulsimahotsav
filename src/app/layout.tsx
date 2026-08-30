import type { Metadata } from 'next';
import './globals.css';
import { GlobalCornerDiyas } from '@/components/Decorative/GlobalCornerDiyas';
import { AudioProvider } from '@/context/AudioContext';

export const metadata: Metadata = {
  title: 'Tulsi Mahotsav 2026',
  description: 'An interactive cinematic title sequence and cultural festival experience celebrating Indian heritage, music, and art direction.',
  keywords: ['Tulsi Mahotsav', 'Cultural Festival', 'Indian Heritage', 'Cinematic Experience', 'Scrollytelling'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0204] text-[#f7f3e8] min-h-screen antialiased selection:bg-[#e5c158] selection:text-[#0a0204]">
        <AudioProvider>
          {children}
          <GlobalCornerDiyas />
        </AudioProvider>
      </body>
    </html>
  );
}
