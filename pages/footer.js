import styles from '../styles/Home.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.contactLinks}>
        <a href="https://www.linkedin.com/in/debi-vu-22582522b/">
          <FaLinkedinIn />
        </a>
        <a href="mailto:debbiekv@uci.edu">
          <HiOutlineMail />
        </a>
      </div>
      <p>© 2022 Debi Vu</p>
    </footer>
  )
}