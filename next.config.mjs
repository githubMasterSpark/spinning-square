const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
    domains: ['upload.wikimedia.org'] // wikimedia images
  },
  assetPrefix: '/spinning-square',
  basePath: '/spinning-square',
  output: 'export'
};

export default nextConfig;
