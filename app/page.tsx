import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './page.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classNames from 'classnames';
import { MDXRemote } from 'next-mdx-remote/rsc';

async function getOpeningHours() {
  const res = await fetch(`${process.env.API_URL}/api/opening-hours`, {
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
  });
  return res.json()
}

async function getSpecialOffer() {
  const res = await fetch(`${process.env.API_URL}/api/special-offer`, {
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
  });
  return res.json()
}

async function getDelivery() {
  const res = await fetch(`${process.env.API_URL}/api/delivery`, {
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
  });
  return res.json()
}

async function getTelephone() {
  const res = await fetch(`${process.env.API_URL}/api/telephone`, {
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
  });
  return res.json()
}

export default async function Home() {
  const openingHours = await getOpeningHours();
  const specialOffer = await getSpecialOffer();
  const delivery = await getDelivery();
  const telephone = await getTelephone();

  return (<>
    <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <div className={styles.left}>
        <h1>Witaj na stronie Pizzerii <span>Ghost Pizza</span></h1>
        <p className={styles.text}>Masz ochotę na pizzę?</p>
        <p className={styles.text}>Zamów już teraz z dowozem lub odbiorem.</p>
        <div className={classNames(styles.text, styles.promo)}><MDXRemote source={specialOffer.data.attributes.Promocja} /></div>
        <div className={classNames(styles.text, styles.special)}><MDXRemote source={delivery.data.attributes.Dowoz} /></div>
        <a className="phone-link" href={`tel:${telephone.data.attributes.Numer_Telefonu}`}><div className={styles.phone}><FontAwesomeIcon className={styles['phone-icon']} icon={faPhone} /> {telephone.data.attributes.Numer_Telefonu}</div></a>
      </div>
      <div className={styles.right}>
        <div className={styles.big}>Tutaj nas znajdziesz:</div>
        <div className={styles.big}>Okrężna 1, 64-600 Oborniki</div>
        <div className={styles.big}>Godziny otwarcia:</div>
        <div className={styles.hours}>          
          <div><div>poniedziałek</div>	<div className={styles.bold}>{openingHours.data.attributes.Poniedzialek}</div></div>
          <div><div>wtorek</div>	<div className={styles.bold}>{openingHours.data.attributes.Wtorek}</div></div>
          <div><div>środa</div>	<div className={styles.bold}>{openingHours.data.attributes.Sroda}</div></div>
          <div><div>czwartek</div>	<div className={styles.bold}>{openingHours.data.attributes.Czwartek}</div></div>
          <div><div>piątek</div>	<div className={styles.bold}>{openingHours.data.attributes.Piatek}</div></div>
          <div><div>sobota</div>	<div className={styles.bold}>{openingHours.data.attributes.Sobota}</div></div>
          <div><div>niedziela</div> <div className={styles.bold}>{openingHours.data.attributes.Niedziela}</div></div>
        </div>
        <div className={styles.mapouter}><div className={styles['gmap_canvas']}><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=GhostPizza&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe></div></div>
      </div>
    </main>
    <Footer />
  </div>
</>)
}
