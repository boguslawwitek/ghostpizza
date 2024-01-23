import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';

async function getYear() {
  const res = await fetch(`${process.env.API_URL}/api/year`, {
    headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
  });
  return res.json()
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className={styles.footer}>
        <div className={styles.links}>
        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/Ghost-Pizza-496670587447074/'><div><FontAwesomeIcon className={styles['footer-icons']} icon={faFacebook} /> Facebook</div></a>
        <a target="_blank" rel="noreferrer" href='https://search.google.com/local/writereview?placeid=ChIJsw8j5fdtBEcRZpTr6Ah-9qU'><div><FontAwesomeIcon className={styles['footer-icons']} icon={faGoogle} /> Wystaw opinie</div></a>
        </div>
        <div>© {year.data.attributes.Rok} GHOST PIZZA Krzysztof Szymański. Wszelkie prawa zastrzeżone.</div>
        <div>Wykonane przez <a target="_blank" rel="noreferrer" href='https://bwitek.dev'>BWitek.dev</a></div>
    </footer>
    )
}