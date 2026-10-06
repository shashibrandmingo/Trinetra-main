export default function manifest() {
  return {
    name: 'Trinetra Law Chambers — Adv. Monika Anand',
    short_name: 'Trinetra Law',
    description:
      'Premier litigation practice led by Adv. Monika Anand (LL.B., LL.M., Ph.D. in Law) before Supreme Court of India, Delhi High Court & NCR Courts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#4A1118',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
