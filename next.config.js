/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.oyoroomscdn.com',
              port: '',
              pathname: '/**',
            },
          ],
        domains:[
            "www.homestratosphere.com" , 'up.yimg.com', 'tse1.mm.bing.net'
        ],
    }
};


module.exports = nextConfig