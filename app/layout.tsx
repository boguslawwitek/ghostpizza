import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const oswald = Oswald({ subsets: ['latin'] })
const openGraphImage = { images: ['https://ghost-pizza.pl/images/logo.png'] }

export const revalidate = 900

export const metadata: Metadata = {
  metadataBase: new URL('https://ghost-pizza.pl'),
  title: 'Ghost Pizza',
  description: 'Pizzeria założona z myślą o smakoszach tradycyjnych pozycji, jak i tych niebojących się nowych, kulinarnych wyzwań.',
  openGraph: {
    ...openGraphImage,
    title: 'Ghost Pizza',
    description: 'Pizzeria założona z myślą o smakoszach tradycyjnych pozycji, jak i tych niebojących się nowych, kulinarnych wyzwań.',
    type: 'website',
    url: 'https://ghost-pizza.pl/'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        {process.env.UMAMI_URL && process.env.UMAMI_DATA_WEBSITE_ID ?
          <script async src={process.env.UMAMI_URL} data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}></script>
        : null}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={oswald.className}>{children}</body>
    </html>
  )
}
