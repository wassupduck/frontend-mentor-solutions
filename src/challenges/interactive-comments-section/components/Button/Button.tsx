import styles from "./Button.module.css";

import UnstyledButton from "../../../../components/UnstyledButton";
import { UnstyledButtonProps } from "../../../../components/UnstyledButton/UnstyledButton";

import clsx from "clsx";

export interface ButtonProps extends UnstyledButtonProps {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  variant = "primary",
  children,
  ...delegated
}: ButtonProps) {
  return (
    <UnstyledButton
      className={clsx(styles.button, styles[`button-${variant}`])}
      {...delegated}
    >
      {children}
    </UnstyledButton>
  );
}
