// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   /* config options here */
//   experimental: {
//     // agentFeedback: true,
//   },
//   cacheComponents: true,
//   partialPrefetching: true,
//   reactCompiler: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "jesasolutionsperu.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jesasolutionsperu.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
