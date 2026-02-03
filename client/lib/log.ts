import { LogEvent } from "@shared/api";

export async function logEvent(
  name: string,
  properties: Record<string, any> = {},
  level: "info" | "warn" | "error" | "debug" = "info"
) {
  const event: LogEvent = {
    name,
    properties,
    level,
    timestamp: new Date().toISOString(),
    source: "web",
  };

  // Fire-and-forget network call to our server endpoint
  try {
    fetch("/api/log-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).catch((err) => console.error("logEvent network error", err));
  } catch (err) {
    console.error("logEvent send error", err);
  }

  // Also write to client console for easier local debugging
  console.log("logEvent", event);
}
