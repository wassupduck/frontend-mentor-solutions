import styles from "./Nav.module.css";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import menuIconUrl from "../../assets/images/icon-menu.svg";
import menuCloseIconUrl from "../../assets/images/icon-menu-close.svg";
import VisuallyHidden from "../../../../components/VisuallyHidden";
import UnstyledButton from "../../../../components/UnstyledButton";

export default function Nav() {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}

function DesktopNav() {
  return (
    <div className={styles.desktopNav}>
      <NavList />
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.mobileNav}>
      <UnstyledButton type="button" onClick={() => setOpen(true)}>
        <img src={menuIconUrl} />
        <VisuallyHidden>Navigation Menu</VisuallyHidden>
      </UnstyledButton>
      <MobileMenu open={open} onOpenChange={setOpen} />
    </div>
  );
}

function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange(open: boolean): void;
}) {
  return (
    <div>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Overlay className={styles.mobileMenuOverlay} />
        <Dialog.Content className={styles.mobileMenuContent}>
          <Dialog.Close asChild={true}>
            <UnstyledButton className={styles.mobileMenuCloseButton}>
              <img src={menuCloseIconUrl} />
            </UnstyledButton>
          </Dialog.Close>
          <NavList />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

function NavList() {
  return (
    <ul className={styles.navList}>
      <li>
        <a className={styles.navLink} href="">
          Home
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="">
          New
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="">
          Popular
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="">
          Trending
        </a>
      </li>
      <li>
        <a className={styles.navLink} href="">
          Categories
        </a>
      </li>
    </ul>
  );
}
