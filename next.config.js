/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public', // Optional: Destination directory for service worker files (defaults to 'public')
});

module.exports = withPWA({
  reactStrictMode: true,
  output: 'export',
});