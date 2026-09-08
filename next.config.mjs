import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This project lives inside a larger repo; pin the workspace root so the
  // bundler doesn't pick up the parent lockfile.
  turbopack: {
    root: __dirname,
  },
  // Lets phones/other devices on the LAN load the dev server via its network
  // IP without Next blocking HMR/dev-resource requests as cross-origin —
  // without this, client-side JS (hydration, scroll listeners, etc.) can
  // silently fail on that origin even though the server-rendered HTML looks fine.
  allowedDevOrigins: ["192.168.0.49"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
