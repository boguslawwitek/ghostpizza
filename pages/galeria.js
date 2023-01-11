import Head from 'next/head';
import styles from '../styles/Gallery.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedCallBtn from '../components/FixedCallBtn';
import config from "../config.json";
import Script from 'next/script';
import images from '../images.json';
const imagesArray = images.imagesArray;
const umamiDataWebsiteID = config.umamiDataWebsiteID;
const umamiSrc = config.umamiSrc;

export default function Gallery() {

  const imgs = imagesArray.map(img => (
    <img key={img.src} className={styles.image} src={`/images/gallery/${img.src}`} alt="" />
  ));

  return (<div className={styles.bg}>
      {umamiDataWebsiteID && umamiSrc ? <Script src={umamiSrc} data-website-id={umamiDataWebsiteID} async defer></Script> : null}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>Ghost Pizza | Galeria</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Ghost Pizza | Galeria" />
        <meta name="description" content="Sprawdź jak, prezentują się nasze pizze. W naszej galerii znajdziesz kilka zdjęć, prezentujących to, co możesz zamówić." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ghost-pizza.pl/galeria" />
        <meta property="og:title" content="Ghost Pizza | Galeria" />
        <meta property="og:description" content="Sprawdź jak, prezentują się nasze pizze. W naszej galerii znajdziesz kilka zdjęć, prezentujących to, co możesz zamówić." />
        <meta property="og:image" content="https://ghost-pizza.pl/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ghost-pizza.pl/galeria" />
        <meta property="twitter:title" content="Ghost Pizza | Galeria" />
        <meta property="twitter:description" content="Sprawdź jak, prezentują się nasze pizze. W naszej galerii znajdziesz kilka zdjęć, prezentujących to, co możesz zamówić." />
        <meta property="twitter:image" content="https://ghost-pizza.pl/images/logo.png" />
      </Head>
      <Header><img className={styles.logo} src="/images/logo2.png" alt="Logo pizzeri GhostPizza" /></Header>
      <main className={styles.main}>
        <h2>Poniżej znajdziesz kilka zdjęć naszej przepysznej pizzy.</h2>
        <div className={styles.container}>
          {imgs}
        </div>
      </main>
      <FixedCallBtn />
    <Footer />
  </div>)
}
