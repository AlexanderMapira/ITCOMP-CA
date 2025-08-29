// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode (you can set this to true later if you want)
  reactStrictMode: false,

  // Allow all dev origins for Replit proxy
  allowedDevOrigins: ['*'],
  
  // Enable experimental features
  experimental: {
    serverComponentsExternalPackages: [],
  },

  // Disable X-Frame-Options to allow Replit iframe
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow iframe embedding for Replit
          { key: "X-Frame-Options", value: "ALLOWALL" },
          // Disable caching for development
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
