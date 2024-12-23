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
          {
            protocol: 'https',
            hostname: 'www.rd.com',
            port: '',
            pathname: '/wp-content/**',
          },
        ],
      domains:[
          "www.homestratosphere.com" , 'up.yimg.com', 'tse1.mm.bing.net', 'www.rd.com'
      ],
  }
};

module.exports = nextConfig
