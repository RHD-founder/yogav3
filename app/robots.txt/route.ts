import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${process.env.SITE_URL || "http://localhost:3000"}/sitemap.xml

# Disallow admin areas (if any in the future)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
