import { RequestHandler } from "express";
import { LogEvent } from "@shared/api";

export const handleLogEvent: RequestHandler = (req, res) => {
  const event: LogEvent = req.body;

  if (!event || !event.name) {
    res.status(400).json({ ok: false, message: "Invalid event" });
    return;
  }

  // Structured JSON log so it shows nicely in Vercel logs
  console.log(JSON.stringify({ source: "log-event", event, receivedAt: new Date().toISOString() }));

  res.json({ ok: true });
};
