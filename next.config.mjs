const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
    domains: ['upload.wikimedia.org'] // wikimedia images
  },
  assetPrefix: isProd ? 'https://githubmasterspark.github.io/spinning-square' : '',
  basePath: isProd ? '/spinning-square' : '',
  output: 'export'
};

export default nextConfig;
