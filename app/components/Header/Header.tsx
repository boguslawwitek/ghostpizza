"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import logoPic from '../../../public/images/logo.png';
import logoDesktopPic from '../../../public/images/logo_desktop.png';

type Props = {
  isSmall?: boolean
};

export default function Header({isSmall=false}:Props) {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(prevState => prevState = window.innerWidth);

        function handleResize() {
        setInnerWidth(prevState => prevState = window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        }

    }, [])

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
            {isSmall ? 
            <div className="image-container">
              <img className={styles['logo-small']} src="/images/logo2.png" alt="Logo pizzeri GhostPizza" />
            </div> : 
            <div className="image-container">
              {innerWidth > 1450 ? <div className={styles['img-container']}><Image priority style={{objectFit: "contain"}} className={styles.logo} src={logoDesktopPic} alt="Logo pizzeri GhostPizza" /></div> : <div className={styles['img-container']}><Image style={{objectFit: "contain"}} className={styles.logo} src={logoPic} alt="Logo pizzeri GhostPizza" /></div>}
            </div>}
          </div>
        </header>
    )
}