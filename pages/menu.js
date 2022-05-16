import Head from 'next/head';
import styles from '../styles/Menu.module.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SmallPizza = function SmallPizza() {return (
  <img src="/images/30.png" alt="Trzydziesto centymetrowa pizza" height="30px" />
)}

const MediumPizza = function MediumPizza() {return (
  <img src="/images/40.png" alt="Czterdziesto centymetrowa pizza" height="30px" />
)}

const BigPizza = function BigPizza() {return (
  <img src="/images/50.png" alt="Piędziesięcio centymetrowa pizza" height="30px" />
)}

const PepperIcon = function PepperIcon() {return (
  <img src="/images/pepper.png" height="30px" />
)}

export default function Menu() {
  return (<div className={styles.bg}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>Ghost Pizza | Menu</title>
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Ghost Pizza | Menu" />
        <meta name="description" content="U nas zamówisz największą i najlepszą pizzę w Obornikach. Nie czekaj, zadzwoń już teraz." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ghost-pizza.pl/" />
        <meta property="og:title" content="Ghost Pizza | Menu" />
        <meta property="og:description" content="U nas zamówisz największą i najlepszą pizzę w Obornikach. Nie czekaj, zadzwoń już teraz." />
        <meta property="og:image" content="https://ghost-pizza.pl/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ghost-pizza.pl/" />
        <meta property="twitter:title" content="Ghost Pizza | Menu" />
        <meta property="twitter:description" content="U nas zamówisz największą i najlepszą pizzę w Obornikach. Nie czekaj, zadzwoń już teraz." />
        <meta property="twitter:image" content="https://ghost-pizza.pl/images/logo.png" />
      </Head>
      <Header><img className={styles.logo} src="/images/logo2.png" alt="Logo pizzeri GhostPizza" /></Header>
      <main className={styles.main}>
        <h2>Pizza:</h2>
        <div className={styles.legend}>
          <div><SmallPizza />30cm (1-2 os)</div>
          <div><MediumPizza />40cm (2-3 os)</div>
          <div><BigPizza />50cm (3-4 os)</div>
        </div>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>1. Margherita</div>
            <div>sos pomidorowy, ser</div>
            <div className={styles.price}><span><SmallPizza />18zł</span> <span><MediumPizza />25zł</span><span><BigPizza />32zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>2. Pieczara</div>
            <div>sos pomidorowy, ser, pieczarki</div>
            <div className={styles.price}><span><SmallPizza />23zł</span> <span><MediumPizza />32zł</span><span><BigPizza />41zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>3. Scooby-doo</div>
            <div>sos pomidorowy, ser, szynka</div>
            <div className={styles.price}><span><SmallPizza /> 24zł</span> <span><MediumPizza />34zł</span><span><BigPizza />44zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>4. Ninja</div>
            <div>sos pomidorowy, ser, salami</div>
            <div className={styles.price}><span><SmallPizza /> 24zł</span> <span><MediumPizza />34zł</span><span><BigPizza />44zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>5. Capricciosa</div>
            <div>sos pomidorowy, ser, szynka, pieczarki</div>
            <div className={styles.price}><span><SmallPizza /> 29zł</span> <span><MediumPizza />41zł</span><span><BigPizza />53zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>6. Carbonara</div>
            <div>sos serowo-grzybowy, ser, boczek, czosnek, pietruszka</div>
            <div className={styles.price}><span><SmallPizza />30zł</span> <span><MediumPizza />42zł</span><span><BigPizza />54zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>7. Rytuał</div>
            <div>sos pomidorowy, ser, salami, pieczarki, papryka świeża, cebula</div>
            <div className={styles.price}><span><SmallPizza />32zł</span> <span><MediumPizza />45zł</span><span><BigPizza />58zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>8. Plaga</div>
            <div>sos pomidorowy, ser, szynka, papryka świeża, pomidorki cherry, cebula, szczypiorek, ogórek zielony</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /><PepperIcon /> 9. The Ring</div>
            <div>sos pomidorowy, ser, salami, cebula, jalapeno</div>
            <div className={styles.price}><span><SmallPizza />31zł</span> <span><MediumPizza />44zł</span><span><BigPizza />57zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> 10. Dracula</div>
            <div>sos pomidorowy, ser, tuńczyk, cebula, czosnek, sos amerykański</div>
            <div className={styles.price}><span><SmallPizza />31zł</span> <span><MediumPizza />44zł</span><span><BigPizza />57zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>11. Pozytywka</div>
            <div>sos pomidorowy, ser, kurczak, pieczarki, brzoskwinia</div>
            <div className={styles.price}><span><SmallPizza />31zł</span> <span><MediumPizza />44zł</span><span><BigPizza />57zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>12. Dom w głębi lasu</div>
            <div>sos serowo-grzybowy, ser, kurczak, pieczarki, brokuł</div>
            <div className={styles.price}><span><SmallPizza />32zł</span> <span><MediumPizza />45zł</span><span><BigPizza />58zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>13. Oszukać przeznaczenie</div>
            <div>sos pomidorowy, ser, pieczarki, papryka świeża, brokuł, pomidorki cherry, oliwki czarne, kukurydza, kurczak</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> 14. Piła</div>
            <div>sos pomidorowy, ser, salami, konfitura cebulowa, ser kozi, wasabi</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>15. Winchester</div>
            <div>sos pomidorowy, ser, camembert, feta, papryka świeża, nuggetsy</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>16. Chucky</div>
            <div>sos pomidorowy, ser, kurczak, feta, suszone pomidory, rukola</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>17. Troll</div>
            <div>sos pomidorowy, ser, kurczak, szpinak, ser pleśniowy, słonecznik</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>18. Krwawa uczta</div>
            <div>sos pomidorowy, ser, szynka, salami, boczek, kiełbasa, cebula</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>19. Mumia</div>
            <div>sos serowo-grzybowy, ser, kiełbasa, boczek, salami, ogórek kiszony, prażona cebula</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>20. Tajemniczy ogród</div>
            <div>sos pomidorowy, ser, mix sałat, kurczak, pomidorki cherry, ogórek zielony, szczypiorek, sos czosnkowy lub łagodny</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />50zł</span><span><BigPizza />65zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>21. Krzyk</div>
            <div>sos pomidorowy, podwójny ser, kurczak, salami, pomidorki cherry</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />50zł</span><span><BigPizza />65zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>22. Teksańska masakra</div>
            <div>sos serowo-grzybowy, ser, salami, papryka, kukurydza, nachosy, salsa gucamole</div>
            <div className={styles.price}><span><SmallPizza />35zł</span> <span><MediumPizza />50zł</span><span><BigPizza />65zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /><PepperIcon /> 23. Ghost Pizza</div>
            <div>sos pomidorowy, ser, podwójny kurczak, ser pleśniowy, jalapeno</div>
            <div className={styles.price}><span><SmallPizza />36zł</span> <span><MediumPizza />51zł</span><span><BigPizza />66zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>24. Monster</div>
            <div>sos pomidorowy, ser, boczek, jabłko, camembert, syrop klonowy, prażona cebula</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>25. Ty będziesz następna...</div>
            <div>pizza na życzenie</div>
            <div className={styles.price}><span><SmallPizza />33zł</span> <span><MediumPizza />47zł</span><span><BigPizza />61zł</span></div>
          </div>
        </div>
        <h2>Dodatki:</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Dodatek mięsny</div>
            <div className={styles.price}><span><SmallPizza />6zł</span> <span><MediumPizza />9zł</span><span><BigPizza />12zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Dodatek warzywny</div>
            <div className={styles.price}><span><SmallPizza />5zł</span> <span><MediumPizza />7zł</span><span><BigPizza />9zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Dodatkowy ser</div>
            <div className={styles.price}><span><SmallPizza />6zł</span> <span><MediumPizza />9zł</span><span><BigPizza />12zł</span></div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Zamiana na ser vege</div>
            <div className={styles.price}><span><SmallPizza />6zł</span> <span><MediumPizza />9zł</span><span><BigPizza />12zł</span></div>
          </div>
        </div>
        <h2>Sosy (3zł):</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Czosnkowy</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Tysiąca wysp</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> Ostry</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> Amerykański</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>BBQ</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> Serowy chili</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Pomidorowy</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Ketchup curry</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}><PepperIcon /> Słodkie chili</div>
          </div>
        </div>
        <h2>Napoje:</h2>
        <div className={styles.container}>
          <div className={styles.product}>
            <div className={styles.name}>Coca-Cola (0.5l)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>BURN Energy (250ml)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy jabłkowy (330ml)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy pomarańczowy (330ml)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Cappy multiwitamina (330ml)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea cytrynowa (0.5l)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea zielona herbata (0.5l)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea brzoskwiniowa (0.5l)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Fuzetea marakuja zero (0.5l)</div>
            <div className={styles.price}>6zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Woda gazowana</div>
            <div className={styles.price}>4zł</div>
          </div>
          <div className={styles.product}>
            <div className={styles.name}>Woda niegazowana</div>
            <div className={styles.price}>4zł</div>
          </div>
        </div>
      </main>
      <a className="phone-link" href='tel:724444560'><div className={styles.phone}><FontAwesomeIcon className={styles['phone-icon']} icon={faPhone} /> 72 4444 560</div></a>
    <Footer />
  </div>)
}
