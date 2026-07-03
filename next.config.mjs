/** @type {import('next').NextConfig} */
const nextConfig = {
  // The animation engine mutates the DOM directly (text splitting, WebGL);
  // StrictMode's double-mount in dev would boot it twice.
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
