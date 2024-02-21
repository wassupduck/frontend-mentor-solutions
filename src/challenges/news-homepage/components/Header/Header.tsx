import styles from "./Header.module.css";

import logoImageUrl from "../../assets/images/logo.svg";

import Nav from "../Nav";
import { Link } from "react-router-dom";

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
    <Link to="">
      <img alt="" src={logoImageUrl} />
    </Link>
  );
}
