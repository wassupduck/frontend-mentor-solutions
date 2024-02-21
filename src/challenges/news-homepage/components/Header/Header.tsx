import styles from "./Header.module.css";

import logoImageUrl from "../../assets/images/logo.svg";

import Nav from "../Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

function Logo() {
  return (
    <a href="">
      <img alt="" src={logoImageUrl} />
    </a>
  );
}
