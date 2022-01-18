import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navigationList}>
        <a href="">
          <span>home</span>
        </a>
        <a href="">
          <span>projects</span>
        </a>
        <a href="">
          <span>résumé</span>
        </a>
        <a href="">
          <span>contact me</span>
        </a>
      </div>
    </nav>
  )
}