import styles from "./UnstyledButton.module.css";

import React from "react";
import clsx from "clsx";

export type UnstyledButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ children, className, ...delegated }, forwardedRef) => {
    return (
      <button
        className={clsx(styles.button, className)}
        {...delegated}
        ref={forwardedRef}
      >
        {children}
      </button>
    );
  }
);

export default UnstyledButton;
