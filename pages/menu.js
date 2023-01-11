import Head from 'next/head';
import styles from '../styles/Menu.module.css';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedCallBtn from '../components/FixedCallBtn';
import config from "../config.json";
import Script from 'next/script';
import Image from 'next/image';
import smallPizzaIcon from '../public/images/30.png';
import mediumPizzaIcon from '../public/images/40.png';
import bigPizzaIcon from '../public/images/50.png';
import pepperIcon from '../public/images/pepper.png';
const umamiDataWebsiteID = config.umamiDataWebsiteID;
const umamiSrc = config.umamiSrc;

const SmallPizza = function SmallPizza() {return (
  <Image src={smallPizzaIcon} alt="Trzydziesto centymetrowa pizza" width={30} height={30} />
)}

const MediumPizza = function MediumPizza() {return (
  <Image src={mediumPizzaIcon} alt="Czterdziesto centymetrowa pizza" width={44} height={30} />
)}

const BigPizza = function BigPizza() {return (
  <Image src={bigPizzaIcon} alt="Piędziesięcio centymetrowa pizza" width={56} height={30} />
)}

const PepperIcon = function PepperIcon() {return (
  <Image src={pepperIcon} alt="" width={37} height={29} />
)}

export default function Menu() {
  return (<div className={styles.bg}>
      {umamiDataWebsiteID && umamiSrc ? <Script src={umamiSrc} data-website-id={umamiDataWebsiteID} async defer></Script> : null}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>Ghost Pizza | Menu</title>
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Ghost Pizza | Menu" />
        <meta name="description" content="Po prostu zakochaj się w naszej pizzy. Spróbuj przepysznego sera w naszej Marghericie, świeżych warzyw w Tajemniczym Ogrodzie i wiele więcej..." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ghost-pizza.pl/menu" />
        <meta property="og:title" content="Ghost Pizza | Menu" />
        <meta property="og:description" content="Po prostu zakochaj się w naszej pizzy. Spróbuj przepysznego sera w naszej Marghericie, świeżych warzyw w Tajemniczym Ogrodzie i wiele więcej..." />
        <meta property="og:image" content="https://ghost-pizza.pl/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ghost-pizza.pl/menu" />
        <meta property="twitter:title" content="Ghost Pizza | Menu" />
        <meta property="twitter:description" content="Po prostu zakochaj się w naszej pizzy. Spróbuj przepysznego sera w naszej Marghericie, świeżych warzyw w Tajemniczym Ogrodzie i wiele więcej..." />
        <meta property="twitter:image" content="https://ghost-pizza.pl/images/logo.png" />
      </Head>
      <Header><img className={styles.logo} src="/images/logo2.png" alt="Logo pizzeri GhostPizza" /></Header>
      <main className={styles.main}>
        <h2>Pizza:</h2>
        <div className={styles.vege}><div className={styles.circle}><FontAwesomeIcon icon={faLeaf} className={styles.leaf} /></div>VEGE? Zapytaj obsługę</div>
        <div className={styles.legend}>
          <div><SmallPizza />30cm (1-2 os)</div>
          <div><MediumPizza />40cm (2-3 os)</div>
          <div><BigPizza />50cm (3-4 os)</div>
        </div>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>1. Margherita</div>
            <div>sos pomidorowy, ser</div>
            <div className={styles.price}><span><SmallPizza />21zł</span> <span><MediumPizza />29zł</span><span><BigPizza />37zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>2. Pieczara</div>
            <div>sos pomidorowy, ser, pieczarki</div>
            <div className={styles.price}><span><SmallPizza />27zł</span> <span><MediumPizza />37zł</span><span><BigPizza />47zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>3. Scooby-doo</div>
            <div>sos pomidorowy, ser, szynka</div>
            <div className={styles.price}><span><SmallPizza />28zł</span> <span><MediumPizza />39zł</span><span><BigPizza />50zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>4. Ninja</div>
            <div>sos pomidorowy, ser, salami</div>
            <div className={styles.price}><span><SmallPizza />28zł</span> <span><MediumPizza />39zł</span><span><BigPizza />50zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>5. Capricciosa</div>
            <div>sos pomidorowy, ser, szynka, pieczarki</div>
            <div className={styles.price}><span><SmallPizza />34zł</span> <span><MediumPizza />47zł</span><span><BigPizza />60zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>6. Carbonara</div>
            <div>sos serowo-grzybowy, ser, boczek, czosnek, pietruszka</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />49zł</span><span><BigPizza />63zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>7. Rytuał</div>
            <div>sos pomidorowy, ser, salami, pieczarki, papryka świeża, cebula</div>
            <div className={styles.price}><span><SmallPizza />36zł</span> <span><MediumPizza />50zł</span><span><BigPizza />64zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>8. Plaga</div>
            <div>sos pomidorowy, ser, szynka, papryka świeża, pomidorki cherry, cebula, szczypiorek, ogórek zielony</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>9. The Ring <PepperIcon /><PepperIcon /></div>
            <div>sos pomidorowy, ser, salami, cebula, jalapeno</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />49zł</span><span><BigPizza />63zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>10. Dracula <PepperIcon /></div>
            <div>sos pomidorowy, ser, tuńczyk, cebula, czosnek, sos amerykański</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />49zł</span><span><BigPizza />63zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>11. Pozytywka</div>
            <div>sos pomidorowy, ser, kurczak, pieczarki, brzoskwinia</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />49zł</span><span><BigPizza />63zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>12. Dom w głębi lasu</div>
            <div>sos serowo-grzybowy, ser, kurczak, pieczarki, brokuł</div>
            <div className={styles.price}><span><SmallPizza />36zł</span> <span><MediumPizza />50zł</span><span><BigPizza />64zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>13. Oszukać przeznaczenie</div>
            <div>sos pomidorowy, ser, pieczarki, papryka świeża, brokuł, pomidorki cherry, oliwki czarne, kukurydza, kurczak</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>14. Piła <PepperIcon /></div>
            <div>sos pomidorowy, ser, salami, konfitura cebulowa, ser kozi, wasabi</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>15. Zombie</div>
            <div>sos pomidorowy, mozzarella, camembert, feta, ser pleśniowy</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>16. Chucky</div>
            <div>sos pomidorowy, ser, kurczak, feta, suszone pomidory, rukola</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>17. Troll</div>
            <div>sos pomidorowy, ser, kurczak, szpinak, ser pleśniowy, słonecznik</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>18. Krwawa uczta</div>
            <div>sos pomidorowy, ser, szynka, salami, boczek, kiełbasa, cebula</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>19. Mumia</div>
            <div>sos serowo-grzybowy, ser, kiełbasa, boczek, salami, ogórek kiszony, prażona cebula</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>20. Tajemniczy ogród</div>
            <div>sos pomidorowy, ser, mix sałat, kurczak, pomidorki cherry, ogórek zielony, szczypiorek, sos czosnkowy lub łagodny</div>
            <div className={styles.price}><span><SmallPizza />39zł</span> <span><MediumPizza />59zł</span><span><BigPizza />79zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>21. Krzyk</div>
            <div>sos pomidorowy, podwójny ser, kurczak, salami, pomidorki cherry</div>
            <div className={styles.price}><span><SmallPizza />39zł</span> <span><MediumPizza />59zł</span><span><BigPizza />79zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>22. Teksańska masakra</div>
            <div>sos serowo-grzybowy, ser, salami, papryka, kukurydza, nachosy, salsa gucamole</div>
            <div className={styles.price}><span><SmallPizza />38zł</span> <span><MediumPizza />54zł</span><span><BigPizza />70zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>23. Ghost Pizza <PepperIcon /><PepperIcon /></div>
            <div>sos pomidorowy, ser, podwójny kurczak, ser pleśniowy, jalapeno</div>
            <div className={styles.price}><span><SmallPizza />40zł</span> <span><MediumPizza />60zł</span><span><BigPizza />80zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>24. Monster</div>
            <div>sos pomidorowy, ser, boczek, jabłko, camembert, syrop klonowy, prażona cebula</div>
            <div className={styles.price}><span><SmallPizza />37zł</span> <span><MediumPizza />52zł</span><span><BigPizza />67zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>25. Ty będziesz następna...</div>
            <div>pizza na życzenie</div>
          </div>
        </div>
        <h2>Dodatki:</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Dodatek mięsny</div>
            <div className={styles.price}><span><SmallPizza />7zł</span> <span><MediumPizza />10zł</span><span><BigPizza />13zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Dodatek warzywny</div>
            <div className={styles.price}><span><SmallPizza />6zł</span> <span><MediumPizza />8zł</span><span><BigPizza />10zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Dodatkowy ser</div>
            <div className={styles.price}><span><SmallPizza />7zł</span> <span><MediumPizza />10zł</span><span><BigPizza />13zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Zamiana na ser vege</div>
            <div className={styles.price}><span><SmallPizza />7zł</span> <span><MediumPizza />10zł</span><span><BigPizza />13zł</span></div>
          </div>
        </div>
        <h2>Sosy (3.50zł):</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Czosnkowy</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Tysiąca wysp</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Ostry <PepperIcon /><PepperIcon /></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Amerykański <PepperIcon /><PepperIcon /></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>BBQ</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Serowy chili <PepperIcon /></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Pomidorowy</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Ketchup</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Ketchup curry</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Słodkie chili <PepperIcon /></div>
          </div>
        </div>
        <h2>Napoje:</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Coca-Cola (0.5l)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>BURN Energy (250ml)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy jabłkowy (330ml)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy pomarańczowy (330ml)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy multiwitamina (330ml)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea cytrynowa (0.5l)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea zielona herbata (0.5l)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea brzoskwiniowa (0.5l)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea marakuja zero (0.5l)</div>
            <div className={styles.price}>7zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Woda gazowana</div>
            <div className={styles.price}>5zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Woda niegazowana</div>
            <div className={styles.price}>5zł</div>
          </div>
        </div>
      </main>
      <FixedCallBtn />
    <Footer />
  </div>)
}
