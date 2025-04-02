import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'img.icons8.com',
      'cdn.dribbble.com',
      'randomuser.me',
      'source.unsplash.com',
      'cdn.jsdelivr.net',
      'img.icons8.com',
      'cdn.dribbble.com'
      
    ],
  },
  experimental: {
    taint: true, // Nueva característica de React 19
    ppr: true,
    turbo: {
      resolveAlias: {
        'dropzone': 'dropzone/dist/dropzone',
        'bootstrap-icons': 'bootstrap-icons/font/bootstrap-icons.css'
      }
      
    }
  }
}



export default nextConfig
