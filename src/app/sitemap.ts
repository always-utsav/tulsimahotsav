import type { MetadataRoute } from 'next';
import { ALL_EVENTS } from '@/data/eventsData';

const BASE_URL = 'https://tulsimahotsav.mitsgwalior.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL },
    { url: `${BASE_URL}/events` },
    { url: `${BASE_URL}/schedule` },
    { url: `${BASE_URL}/gallery` },
    { url: `${BASE_URL}/guests` },
    { url: `${BASE_URL}/partners` },
    { url: `${BASE_URL}/team` },
    { url: `${BASE_URL}/digital-team` },
    { url: `${BASE_URL}/contact` },
  ];

  const eventPages: MetadataRoute.Sitemap = ALL_EVENTS.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
  }));

  return [...staticPages, ...eventPages];
}