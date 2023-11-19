export const dynamic = 'force-dynamic';

import db from '@/db/mock-db.json';

export async function GET(_request: Request) {
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  let index = 0;
  let message;
  const timer = setInterval(() => {
    if (index < db.length) {
      message = `event: ping\ndata: ${JSON.stringify(db[index])}\n\n`;
      writer.write(encoder.encode(message));
      index++;
    } else {
      clearInterval(timer);
    }
  }, 3000);

  return new Response(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Content-Encoding': 'none', // Might need this?
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
