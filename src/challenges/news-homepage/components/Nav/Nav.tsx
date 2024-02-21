import styles from "./Nav.module.css";

import menuIconUrl from "../../assets/images/icon-menu.svg";

export default function Nav() {
  return (
    <nav>
      <div className={styles.desktopNav}>
        <NavList />
      </div>
      <div className={styles.mobileNav}>
        <button type="button" className={styles.mobileNavButton}>
          <img src={menuIconUrl} />
        </button>
      </div>
    </nav>
  );
}

function NavList() {
  return (
    <ul className={styles.navList}>
      <li>
        <a className={styles.navLink} href="/">
          Home
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="/">
          New
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="/">
          Popular
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="/">
          Trending
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="/">
          Categories
        </a>
      </li>
    </ul>
  );
}
