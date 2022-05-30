import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header({children}) {
  return (
      <header className={styles.header}>
        <nav>
          <ul>
            <li><Link href="/"><a>Strona główna</a></Link></li>
            <li><Link href="/menu"><a>Menu</a></Link></li>
            <li><Link href="/galeria"><a>Galeria</a></Link></li>
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