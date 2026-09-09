import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://tulsimahotsav.mitsgwalior.in';
const TOTAL_FRAMES = 290;
const FRAME_BATCH_SIZE = 6;

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '60s', target: 20 },
    { duration: '60s', target: 30 },
    { duration: '60s', target: 40 },
    { duration: '60s', target: 50 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'],
    http_req_duration: ['p(95)<10000'],
    checks: ['rate>0.98'],
  },
};

function frameUrl(index) {
  const number = String(index).padStart(3, '0');
  return `${BASE_URL}/frames/ezgif-frame-${number}.webp`;
}

export default function () {
  const homepage = http.get(`${BASE_URL}/`, {
    tags: { type: 'page' },
  });

  check(homepage, {
    'homepage 200': (r) => r.status === 200,
  });

  const initialFrames = [];

  for (let i = 1; i <= 30; i++) {
    initialFrames.push({
      method: 'GET',
      url: frameUrl(i),
      params: {
        tags: { type: 'hero_initial' },
      },
    });
  }

  const initialResponses = http.batch(initialFrames);

  initialResponses.forEach((response) => {
    check(response, {
      'initial hero frame 200': (r) => r.status === 200,
    });
  });

  sleep(3);

  for (let start = 31; start <= TOTAL_FRAMES; start += FRAME_BATCH_SIZE) {
    const requests = [];
    const end = Math.min(start + FRAME_BATCH_SIZE - 1, TOTAL_FRAMES);

    for (let frame = start; frame <= end; frame++) {
      requests.push({
        method: 'GET',
        url: frameUrl(frame),
        params: {
          tags: { type: 'hero_progressive' },
        },
      });
    }

    const responses = http.batch(requests);

    responses.forEach((response) => {
      check(response, {
        'hero frame 200': (r) => r.status === 200,
      });
    });

    sleep(0.25);
  }

  const pages = ['/events', '/guest', '/team', '/gallery'];

  for (const path of pages) {
    const response = http.get(`${BASE_URL}${path}`, {
      tags: { type: 'navigation' },
    });

    check(response, {
      [`${path} 200`]: (r) => r.status === 200,
    });

    sleep(1);
  }

  sleep(2);
}