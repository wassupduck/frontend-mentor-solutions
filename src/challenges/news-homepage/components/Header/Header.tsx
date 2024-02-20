import styles from "./Header.module.css";

import logoImageUrl from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

function Logo() {
  return <img alt="" src={logoImageUrl} />;
}

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navItem} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/">
            New
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/">
            Popular
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/">
            Trending
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}
