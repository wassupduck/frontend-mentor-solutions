import clsx from "clsx";
import React, { forwardRef } from "react";

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

/* WARNING!

This styled helper should NOT be used.

Issues:
- If two CSS rules have the same specificity
  then the order of the rules in the stylesheet or HTML will
  determine which declarations have priority. When using the styled helper
  to extend a functional component that already has styles applied/has a className
  the actual styles applied will be unpredicatable and determined by the order of the class rules
  in the bundled CSS.

*/
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
