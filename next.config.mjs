/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
      serverActions:true
    },
      images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'a0.muscache.com',
              // port: '',
              // pathname: '/',
            },
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              // port: '',
              // pathname: '/',
            },
          ],
        },
  }
  
  export default nextConfig
  