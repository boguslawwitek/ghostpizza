import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FixedCallBtn.module.css';

async function getTelephone() {
    const res = await fetch(`${process.env.API_URL}/api/telephone`, {
      headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    });
    return res.json()
}

export default async function FixedCallBtn() {
    const telephone = await getTelephone();

    return (
        <a className="phone-link" href={`tel:${telephone.data.attributes.Numer_Telefonu}`}>
            <div className={styles.phone}><FontAwesomeIcon className={styles['phone-icon']} icon={faPhone} /> {telephone.data.attributes.Numer_Telefonu}</div>
        </a>
    )
}