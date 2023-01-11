import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({children}) {
  return (
      <header className={styles.header}>
        <nav>
          <ul>
            <li><Link href="/">Strona główna</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
          </ul>
        </nav>
        <div className="image-column">
          <div className="image-container">
            {children}
          </div>
        </div>
      </header>
    )
}