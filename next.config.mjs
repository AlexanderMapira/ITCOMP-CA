// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode (you can set this to true later if you want)
  reactStrictMode: false,

  // Global security headers (adjust as needed)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent other sites from iframing yours (allow only same-origin)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },

  // If you later need to disable Turbopack explicitly, uncomment:
  // experimental: {
  //   turbo: {},
  // },
};

export default nextConfig;
