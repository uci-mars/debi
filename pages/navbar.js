import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navigationList}>
        <Link href="/">
          home
        </Link>
        <Link href="/#projects">
          projects
        </Link>
        <Link href="/resume">
          résumé
        </Link>
      </div>
    </nav>
  )
}