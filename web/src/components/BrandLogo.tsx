// Real brand marks (simple-icons style, single-color, official hex) pasted into
// Hermes/*.svg and copied verbatim into public/logos/ — not redrawn.
const BADGE_BG: Record<string, string> = {
  airtable: "#fff",
  figma: "#fff",
  github: "#181717",
  gmail: "#fff",
  googleads: "#fff",
  googledrive: "#fff",
  hubspot: "#fff",
  intercom: "#0F172A",
  linear: "#fff",
  meta: "#fff",
  notion: "#000",
  quickbooks: "#fff",
  salesforce: "#fff",
  shopify: "#fff",
  slack: "#fff",
  stripe: "#fff",
  vercel: "#000",
  zendesk: "#03363D",
};

export function BrandLogo({ slug, size = 20 }: { slug: string; size?: number }) {
  return (
    <div className="logo-badge" style={{ background: BADGE_BG[slug] ?? "#fff" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/logos/${slug}.svg`} alt="" width={size} height={size} />
    </div>
  );
}
