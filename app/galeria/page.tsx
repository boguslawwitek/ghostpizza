import styles from './gallery.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FixedCallBtn from '../components/FixedCallBtn/FixedCallBtn';

const openGraphImage = { images: ['https://ghost-pizza.pl/images/logo.png'] }
export const metadata = {
    title: 'Ghost Pizza | Galeria',
    description: 'Sprawdź jak, prezentują się nasze pizze. W naszej galerii znajdziesz kilka zdjęć, prezentujących to, co możesz zamówić.',
    openGraph: {
      ...openGraphImage,
      title: 'Ghost Pizza | Galeria',
      description: 'Sprawdź jak, prezentują się nasze pizze. W naszej galerii znajdziesz kilka zdjęć, prezentujących to, co możesz zamówić.',
      type: 'website',
      url: 'https://ghost-pizza.pl/galeria'
    },
}

async function getImages() {
    const res = await fetch(`${process.env.API_URL}/api/gallery?populate=Zdjecia`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json();
}

export default async function Gallery() {
    const images = await getImages();

    const imagesMap = images.data.attributes.Zdjecia.data.map((image: any, index: number) => (
      <img key={index} className={styles.image} src={`${process.env.API_URL}${image.attributes.url}`} alt="" />
    ));
  
    return (<div className={styles.bg}>
        <Header isSmall={true} />
        <main className={styles.main}>
          <h2>Poniżej znajdziesz kilka zdjęć naszej przepysznej pizzy.</h2>
          <div className={styles.container}>
            {imagesMap}
          </div>
        </main>
        <FixedCallBtn />
      <Footer />
    </div>)
}