import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import classNames from 'classnames';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import stylesHeader from '../styles/Header.module.css';
import config from "../config.json";
const umamiDataWebsiteID = config.umamiDataWebsiteID;
const umamiSrc = config.umamiSrc;

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    setInnerWidth(prevState => prevState = window.innerWidth);

    function handleResize() {
      setInnerWidth(prevState => prevState = window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (<>
      <Head>
        {umamiDataWebsiteID && umamiSrc ? <script async defer data-website-id={umamiDataWebsiteID} src={umamiSrc}></script> : null}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>Ghost Pizza</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Ghost Pizza" />
        <meta name="description" content="Pizzeria założona z myślą o smakoszach tradycyjnych pozycji, jak i tych niebojących się nowych, kulinarnych wyzwań." />

        {/*  Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ghost-pizza.pl/" />
        <meta property="og:title" content="Ghost Pizza" />
        <meta property="og:description" content="Pizzeria założona z myślą o smakoszach tradycyjnych pozycji, jak i tych niebojących się nowych, kulinarnych wyzwań." />
        <meta property="og:image" content="https://ghost-pizza.pl/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ghost-pizza.pl/" />
        <meta property="twitter:title" content="Ghost Pizza" />
        <meta property="twitter:description" content="Pizzeria założona z myślą o smakoszach tradycyjnych pozycji, jak i tych niebojących się nowych, kulinarnych wyzwań." />
        <meta property="twitter:image" content="https://ghost-pizza.pl/images/logo.png" />
      </Head>
      <div className={styles.container}>
      <Header>{innerWidth > 1450 ? <img className={stylesHeader.logo} src="/images/logo_desktop.png" alt="Logo pizzeri GhostPizza" /> : <img className={stylesHeader.logo} src="/images/logo.png" alt="Logo pizzeri GhostPizza" />}</Header>
      <main className={styles.main}>
        <div className={styles.left}>
          <h1>Witaj na stronie pizzeri GhostPizza.</h1>
          <p className={styles.text}>Masz ochotę na pizzę?</p>
          <p className={styles.text}>Zamów już teraz z dowozem lub odbiorem.</p>
          <p className={classNames(styles.text, styles.promo)}><span className={styles['special-word1']}>Promocja</span> Druga pizza (30cm) -50% taniej (od poniedziałku do czwartku).</p>
          <p className={classNames(styles.text, styles.special)}>Dowóz na terenie Obornik <span className={styles['special-word2']}>gratis</span>, poza Obornikami 1,5zł/km (tylko zamówienia powyżej 35 zł). Zamówienia z dowozem najpóźniej na 30 minut przed zamknięciem. Płatność kartą po uprzednim poinformowaniu.</p>
          <a className="phone-link" href='tel:724444560'><div className={styles.phone}><FontAwesomeIcon className={styles['phone-icon']} icon={faPhone} /> 72 4444 560</div></a>
        </div>
        <div className={styles.right}>
          <div className={styles.big}>Tutaj nas znajdziesz:</div>
          <div className={styles.big}>Okrężna 1, 64-600 Oborniki</div>
          <div className={styles.big}>Godziny otwarcia:</div>
          <div className={styles.hours}>          
            <div><div>poniedziałek</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>23:00</span></div></div>
            <div><div>wtorek</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>23:00</span></div></div>
            <div><div>środa</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>23:00</span></div></div>
            <div><div>czwartek</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>23:00</span></div></div>
            <div><div>piątek</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>00:00</span></div></div>
            <div><div>sobota</div>	<div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>00:00</span></div></div>
            <div><div>niedziela</div> <div><span className={styles.bold}>12:00</span>–<span className={styles.bold}>23:00</span></div></div>
          </div>
          <div className={styles.mapouter}><div className={styles['gmap_canvas']}><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=GhostPizza&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
        </div>
      </main>
      <Footer />
    </div>
  </>)
}
