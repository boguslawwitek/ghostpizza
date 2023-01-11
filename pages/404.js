import Link from 'next/link';
import styles from '../styles/Error.module.css';

export default function Custom404() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/images/logo2.png" alt="Logo pizzeri GhostPizza" />
            <h1>404 | Nie znaleźliśmy takiej strony.</h1>
            <Link href="/">Powrót do strony głównej</Link>
        </div>
    )
}