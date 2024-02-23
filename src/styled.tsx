import clsx from "clsx";
import React, { forwardRef } from "react";

function styled<T extends React.ElementType>(Component: T, className: string) {
  const StyledComponent = forwardRef<T, React.ComponentPropsWithoutRef<T>>(
    ({ children, ...props }, ref) => {
      return React.createElement(
        Component,
        {
          ref,
          ...props,
          className: clsx(className, props.className),
        },
        children
      );
    }
  );

  return StyledComponent;
}

export default styled;
