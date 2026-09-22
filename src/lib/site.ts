// The public URL, used for canonical links, the sitemap and social cards.
// Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every build, so this follows
// the production domain without being hard-coded; set NEXT_PUBLIC_SITE_URL
// to override it (for example once a custom domain is attached).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
