import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/FixedCallBtn.module.css';

export default function FixedCallBtn() {
  return (
        <a className="phone-link" href='tel:724444560'>
            <div className={styles.phone}><FontAwesomeIcon className={styles['phone-icon']} icon={faPhone} /> 72 4444 560</div>
        </a>
    )
}