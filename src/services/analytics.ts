const HUB_API = 'https://latimorelegacy.com/api/card-events'

export async function trackCardEvent(event: 'visit' | 'click', label?: string) {
  try {
    await fetch(HUB_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        label: label ?? null,
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    })
  } catch {
    // silent fail — never break the card UI
  }
}
