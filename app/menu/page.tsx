import styles from './menu.module.css';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FixedCallBtn from '../components/FixedCallBtn/FixedCallBtn';
import Image from 'next/image';
import smallPizzaIcon from '../../public/images/30.png';
import mediumPizzaIcon from '../../public/images/40.png';
import bigPizzaIcon from '../../public/images/50.png';
import pepperIcon from '../../public/images/pepper.png';

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

const openGraphImage = { images: ['https://ghost-pizza.pl/images/logo.png'] }
export const metadata = {
    title: 'Ghost Pizza | Menu',
    description: 'Po prostu zakochaj się w naszej pizzy. Spróbuj przepysznego sera w naszej Marghericie, świeżych warzyw w Tajemniczym Ogrodzie i wiele więcej...',
    openGraph: {
      ...openGraphImage,
      title: 'Ghost Pizza | Menu',
      description: 'Po prostu zakochaj się w naszej pizzy. Spróbuj przepysznego sera w naszej Marghericie, świeżych warzyw w Tajemniczym Ogrodzie i wiele więcej...',
      type: 'website',
      url: 'https://ghost-pizza.pl/menu'
    },
}

async function getSizes() {
    const res = await fetch(`${process.env.API_URL}/api/size`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

async function getSaucePrice() {
    const res = await fetch(`${process.env.API_URL}/api/sauce-price`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

async function getPizzas() {
    const res = await fetch(`${process.env.API_URL}/api/pizzas?sort=Pozycja&pagination[pageSize]=1000`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

async function getAdditions() {
    const res = await fetch(`${process.env.API_URL}/api/additions?sort=Pozycja&pagination[pageSize]=1000`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

async function getSauces() {
    const res = await fetch(`${process.env.API_URL}/api/sauces?sort=Pozycja&pagination[pageSize]=1000`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

async function getDrinks() {
    const res = await fetch(`${process.env.API_URL}/api/drinks?sort=Pozycja&pagination[pageSize]=1000`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

export default async function Menu() {
    const sizes = await getSizes();
    const saucePrice = await getSaucePrice();
    const pizzas = await getPizzas();
    console.log(pizzas);
    const additions = await getAdditions();
    const sauces = await getSauces();
    const drinks = await getDrinks();

    function getPepperIcons(length: number) {
        const arr = [];
        for(let pepper=0; pepper < length; pepper++) {
            arr.push(<PepperIcon key={pepper} />)
        }
        return arr;
    }

    const pizzasMap = pizzas.data.map((pizza: any, index: number) => {
        return (
            <div key={index} className={styles.product}>
                <div className={styles.name}>{pizza.attributes.Pozycja}. {pizza.attributes.Nazwa} {pizza.attributes.Ostrosc ? getPepperIcons(pizza.attributes.Ostrosc) : null}</div>
                <div>{pizza.attributes.Skladniki}</div>
                {pizza.attributes.Cena_Mala && pizza.attributes.Cena_Srednia && pizza.attributes.Cena_Duza ? 
                <div className={styles.price}><span><SmallPizza />{pizza.attributes.Cena_Mala}zł</span> <span><MediumPizza />{pizza.attributes.Cena_Srednia}zł</span><span><BigPizza />{pizza.attributes.Cena_Duza}zł</span></div>
                : null}
            </div>
        )
    });

    const additionsMap = additions.data.map((addition: any, index: number) => {
        return (
            <div key={index} className={styles.product}>
                <div className={styles.name}>{addition.attributes.Nazwa}</div>
                <div className={styles.price}><span><SmallPizza />{addition.attributes.Cena_Mala}zł</span> <span><MediumPizza />{addition.attributes.Cena_Srednia}zł</span><span><BigPizza />{addition.attributes.Cena_Duza}zł</span></div>
            </div>
        )
    });

    const saucesMap = sauces.data.map((sauce: any, index: number) => {
        return (
            <div key={index} className={styles.product}>
                <div className={styles.name}>{sauce.attributes.Nazwa} {sauce.attributes.Ostrosc ? getPepperIcons(sauce.attributes.Ostrosc) : null}</div>
            </div>
        )
    });

    const drinksMap = drinks.data.map((drink: any, index: number) => {
        return (
            <div key={index} className={styles.product}>
                <div className={styles.name}>{drink.attributes.Nazwa}</div>
                <div className={styles.price}>{drink.attributes.Cena}zł</div>
            </div>
        )
    });

  return (<div className={styles.bg}>
      <Header isSmall={true} />
      <main className={styles.main}>
        <h2>Pizza:</h2>
        <div className={styles.vege}><div className={styles.circle}><FontAwesomeIcon icon={faLeaf} className={styles.leaf} /></div>VEGE? Zapytaj obsługę</div>
        <div className={styles.legend}>
          <div><SmallPizza />{sizes.data.attributes.Mala}</div>
          <div><MediumPizza />{sizes.data.attributes.Srednia}</div>
          <div><BigPizza />{sizes.data.attributes.Duza}</div>
        </div>
        <div className={styles.container}>
            {pizzasMap}
        </div>
        <h2>Dodatki:</h2>
        <div className={styles.container}>
            {additionsMap}
        </div>
        <h2>Sosy ({saucePrice.data.attributes.Cena}zł):</h2>
        <div className={styles.container}>
          {saucesMap}
        </div>
        <h2>Napoje:</h2>
        <div className={styles.container}>
          {drinksMap}
        </div>
      </main>
      <FixedCallBtn />
    <Footer />
  </div>)
}