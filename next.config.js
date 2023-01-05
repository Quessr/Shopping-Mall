/** @type {import('next').NextConfig} */
const withTwin = require('./withTwin.js')
const nextConfig = withTwin({
  reactStrictMode: true,
})

module.exports = nextConfig
