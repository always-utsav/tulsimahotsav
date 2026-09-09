import type { Metadata } from 'next';
import './globals.css';
import { GlobalCornerDiyas } from '@/components/Decorative/GlobalCornerDiyas';
import { AudioProvider } from '@/context/AudioContext';

export const metadata: Metadata = {
  title: 'Tulsi Mahotsav 2026',
  description: 'Tulsi Mahotsav 2026, a cultural festival organized by Hindi Samiti, MITS-DU, Gwalior, celebrating Hindi literature, Indian culture, art, and creativity.',
  verification: {
    google: "F4Z_dxPJET5Ss9F1MhgEExvfzJCeDnWUJZbOjcxUYxY",
  },
  keywords: ['Tulsi Mahotsav', 'Cultural Festival', 'Indian Heritage', 'Cinematic Experience', 'Scrollytelling'],
  icons: {
  icon: '/assets_webp/logo_favicon.webp',
},
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
