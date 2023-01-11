import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.links}>
          <a target="_blank" rel="noreferrer" href='https://www.facebook.com/Ghost-Pizza-496670587447074/'><div><FontAwesomeIcon className={styles['footer-icons']} icon={faFacebook} /> Facebook</div></a>
          <a target="_blank" rel="noreferrer" href='https://search.google.com/local/writereview?placeid=ChIJsw8j5fdtBEcRZpTr6Ah-9qU'><div><FontAwesomeIcon className={styles['footer-icons']} icon={faGoogle} /> Wystaw opinie</div></a>
        </div>
        <div>© 2023 GHOST PIZZA Krzysztof Szymański. Wszelkie prawa zastrzeżone.</div>
        <div>Wykonane przez <a target="_blank" rel="noreferrer" href='https://bwitek.dev'>BWitek.dev</a></div>
    </footer>
    )
}