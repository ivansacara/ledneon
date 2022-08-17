/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'ro'],
    defaultLocale: 'ru',
    localeDetection: true,
  },
  // images: {
  //   domains: [
  //     'scontent.cdninstagram.com',
  //     'video.cdninstagram.com',
  //     'video-prg1-1.cdninstagram.com',
  //     'scontent-prg1-1.cdninstagram.com',
  //   ],
  // },
};

module.exports = nextConfig;
