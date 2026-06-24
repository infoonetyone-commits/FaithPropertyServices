import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This project lives inside a larger repo; pin the workspace root so the
  // bundler doesn't pick up the parent lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
