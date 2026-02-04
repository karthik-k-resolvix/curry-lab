import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const event = req.body;

  if (!event || !event.name) {
    return res.status(400).json({ ok: false, message: 'Invalid event' });
  }

  // Structured JSON log so it shows nicely in Vercel logs
  console.log(JSON.stringify({ source: 'vercel-log-event', event, receivedAt: new Date().toISOString() }));

  res.json({ ok: true });
}
