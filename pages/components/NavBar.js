import Link from "next/link";
import styles from '../../styles/Navbar.module.css'
export default function NavBar() {
  return (
    <div className={styles.nav}>
      <span className={styles.title}>First Next Js App</span>
      <div className={styles.navs}>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>

      </div>
    </div>
  );
}
