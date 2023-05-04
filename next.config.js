/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseMessagingSenderID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseProjectID: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    giphyApiKey: process.env.GIPHY_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.giphy.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      }
    ],
  },
}

module.exports = nextConfig
