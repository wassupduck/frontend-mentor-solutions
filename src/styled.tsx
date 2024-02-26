import clsx from "clsx";
import React, { forwardRef } from "react";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

function styled<
  T extends React.ElementType,
  P extends Partial<Omit<React.ComponentPropsWithoutRef<T>, "className">>
>(Component: T, className: string, staticProps?: P) {
  const StyledComponent = forwardRef<
    T,
    Optional<React.ComponentProps<T>, keyof P>
  >(({ children, ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        ...staticProps,
        ...props,
        className: clsx(className, props.className),
      },
      children ?? staticProps?.children
    );
  });

  return StyledComponent;
}

export default styled;
